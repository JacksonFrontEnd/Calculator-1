"use strict";

export { updateInput, addDigit, addComma, binaryOperation, unaryOperation, equals, goBack };

import { outputField, expressionHistory } from "./index";

import { calculate } from "./calculation";

import { showError } from "./error_popup";

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
        outputField.value = calculate(currentExpression);
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
        outputField.value = calculate(currentExpression);
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
                    result = factorial(Number(lastElement));
                } else {
                    showError("Enter a positive integer");
                }
        }
        currentExpression.splice(-1, 1, result);

        outputField.value = currentExpression.join(" ");
    }
}


const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);


const goBack = () => {
    if (expressionHistory.length) {
        outputField.value = expressionHistory.pop().join(" ");
    }
}