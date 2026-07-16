// https://www.w3schools.com/js/js_functions.asp

function hello() {
  console.log("Welcome to Shehzad");
}

hello(); // function ko call/invoke kr rahe hyn
hello();
hello();

let abc = hello;

console.log(abc());

// Parameters = num1 and num2 is parameter
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(`Result is `, result);
}

sum(3, 2); // Arguments 3 and 2 is our arguments
sum(5, 5);
sum(15, 15);

function myNewFunction() {
  return 6;
  console.log("ye kabhi bhi nhi chale ga");
}

console.log(myNewFunction());

// Default Parameter
function newFun(city = "karachi") {
  console.log(city); // kuxh ma milne per "karachi" as default parameter mil jaye ga
}
newFun();

function multiply(a, b, c = 1) {
  return a * b * c;
}

console.log(multiply(6, 5, 2));
console.log(multiply(7, 3));
console.log(multiply(5, 5));

//

// Rest parameters
function test2(a, ...b) {
  console.log(a); // apple
  console.log(b); // all other values
}
test2("apple", "banana", "pineapple", "grapes");

// console.log(5, 6, 7, 5, 3, 3); // example use of rest parameter

//

function someFunction() {
  console.log("workinggg....");
}

setTimeout(someFunction, 2500);
setInterval(someFunction, 1000);

// https://www.w3schools.com/js/js_precedence.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// Arrow functions
