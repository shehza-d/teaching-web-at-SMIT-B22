const students = [
  "ahmed",
  "anas",
  "fatima",
  "zohaib",
  "ayesha",
  "razzaq",
  "daniyal",
  "shehzad",
];
// array aur object hamesha const se bana hy!!!

students[2] = "Haseeb";

students.sort();
students.reverse();
console.log(students.join("/"));
console.log(students.includes("Fatima"));
console.log(students.indexOf("fatima"));

// last ma add
students.push("ahmed");

// last ma remove
students.pop();

// shuru ma add
students.unshift("hello");

// shuru ma remove
students.shift();

//

const marks = [450, 1000, -110, 130, 500];

marks.sort((a, b) => a - b); // number ko sort karna ascending
marks.sort((a, b) => b - a); // descending

console.log(marks);

// 18/Jul/2026
// Splice and slice

let deletedElements = students.splice(2, 0, "asim", "owais");

console.log("students: ", students);
console.log("deleted: ", deletedElements);

let result = students.slice(2, 7);
console.log("result: ", result);
