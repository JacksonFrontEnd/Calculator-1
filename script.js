"use strict";


// numbers and ","
const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", e => updateInput(e));
}


// binary ("+", "-", "*", "/", "%", "x^y", "x root y") operations and "="
const operations = document.getElementsByClassName("operation");

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", e => updateInput(e));
}


// unary operations
const unaryOperationsDOM = document.getElementsByClassName("unary");

for (let i = 0; i < unaryOperationsDOM.length; i++) {
    unaryOperationsDOM[i].addEventListener("click", e => updateInput(e));
}


// keyboard input
document.addEventListener("keydown", (e) => {
    updateInput(e);
});


// output and expression history storage
const outputField = document.getElementById("output");
outputField.value = 0;

const expressionHistory = [[0]];


// parsing input
const updateInput = (input) => {
    let inputParsed;

    if (input.key) { // keyboard press
        inputParsed = input.key;
    } else { // mouse click
        inputParsed = input.target.dataset.value;
    }

    switch (inputParsed) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            addDigit(inputParsed);
            break;
        case ".":
        case ",":
            addComma();
            break;
        case "+":
        case "-":
        case "/":
        case "*":
        case "%":
        case "^":
        case "y√x":
            binaryOperation(inputParsed);
            break;
        case "plusminus":
        case "xsquared":
        case "xcubed":
        case "tentox":
        case "inverse":
        case "sqrt":
        case "cbrt":
        case "factorial":
            unaryOperation(inputParsed);
            break;
        case "=":
            equals();
            break;
    }
}


// functions
const addDigit = (digit) => {
    if (outputField.value === "0") {
        outputField.value = "";
    }
    outputField.value += digit;
}


const addComma = () => {
    const currentExpression = outputField.value.split(" ");

    let hasComma = currentExpression[currentExpression.length - 1].includes(".");

    if (!hasComma) {
        currentExpression[currentExpression.length - 1] += ".";
        outputField.value = currentExpression.join(" ");
    }
};


const binaryOperation = operation => {
    const currentExpression = outputField.value.split(" ");

    if (currentExpression.length === 1) { // if there is only the left operand
        outputField.value += " " + operation + " ";
    } else if (currentExpression[2]) { // if there are 2 operands
        expressionHistory.push(currentExpression);
        outputField.value = calculate();
        outputField.value += " " + operation + " ";
    } else {
        outputField.value = outputField.value.slice(0, -3);
        outputField.value += " " + operation + " ";
    }
}

const equals = () => {
    const currentExpression = outputField.value.split(" ");

    if (currentExpression[2]) { // if there are 2 operands
        expressionHistory.push(currentExpression);
        outputField.value = calculate();
    }
}


// unary functions
const unaryOperation = (operation) => {
    const currentExpression = outputField.value.trim().split(" ");

    const lastElement = currentExpression[currentExpression.length - 1];

    let result = 0;

    if (currentExpression.length !== 2) { // if there is only the left operand or there are 2 operands
        switch (operation) {
            case "plusminus":
                if (lastElement !== "0") { // if the left or the right operand is a non 0 number
                    result = -1 * lastElement;
                }
                break;
            case "xsquared":
                result = lastElement ** 2;
                break;
            case "xcubed":
                result = lastElement ** 3;
                break;
            case "tentox":
                result = 10 ** lastElement;
                break;
            case "inverse":
                if (lastElement !== "0") {
                    result = 1 / lastElement;
                } else {
                    showError("Can't divide by 0");
                    break;
                }
            case "sqrt":
                result = lastElement ** (1 / 2);
                break;
            case "cbrt":
                result = lastElement ** (1 / 3);
                break;
            case "factorial":
                if (lastElement >= 1 && !(lastElement % 1)) {
                    result = factorial(lastElement);
                } else {
                    showError("Enter a positive integer");
                }
        }
    }

    currentExpression.splice(-1, 1, result);

    outputField.value = currentExpression.join(" ");

}


const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);


// calculating result
const calculate = () => {
    const currentExpression = outputField.value.split(" ");

    const leftOperand = Number(currentExpression[0]);

    const operation = currentExpression[1];

    const rightOperand = Number(currentExpression[2]);

    let result = 0;

    switch (operation) {
        case "+":
            result = leftOperand + rightOperand;
            break;
        case "-":
            result = leftOperand - rightOperand;
            break;
        case "/":
            if (rightOperand !== 0) {
                result = leftOperand / rightOperand;
            } else {
                showError("Can't divide by 0");
            }
            break;
        case "*":
            result = leftOperand * rightOperand;
            break;
        case "%":
            if (rightOperand !== 0) {
                result = leftOperand % rightOperand;
            } else {
                showError("Can't divide by 0");
            }
            break;
        case "^":
            result = leftOperand ** rightOperand;
            break;
        case "y√x":
            if (leftOperand !== 0) {
                result = rightOperand ** (1 / leftOperand);
            } else {
                showError("Can't get 0th root");
            }
            break;
    }

    return result;
}


// clear function
const ac = document.getElementById("ac");

ac.addEventListener("click", () => {
    outputField.value = 0;
});


// cancel button
const cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", () => goBack());

const goBack = () => {
    if (expressionHistory.length) {
        outputField.value = expressionHistory.pop().join(" ");
    }
}


//theme switching
const switchThemeButton = document.getElementById("switch-theme");

switchThemeButton.addEventListener("click", () => {

    const buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("button-light");
    }

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.toggle("number-light");
    }

    const orangeButtons = document.getElementsByClassName("orange");

    for (let i = 0; i < orangeButtons.length; i++) {
        orangeButtons[i].classList.toggle("blue");
    }

    document.getElementsByClassName("output-bottom")[0].classList.toggle("output-bottom-light");
})