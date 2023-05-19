document.getElementById("expression").value = "2+3";
calculate();
let addition = document.getElementById("result").innerHTML;
console.log(addition);

document.getElementById("expression").value = "9-4";
calculate();
let subtraction = document.getElementById("result").innerHTML;
console.log(subtraction);

document.getElementById("expression").value = "6*2";
calculate();
let multiplication = document.getElementById("result").innerHTML;
console.log(multiplication);

document.getElementById("expression").value = "8/4";
calculate();
let division = document.getElementById("result").innerHTML;
console.log(division);

document.getElementById("expression").value = "5+*3";
calculate();
let invalid = document.getElementById("result").innerHTML;
console.log(invalid);

document.getElementById("expression").value = "1+2";
clearExpression();
calculate();
let cleared = document.getElementById("result").innerHTML;
console.log(cleared);
