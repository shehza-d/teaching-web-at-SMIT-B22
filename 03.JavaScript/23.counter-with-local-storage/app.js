// localStorage ma sab chez saruf string ma save hoti hy

localStorage.setItem("name", "Shehzad");
localStorage.setItem("age", "23");
localStorage.setItem("smit", "saylani");

let name = localStorage.getItem("name");

localStorage.removeItem("age");

localStorage.clear(); // clears all

// counter code

const counterPara = document.querySelector("#counter-para");

let counter = localStorage.getItem("counter") || 0; // Phale wali value hy tw wo set kardo nhi tw second value

counterPara.innerHTML = counter; // shuru ma page load hoty hi counter ki value para ma set karne ko

function add() {
  counter++;

  localStorage.setItem("counter", counter);

  counterPara.innerHTML = counter;
}

function sub() {
  counter--;

  localStorage.setItem("counter", counter);

  counterPara.innerHTML = counter;
}

function reset() {
  localStorage.removeItem("counter");

  counterPara.innerHTML = "0";
}

// setting arrays and objects in local storage

const fruits = ["apple", "banana", "grapes", "peach", "mango"];

const fruitsArrayKiString = JSON.stringify(fruits);

localStorage.setItem("key1", fruitsArrayKiString);

let savedString = localStorage.getItem("key1");

let array = JSON.parse(savedString); // string se wapas array/object

console.log(array);
