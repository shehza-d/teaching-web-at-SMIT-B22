// https://www.w3schools.com/js/js_logical.asp

let age = 55;

console.log(!(age > 18));
console.log(!0);
console.log(!5);
console.log(!"false");

// OR Operator (ya)
let test1 = true || true;

console.log(test1);

// AND Operator (aur)
let test2 = true && false && true;

console.log(test2);

let x = 5;
let y = 16;

console.log(x == 5 || y == 5);
console.log(5 < 10 && y > 1);
console.log(!(x === y));

// aakhir truthy value return kare ga
console.log(true && "shehzad");
console.log(true && "");
console.log("shehzad" && true && "smit");
console.log(null && "shehzad" && 56);
console.log(null && "" && 0);
console.log(54 && 55 && 56);
console.log(true && "shehzad" && 56);
console.log(true && 0 && 56);
console.log(true && 1 && false);
console.log("hh" && null);
console.log("hh" && "kk");

// Phale truthy value return kare ga
console.log("shehzad" || true);
console.log("" || null);
console.log("" || true);
console.log("shehzad" || 0 || null || true);
console.log(null || " " || 56);
console.log(true || "shehzad" || 56);
console.log(false || 0 || 56);
console.log("hh" || null);
console.log("hh" || "kk");

// Trick
false || false || false;
true || true || true;
false && false && false;
true && true && true;
