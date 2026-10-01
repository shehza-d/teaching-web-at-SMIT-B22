// https://chatgpt.com/share/6abd1688-d090-83e8-8166-b23b53d2481c

// Event Loop Visualizer = https://www.jsv9000.app/
// Event Loop Videos
// - https://youtu.be/fFd8OhrHfIM?si=uH1orjQHjCxqL9hz
// - https://youtu.be/eiC58R16hb8?si=nL919GXIkQ4lTbpH
// - https://youtu.be/8aGhZQkoFbQ?si=Ul857ZQ60MfeE1yh

//

// TOPIC 1: Temporal Dead Zone TDZ

var a = undefined;

console.log(a);

a = 5;

console.log(a);

{
  var a = 5;
}
console.log(a);

console.log(b); // error because of TDZ

let b = 6;

// TOPIC 2: Callback = a function passed to another function to be executed later.
function calculate(a, b, hello) {
  const result = hello(a, b); // hello function is a callback function here

  console.log("This is the result: ", result);
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

calculate(4, 3, sum);
calculate(4, 3, (a, b) => a * b);

// TOPIC 3: Event loop

console.log("1");

setTimeout(() => {
  console.log("hello");
}, 0);

console.log("2");

// TOPIC 4: Promises

const p1 = new Promise((resolve, reject) => {
  resolve(123);
  reject("city not found");
});

console.log(p1);

// TOPIC 5: IIFE (https://www.w3schools.com/js/js_function_iife.asp)

(() => {
  console.log("shehzad");
})();

(async () => {
  await console.log("tayyab");
})();

// TOPIC 6: Calling multiple APIs at once

const callAll = async () => {
  const API = `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&`;

  const promise1 = fetch(`${API}q=Karachi`);
  const promise2 = fetch(`${API}q=Lahore`);
  const promise3 = fetch(`${API}q=Islamabad`);
  const promise4 = fetch(`${API}q=Quetta`);
  const promise5 = fetch(`${API}q=Peshawar`);

  const result = await Promise.allSettled([
    promise1,
    promise2,
    promise3,
    promise4,
    promise5,
  ]);

  console.log(result);
};
callAll();

// TOPIC 7a: Destructuring of Array (order)

// Destructuring in JS Videos
// - https://youtu.be/UgEaJBz3bjY?si=NL6s9qeaF6F1-MeX
// - https://youtu.be/_BsE5kmJk6Q?si=sTuk7gjsGOves3w2

const colors = ["red", "green", "blue"];

// const a = colors[0];
// const b = colors[1];
// const c = colors[3];

const [a, b, c] = colors;

console.log(a); // red
console.log(b); // green
console.log(c);

// TOPIC 7b: Destructuring of Object (key)

const user = {
  name: "Ali",
  age: 22,
  city: "Karachi",
};

// const userName = user.name
// const userAge = user.age

const { age, name: userName } = user;

console.log(userName);
