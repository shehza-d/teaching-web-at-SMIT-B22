const { createElement } = require("react");

const h1 = document.querySelector("h1");

// h1.classList.add("error")
// h1.classList.remove("first-h1")
h1.classList.toggle("class-ka-name");

console.log();

// const username = prompt("Apna batao bhai apna")

// h1.textContent =`<h1> ${username} </h1>`

// h1.style.color = 'red'

// console.dir(h1);

// const body = document.querySelector("body");

// // body.innerHTML += "<h2> heading 2 </h2>"

// const h2 = document.createElement("h2");

// const text = document.createTextNode("hello world");

// h2.appendChild(text); // h2 ky andar text add ho raha hy

// Every Element is a Node, but every Node is not an Element.

// body.appendChild(h2);

//

// const allParagraphs = document.querySelectorAll("p");

// for (let i = 0; i < 1000; i++) {
//     const p = document.createElement("p")
//     const text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nobis praesentium nulla temporibus, suscipit earum quod commodi, quisquam quasi ex eum. Voluptas eligendi ipsam hic expedita perferendis laboriosam. Sequi, dolore.")

//     p.style.color = 'red'

//     p.append(text)

//     document.body.append(p)

// }

// allParagraphs.forEach((p, i) => {
//   p.style.color = "red";
// });

const div = createElement("div");
const h2 = createElement("h2");
const p = createElement("p");

div.append(h2, p);

document.body.append(div);

// ul.innerHTML = "<li>"
