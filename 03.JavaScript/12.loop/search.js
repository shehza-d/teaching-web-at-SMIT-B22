let fruits = ["mango", "apple", "watermelon", "apple", "grape", "apple"];

// ----- han ya na ky value mili hy ya nhi (start) ----------------------
// flag variable (think of it as button)

let isFound = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    isFound = true;
  }
}

if (isFound === true) {
  console.log("Mil gyi value!!!");
} else {
  console.log("Nhi mili value!!!");
}

// ----- han ya na ky value mili hy ya nhi (end) ----------------------

let count = 0;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    count++;
  }
}
console.log("count: ", count);
