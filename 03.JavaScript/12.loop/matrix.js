// https://pythontutor.com/javascript.html

const matrix1 = [
  [8, 5, 4],
  [2, 3, 0],
  [4, 1, 9],
];

const matrix2 = [
  [11, 2, 7],
  [9, 5, 3],
  [5, 2, 1],
];

// [
//   [19, 7, 11],
//   [11, 8, 3],
//   [9, 3, 10]
// ]

// console.log(matrix1[0][0] + matrix2[0][0]);
// console.log(matrix1[0][1] + matrix2[0][1]);

// console.log(matrix1[1][0] + matrix2[1][0]);
// console.log(matrix1[1][1] + matrix2[1][1]);

let result = [];

for (let i = 0; i < matrix1.length; i++) {
  for (let j = 0; j < matrix1[i].length; j++) {
    let sumValue = matrix1[i][j] + matrix2[i][j];

    if (result[i] === undefined) {
      result[i] = [];
    }
    result[i].push(sumValue);
  }
}
console.log("Result Array: ", result);

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 4; j++) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 4; j++) {
//     console.log(j);
//   }
// }
