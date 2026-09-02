let date = new Date(2025, 5, 23);

date = date.getUTCHours()

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());

//

let date = new Date();
let birthday = new Date("2002-1-24");

let diff = date.getTime() - birthday.getTime();
let age = diff / (1000 * 60 * 60 * 24 * 365.25)

console.log(age);


// 15/3/2003
