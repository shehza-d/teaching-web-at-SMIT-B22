// https://media.geeksforgeeks.org/wp-content/uploads/20260128123038832588/operator.webp

console.log(Math.round(5.1));
console.log((5.18765432).toFixed(2));
console.log((5).toFixed(2));

console.log(Math.ceil(5.2));
console.log(Math.floor(5.9));

console.log(Math.abs(-6)); // sab value ko positive kardeta hy

let dice = Math.floor(Math.random() * 6);

console.log(dice + 1); // gives any random value between 0 to 1

let a = "5";

a = Number(a);
a = parseInt(a);
a = parseFloat(a);
a = +a;

console.log(a);
console.log(typeof a);

let b = 5;

b = String(b);
b = b.toString();

console.log(typeof b);

// ----- Asal Topic --------
// Comparison Operator always returns a Boolean

console.log("shehzad" == "Shehzad");
console.log(7 != 7); // Not equal -->> equal ka ulat / ulta

console.log(5 === "5");
console.log("5" === "5");

console.log(5 !== 6);

console.log(7 >= 7.001);
