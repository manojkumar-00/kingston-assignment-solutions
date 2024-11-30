let currentInput = '';
let operator = '';
let previousInput = '';

// Get all the buttons and add event listeners using DOM
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Handle button clicks
function handleButtonClick(event) {
    const value = event.target.getAttribute('data-value');
    if (value === 'Clear') {
        clearDisplay();
    } else if (value === '=') {
        calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
        operate(value);
    } else {
        appendValue(value);
    }
}

// Append value to the display
function appendValue(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

// Set the operator
function operate(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Perform the calculation
function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay("");
}

// Update the display with the current input
function updateDisplay(valuePassed) {
    document.getElementById('display').value = valuePassed;
}
