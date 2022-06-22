const num1 = prompt("Enter number 1: ");
const operator = prompt("Enter Operator(+, -, *, /): ");
const num2 = prompt("Enter number 2: ");
const sum = Number(num1) + Number(num2);
const subtract = Number(num1) - Number(num2);
const multiply = Number(num1) * Number(num2);
const divide = Number(num1) / Number(num2);

if (operator === "+") {
  // console.log(num1 + num2);
  alert("The sum of your numbers is " + sum);
} else if (operator === "-") {
  // console.log(num1 - num2);
  alert("The subtraction of your numbers is " + subtract);
} else if (operator === "*") {
  // console.log(num1 * num2);
  alert("The multiplication of your numbers is " + multiply);
} else if (operator === "/") {
  // console.log(num1 / num2);
  alert("The division of your numbers is " + divide);
}
