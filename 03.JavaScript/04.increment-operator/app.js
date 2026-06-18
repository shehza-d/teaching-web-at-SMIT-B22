let a = 5;

console.log(a++);

console.log(++a);

console.log(a + 3); // 8

a++; // post increment
++a; // pre  increment
a--; // post decrement
--a; // pre  decrement

let salary = 15000;

salary = salary + 2000;
salary += 2000;

console.log(salary);

5 > 3 > 2;

// Decimal → Binary
(12).toString(2); // "1100"

let x = 0b1101; // binary (13)

console.log(x);

let score = 51;

score = score + 5;
score += 5;
score++; // adds 1 only

console.log(score);

let a = 5;
let b = 8;

b = ++a;

console.log("a:", a);
console.log("b:", b);

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;

console.log(nr1++ + ++nr2 * nr3++); // output batao

console.log((2 + 3) * 4);

// ------

let userInputNumber = 4;
let myNum = 10;

myNum = myNum + 23 * 5 - 2 / userInputNumber;

console.log("myNum: ", myNum);

let userInputNumber = 17;

let result = userInputNumber % 5;
console.log("result: ", result);

// -------------

let userInputNumber = 23;

userInputNumber = userInputNumber + 1;
userInputNumber += 1;
userInputNumber++;
userInputNumber++;
userInputNumber--;

console.log("userInputNumber: ", userInputNumber);

let input = 5;

let result = input + 1 + ++input + input++ + --input + input--;
// let result = 5 + 1 + 6 + 6 + 6 + 6;

console.log("result: ", result);
console.log("input: ", input);

// --------

let a = 5;
let b = 3;

let result = a + b-- * ++a + b / --b - a++;

console.log("result: ", result);
console.log("a: ", a);
console.log("b: ", b);
