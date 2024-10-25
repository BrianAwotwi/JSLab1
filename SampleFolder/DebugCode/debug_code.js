function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let product = multiply(num1, num2);
    let quotient = divide(num1, num2);
    let sum = add(num1, num2);
    let difference = subtract(num1, num2);

    // Display the result
    displayResult(product, quotient, sum, difference);
  } else {
    displayResult("Please enter valid numbers");
  }
}

function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a * b;
}

function add(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a + b;
}

function divide(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a / b;
}

function subtract(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a - b;
}

function displayResult(product, quotient, sum, difference) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `The product is ${product}.<br>The quotient is: ${quotient}.<br>The sum is ${sum}.<br>The difference is ${difference}.`;
}
