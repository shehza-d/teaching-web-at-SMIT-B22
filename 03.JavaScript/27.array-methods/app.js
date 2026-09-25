// https://chatgpt.com/share/6ab40436-21b0-83ee-b78b-e63f2815966d
// https://chatgpt.com/share/6ab681af-5590-83ee-bf42-26e4d75b420b

// 1. ye shuru se end tak chalta hy
// 1.b isma break and continue
// 2.
const fruits = ["apple", "banana", "mango", "avocado", "kiwi", "pineapple"];

fruits.map(function (a) {
  console.log(a);
});

//

function getLength(element) {
  return 5;
}

const result1a = fruits.map(getLength);
const result1b = vegetables.map(getLength);
const result2 = fruits.map((value) => value.length);

console.log("result: ", result);

function square(number) {
  return number * number;
}

// Arrow Function
// functions likhne ka short syntax hain
const square = (number) => {
  return number * number;
};
const square = (number) => number * number;

square(5);
//

const square = function (number) {
  return number * number;
};

console.log(square(3));


const result = fruits.filter((element) => {
  let phalaCharacter = element[0];

  return phalaCharacter === "a";
});

console.log(result);

// Array of Objects
const students = [
  { name: "Ali", marks: 80 },
  { name: "Ahmed", marks: 40 },
  { name: "Sara", marks: 75 },
  { name: "Usman", marks: 30 },
  { name: "Shehzad", marks: 99 },
  { name: "Asim", marks: 10 },
];

const result = students.find((student) => student.marks > 50);

// let result = []
// for (let i = 0; i < students.length; i++) {
//   if ( students[i].marks > 50 ) {
//          result.push(students[i])
//   }
// }

console.log(result);
