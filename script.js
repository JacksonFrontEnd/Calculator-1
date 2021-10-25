"use strict";

// numbers and ","
const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", e => updateOutput(e));
}


// operations
const operations = document.getElementsByClassName("operation");

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", e => updateOutput(e));
}


// keyboard input
document.addEventListener("keydown", (e) => {
    updateOutput(e);
});


// output and expression storage
const outputField = document.getElementById("output");
outputField.value = 0;
// let expressionStorage;


const updateOutput = (input) => {
    let inputParsed; // parsing input

    if (input.key) { // keyboard input
        inputParsed = input.key;
    } else { // mouse clicks
        inputParsed = input.target.dataset.value;
    }

    const addDigit = (digit) => {
        if (outputField.value === "0") {
            outputField.value = "";
        }
        outputField.value += digit;
    }

    const addOperation = operation => outputField.value += " " + operation + " ";

    const equals = () => outputField.value = calculate(outputField.value);

    console.log(inputParsed);

    switch (inputParsed) {
        case "=":
            equals();
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            addOperation(inputParsed);
            break;
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
    }

    // expressionStorage = outputField.value.split(" ");
}


// calculating result
const calculate = (str) => {
    return eval(str);
}


// clear function
const ac = document.getElementById("ac");

ac.addEventListener("click", () => {
    outputField.value = 0;
    // expressionStorage = [];
})


//theme switching
const switchTheme = document.getElementById("switch-theme");

switchTheme.addEventListener("click", () => {

    const buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("button-light")
    }

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.toggle("number-light")
    }

    for (let i = 0; i < operations.length; i++) {
        operations[i].classList.toggle("operation-light")
    }

    document.getElementsByClassName("output-bottom")[0].classList.toggle("output-bottom-light");
})