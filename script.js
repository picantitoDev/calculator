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

let delButton = document.getElementById("delete");
delButton.addEventListener("click", function () {
    if (!(displayValue.innerHTML.length === 1)) {
        let newValue = displayValue.innerHTML.slice(0, -1);
        displayValue.innerHTML = newValue;
        first = displayValue.innerHTML;
    } else {
        displayValue.innerHTML = "0";
        first = displayValue.innerHTML;
    }
});

let decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", function(){

    let currentDisplay = displayValue.innerHTML;
    if(!currentDisplay.includes(".") && !isOperating){
        currentDisplay = currentDisplay + ".";
        first = currentDisplay;
    }else if (!currentDisplay.includes(".") && isOperating){
        currentDisplay = currentDisplay + ".";
        second = currentDisplay;
    }

    displayValue.innerHTML = currentDisplay;

});

let resultButton = document.getElementById("result");
resultButton.addEventListener("click", function () {
    let result = operate(operator, parseFloat(first), parseFloat(second));
    //updateDisplay(result);
    displayValue.innerHTML = result;
    first = displayValue.innerHTML;
    second = null;
    operator = null;
    isOperating = false;
    newOp = true;
    console.log("clicked");
});

let negateButton = document.getElementById("negate");
negateButton.addEventListener("click", function () {

    let currentValue = displayValue.innerHTML;

    if (currentValue !== "0") {
        if (currentValue.charAt(0) === '-') {
            displayValue.innerHTML = currentValue.slice(1);
        } else {
            displayValue.innerHTML = "-" + currentValue;
        }

        if (isOperating) {
            second = displayValue.innerHTML;
        } else {
            first = displayValue.innerHTML;
        }
    }

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
            let result = operate(operator, parseFloat(first), parseFloat(second));
            displayValue.innerHTML = result;
            first = displayValue.innerHTML;
            newOp = true;
        }
        operator = this.innerHTML;
    });
}

function updateDisplay(value) {
    let valueStr = value.toString(); 
    let isDecimal = false;

    if (valueStr.includes(".")) {
        isDecimal = true;
    }

    if (valueStr.length > 9 && !isDecimal) {
        displayValue.innerHTML = parseFloat(value).toExponential(4);
    }
    else if(valueStr.length > 9 && isDecimal){
        displayValue.innerHTML = Math.round(parseFloat(value), (6));
    }
    else {
        displayValue.innerHTML = valueStr; 
    }
}

function populate(element) {

    let length = displayValue.innerHTML.length;

    if (length <= 9 && !isOperating) {
        if (initialZero || displayValue.innerHTML.charAt(0) === '0') {
            displayValue.innerHTML = element.innerHTML;
            initialZero = false;
        } else {
            displayValue.innerHTML += element.innerHTML;
        }
        first = displayValue.innerHTML;
    }
    else if (length <= 9 && isOperating) {
        displayValue.innerHTML === "0";
        if (newOp) {
            displayValue.innerHTML = element.innerHTML;
            newOp = false;
        } else {
            displayValue.innerHTML += element.innerHTML;
        }
        second = displayValue.innerHTML;
    }
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