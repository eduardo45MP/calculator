// stores the mathematical expression to be calculated
let expression = "";

// clears the display by resetting the expression variable and updating the display
function clearDisplay() {
  expression = "";
  updateDisplay();
}

// deletes the last digit from the expression variable and updates the display
function deleteDigit() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

// appends a symbol to the expression variable and updates the display
function appendSymbol(symbol) {
  expression += symbol;
  updateDisplay();
}

// evaluates the expression and updates the display with the result
function calculate() {
  const result = eval(expression); // Evaluates the mathematical expression contained in the 'expression' variable and stores the result in the 'result' variable using the JavaScript 'eval()' function.
  expression = result.toString();
  updateDisplay();
}

// updates the display with the current expression
function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = expression;
}
