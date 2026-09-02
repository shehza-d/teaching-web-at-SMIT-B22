// https://notebook.google.com/notebook/92c37792-f247-42ef-a1b8-e480e83db299/artifact/c6d78448-01fd-4388-9e41-527a9b20d882?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_

// const input = document.querySelector("#todo-input")
const ul = document.querySelector("#todo-list");

// function addTodo(event) {
//     event.preventDefault();

//     console.log(input.value)

// }

const todos = ["complete homework", "practice", "recite quran", "read book"];

for (let i = 0; i < todos.length; i++) {
  ul.innerHTML += `<li>${todos[i]}</li>`;
}
