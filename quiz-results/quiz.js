import fs from "fs";
import { API, dotenv } from "./dotenv.js";

const res = await fetch(`${API}`, {
  headers: {
    accept: "application/json, text/plain, */*",
    authorization: `Bearer ${dotenv.bearerToken}`,
  },
});

const data = await res.json();
const students = data?.data?.results || [];
const title = students[0]?.quiz?.title || "Quiz";

const formatted = students.map((s) => {
  const marks = s.score;
  const total = s.total_questions || 1;
  const percentage = ((marks / total) * 100).toFixed(2);

  return {
    name:
      s.student_induction?.student_id?.name ||
      s.student_induction?.student_id?.full_name ||
      "Unknown",
    marks,
    percentage,
    status: s.status || (percentage >= 70 ? "passed" : "failed"),
  };
});

// sort descending for highest on top
formatted.sort((a, b) => b.marks - a.marks);

// generate markdown
let md = `# ${title} Results\n\n`;
md += `| S.No | Name | % | Status | Marks |\n`;
md += `|------|------|----|--------|-------|\n`;

formatted.forEach((s, i) => {
  md += `| ${i + 1} | ${s.name} | ${s.percentage}% | ${s.status} | ${s.marks} |\n`;
});

// write file
fs.writeFileSync(`02.${title.split(" ")[0].trim()}.md`, md);

console.log("Markdown generated ✅");
