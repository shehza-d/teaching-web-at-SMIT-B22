// https://notebook.google.com/notebook/92c37792-f247-42ef-a1b8-e480e83db299/artifact/c6d78448-01fd-4388-9e41-527a9b20d882?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_

// https://chatgpt.com/share/6a9fee31-c2bc-83e8-a425-ffc0b6278eee

const input = document.querySelector("#todo-input");
const ul = document.querySelector("#todo-list");

const todos = []

const addTodo = (event) => {
  event.preventDefault(); // page refresh na ho

  todos.push(input.value);

  showTodos();
};

const showTodos = () => {
  // array se values lekar screen per show karna

  ul.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    ul.innerHTML += `<li>${todos[i]} <button onclick="deleteTodo(${i})">delete</button></li>`;
  }
};
showTodos();

const deleteTodo = (index) => {
  todos.splice(index, 1); // array se todo ko delete kr rahi hy

  showTodos(); // array ki values ko screen per show/update kr rahi hy
};
