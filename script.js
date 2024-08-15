let firstNumber = "";
let operator = "";
let lastNumber = "";
const button = document.querySelector("button");
const display = document.querySelector("#display");
const calculator = document.querySelector("#calculator");

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

document.querySelectorAll("button").forEach(buttao);

function buttao() {
  button.addEventListener("click", (event) => {
    let buttonText = event.target.innerText;
    let buttonClass = event.target.className;

    if (buttonClass == "number") {
      if (firstNumber && !operator) {
        operator = display.textContent;
        display.textContent = "";
      }
      display.textContent += buttonText;
    }
  });
}
