let food = true;
let tea = true;
let drink = true;

if (food || tea || drink) {
  console.log("le aao");
} else {
  console.log("ghar jao");
}

//

let isEnroll = true;
let passed = true;
let age = 20;

if (isEnroll && passed && age > 18) {
  console.log("Pharai karo class ma");
} else {
  console.log("ghar jao");
}
// if ya else ma se koi ak chalta hy dono ak sath kabhi kabhi bhi nhi chal sagty

// Nested

let input_number = Number(
  prompt("Enter your number to check your grade in one subject."),
);

if (input_number > 90) {
  alert("Grade: A+");
} else if (input_number > 80) {
  alert("Grade: A");
} else if (input_number > 70) {
  alert("Grade: B");
} else if (input_number > 60) {
  alert("Grade: C");
} else if (input_number > 50) {
  alert("Grade: D");
} else {
  alert("Grade: F");
}

// ------------------------

// let age = 20;

// let a = age - 18;

// if (Math.abs(a) === a) {
//   console.log("vote kr sagta hy");
// } else  {
//   console.log("sabar karo!");
// }
