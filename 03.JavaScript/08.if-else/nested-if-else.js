// phale kya solve hoga
// false || false && true

let test = "fail";
let attendance = 55;

// 1
if (test === "pass") {
  if (attendance > 75) {
    console.log("enter in class");
  } else {
    console.log("test tw pass kr liya attendance per bhi focus karo");
  }
} else {
  console.log("ghar jao");
}

// 2
if (test === "pass" && attendance > 75) {
  console.log("enter in class");
} else {
  console.log("ghar jao");
}

// 3 early return (only works with function)
