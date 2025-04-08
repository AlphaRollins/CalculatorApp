const display = document.querySelector("#display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
      const result = eval(display.value);
      display.value = result;
  } catch {
      display.value = "Error";
  }
}

document.addEventListener('keydown', function (event) {
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];

  if (allowedKeys.includes(event.key)) {
      appendToDisplay(event.key);
  } else if (event.key === 'Enter') {
      calculate();
  } else if (event.key === 'Backspace') {
      display.value = display.value.slice(0, -1);
  } else if (event.key === 'Escape') {
      clearDisplay();
  }
});

