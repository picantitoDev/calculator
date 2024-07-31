let first;
let operator;
let number;


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


function operate(operator, first, second){
    switch (operator) {
        case '+':
            return add(first, second);
        case '-':
            return subtract(first, second);
        case '*':
            return multiply(first, second);
        case '/':
            return divide(first, second);
        default:
            throw new Error("Invalid operator");
    }
}

try {
    console.log(operate('+', 5, 3)); // 8
    console.log(operate('/', 10, 2)); // 5
    console.log(operate('/', 10, 0)); // Error
} catch (error) {
    console.error(error.message);
}