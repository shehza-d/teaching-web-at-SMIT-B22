// https://nodejs.org/dist/v24.21.0/node-v24.21.0-x64.msi

// Assignment video 1: https://youtu.be/PPNNrXEwMYs?si=ZUPi5xdL9LRIzGlM
// Assignment video 2: https://youtu.be/sesUsrV5ims?si=xU_85FEngB8aVjaS

// "use strict"

const a = "shehzad";
const b = "iqbal";
const c = "ahmed";

function add(a, b) {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
};

function greet(name) {
  return `Hello ${name}`;
}

export { a, b, c, add };
export default greet;
