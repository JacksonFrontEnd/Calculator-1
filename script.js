"use strict";

// numbers and ","
const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", e => updateOutput(e.target));
}

// operations
const operations = document.getElementsByClassName("orange");

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
    return eval(str + "+0");
}

// clear function
const ac = document.getElementById("ac");

ac.addEventListener("click", () => {
    outputField.value = 0;
    // expressionStorage = [];
})