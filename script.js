"use strict";

const outputTop = document.getElementsByClassName("output-top")[0];

const outputBottom = document.getElementsByClassName("output-bottom")[0];

const numbers = document.getElementsByClassName("number");

const ac = document.getElementById("ac");

ac.addEventListener("click", () => clearOutput());

const clearOutput = () => {
    outputBottom.innerText = "0";
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", e => handleNumberClick(e));
}

const handleNumberClick = (e) => {
    updateInputBottom(e.target.innerText);
}

const updateInputBottom = (number) => {
    if (number === ",") {
        if (outputBottom.innerText === "0") {
            outputBottom.innerText = "0,";
        } else if (!outputBottom.innerText.includes(",")) {
            outputBottom.innerText += ",";
        }
    } else {
        if (outputBottom.innerText === "0") {
            outputBottom.innerText = number;
        } else {
            outputBottom.innerText += number;
        }
    }
}