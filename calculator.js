function appendValue(value) {
  var expressionInput = document.getElementById("expression");
  expressionInput.value += value;
}

function clearExpression() {
  var expressionInput = document.getElementById("expression");
  expressionInput.value = "";
}

function calculate() {
  var expression = document.getElementById("expression").value;
  var result;

  try {
    result = eval(expression);
  } catch (error) {
    result = "Invalid expression";
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
