// const matrix1 = [
//   [2, 1, 7, 8],
//   [1, 0],
//   [4, 3, -2, 9],
// ];

// const matrix2 = [
//   [1, 1, 7, 8],
//   [4, 5],
//   [2, 3, 3, -9],
// ];
// // rows
// let result = [];

// for (let row = 0; row < matrix1.length; row++) {
//   for (let col = 0; col < matrix1[row].length; col++) {
//     //
//     let sum = matrix1[row][col] + matrix2[row][col];

//     if (result[row] === undefined) {
//       result.push([]);
//     }

//     result[row].push(sum);
//   }
// }
// console.log("Result: ", result);

// 2 ----------------------------
const input = document.querySelector("#my-input");
const para = document.querySelector("#result-para");

function printMyTable(event) {
  event.preventDefault();

  const tableOf = Number(input.value);

  for (let i = 1; i < 13; i++) {
    const result = tableOf + " x " + i + " = " + tableOf * i;

    para.innerHTML += result + "<br>";
  }
}
