let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendSymbol(symbol) {
  display.value += symbol;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let result;
  try {
    result = eval(display.value);
  } catch (error) {
    result = "Error";
  }
  display.value = result;
}
