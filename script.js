
let first;
let operator;
let number;

let displayValue = document.getElementById("display-text");
let initialZero = true;


let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    displayValue.innerHTML = "0";
});


let numbers = document.getElementsByClassName("number");
for(let button of numbers){
    button.addEventListener("click", function(){
        populate(this);
    });
}


function populate(element) {
    if (initialZero || displayValue.innerHTML.charAt(0) === '0') {
        displayValue.innerHTML = element.innerHTML;
        initialZero = false; 
    } else {
        displayValue.innerHTML += element.innerHTML;
    }
}

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
    console.log(operate('/', 10, 0)); // Inf
} catch (error) {
    console.error(error.message);
}