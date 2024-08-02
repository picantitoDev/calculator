let first = null;
let operator = null;
let second = null;

let displayValue = document.getElementById("display-text");
let initialZero = true;
let isOperating = false;
let newOp = true;

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
    displayValue.innerHTML = "0";
    isOperating = false;
    newOp = true;
    first = null;
    second = null;
    operator = null;
});

let resultButton = document.getElementById("result");
resultButton.addEventListener("click", function () {
    let result = operate(operator, parseInt(first), parseInt(second));
    displayValue.innerHTML = result;
    first = displayValue.innerHTML;
    second = null;
    operator = null;
    isOperating = false;
    newOp = true;
    console.log("clicked");
});


let numbers = document.getElementsByClassName("number");
for (let button of numbers) {
    button.addEventListener("click", function () {
        populate(this);
    });
}

let operations = document.getElementsByClassName("operation");
for (let op of operations) {
    op.addEventListener("click", function () {
        if (!isOperating) {
            isOperating = true;
        } else if (isOperating) {
            let result = operate(operator, parseInt(first), parseInt(second));
            displayValue.innerHTML = result;
            first = displayValue.innerHTML;
            newOp = true;
        }
        operator = this.innerHTML;
    });
}

function populate(element) {

    let length = displayValue.innerHTML.length;

    if (length !== 10 && !isOperating) {
        if (initialZero || displayValue.innerHTML.charAt(0) === '0') {
            displayValue.innerHTML = element.innerHTML;
            initialZero = false;
        } else {
            displayValue.innerHTML += element.innerHTML;
        }
        first = displayValue.innerHTML;
    }
    else if (length !== 10 && isOperating) {
        displayValue.innerHTML === "0";
        if (newOp) {
            displayValue.innerHTML = element.innerHTML;
            newOp = false;
        } else {
            displayValue.innerHTML += element.innerHTML;
        }
        second = displayValue.innerHTML;
    }
    console.log(isOperating);
    console.log(first);
    console.log(operator);
    console.log(second);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}




function operate(operator, first, second) {
    switch (operator) {
        case '+':
            return add(first, second);
        case '-':
            return subtract(first, second);
        case 'x':
            return multiply(first, second);
        case '÷':
            return divide(first, second);
        default:
            throw new Error("Invalid operator");
    }
}