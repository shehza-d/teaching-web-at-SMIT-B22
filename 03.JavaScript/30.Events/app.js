const button = document.querySelector("#btn");

button.addEventListener("mousedown", () => {
  console.log("click ho raha hy");

  // button.style.color = "red"
  // button.textContent = "Hogya click";
});

document.body.addEventListener("mousemove", (event) => {
  console.log(`x: ${event.x}, y: ${event.y}`);
});
