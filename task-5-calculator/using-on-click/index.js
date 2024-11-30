let currentInput = '';
let operator = '';
let previousInput = '';

function appendValue(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function operate(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

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

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
