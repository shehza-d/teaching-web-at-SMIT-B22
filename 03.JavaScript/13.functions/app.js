// https://www.w3schools.com/js/js_functions.asp

// function hello(fullName) {
//   console.log("Welcome to Mr.", fullName);
// }

// hello("Shehzad"); // function ko call/invoke kr rahe hyn
// hello("Ahmed");

// hello()
// let abc = hello()

// Parameters = num1 and num2 is parameter
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(`Result is `, result);
}

// sum(3 , 2); // Arguments 3 and 2 is our arguments
// sum(5, 5);
// sum(15 , 15);

// function myNewFunction() {
//   return 6
//   console.log("ye kabhi bhi nhi chale ga");
// }

// console.log(myNewFunction());

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function multiply(a, b, c = 1) {
  return a * b * c;
}

// console.log(multiply(6, 5, 2));
// console.log(multiply(7, 3));
// console.log(multiply(5, 5));

function newFun(city = "karachi") {
  console.log(city); // kuxh ma milne per "karachi" as default parameter mil jaye ga
}
// newFun();

//
