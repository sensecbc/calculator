let firstNumber = "";
let operator = "";
let lastNumber = "";
let display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
display.textContent = "";

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

numbers.forEach((button) =>
  button.addEventListener("click", (e) => {
    let inputDigit = e.target.innerText;
    console.log(inputDigit);
    display.textContent += inputDigit;
  })
);
