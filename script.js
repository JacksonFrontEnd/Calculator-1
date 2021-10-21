"use strict";

// numbers and ","
const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", e => updateOutput(e.target));
}

// operations
const operations = document.getElementsByClassName("operation");

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", e => updateOutput(e.target));
}

// output and expression storage
const outputField = document.getElementById("output");
outputField.value = 0;
// let expressionStorage;

const updateOutput = (input) => {
    if (input.dataset.operation === "=") {
        outputField.value = calculate(outputField.value);

    } else if (input.dataset.operation) {
        if (outputField.value) {
            outputField.value += " " + input.dataset.operation + " ";
        }

    } else {
        if (outputField.value === "0") {
            outputField.value = "";
        }

        outputField.value += input.innerText;
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
// element.className = element.className.replace(/container-1/, 'container-2')

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