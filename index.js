let display = document.querySelector(".resultado");
let limparDisplay = false;

function adicionarValor(valor) {
  if (limparDisplay) {
    display.value = "";
    limparDisplay = false;
  }
  display.value += valor;
}
function limpar() {
  display.value = "";
  limparDisplay = false;
}

function adicionarOperador(operador) {
  if (display.value !== "" || operador === "-") {
    display.value += operador;
    limparDisplay = false;
  }
}

function calcular() {
  try {
    display.value = eval(display.value.replace("x", "*"));
    limparDisplay = true;
  } catch (e) {
    display.value = "Error";
    limparDisplay = true;
  }
}
