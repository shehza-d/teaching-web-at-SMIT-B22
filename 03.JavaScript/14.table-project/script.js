const input = document.querySelector("#mera-input");
const para = document.querySelector("#table-output");

function printTable(event) {
  event.preventDefault(); // page refresh na ho

  const tableOf = Number(input.value);

  para.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    para.innerHTML += tableOf + " x " + i + " = " + tableOf * i + "<br>";
  }
}
