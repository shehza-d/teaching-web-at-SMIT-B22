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
// Splice and Slice

students.sort(); // original array change ho jaye ga
students.toSorted(); // original array change NHI ho jaye ga

console.log("student Array: ", students);

let deletedElements = students.splice(2, 1);
let copiedArray = students.toSpliced(2, 1);

console.log("students: ", students);
console.log("copied Array: ", copiedArray);
console.log("deleted: ", deletedElements);

let result = students.slice(2, 7);
console.log("result: ", result);
