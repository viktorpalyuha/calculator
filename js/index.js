const display = document.querySelector(".calculator .display");
document.querySelectorAll(".calculator .numbers button, .calculator .operators button")
  .forEach(button => button.addEventListener("click", numberOperatorPressed));

function numberOperatorPressed(event) {
  const buttonText = event.target.innerText;
  const lastChar = display.value[display.value.length - 1];
  if (display.value === "Cannot be divided by 0" || display.value === "There's nothing to calculate") {
    display.value = display.value.replace(display.value, buttonText);
  } else if (lastChar === "*" || lastChar === "/" || lastChar === "+" || lastChar === "-") {
    if (buttonText === "*" || buttonText === "/" || buttonText === "+" || buttonText === "-") {
      display.value = display.value.slice(0, -1) + buttonText;
    } else {
      display.value += buttonText;
    }
  } else {
    display.value += buttonText;
  }
}

document.querySelector(".calculator .equals")
  .addEventListener("click", equalsPressed);

function equalsPressed() {
  if (eval(display.value) === Infinity) {
    display.value = "Cannot be divided by 0";
  } else if (eval(display.value) === undefined) {
    display.value = "There's nothing to calculate";
  } else {
    display.value = eval(display.value);
  }
}

document.querySelector(".calculator .clear-all")
  .addEventListener("click", clear);

function clear() {
  display.value = "";
}

document.querySelector(".calculator .backspace")
  .addEventListener("click", backspace);

function backspace() {
  display.value = display.value.slice(0, -1);
}