"use strict";


// numbers and ","
const numbers = document.getElementsByClassName("number");

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", e => updateInput(e));
}


// "+", "-", "*", "/", "=" operations
const operations = document.getElementsByClassName("operation");

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", e => updateInput(e));
}


// unary operations
const unaryOperations = document.getElementsByClassName("unary");

for (let i = 0; i < unaryOperations.length; i++) {
    unaryOperations[i].addEventListener("click", e => updateInput(e));
}


// keyboard input
document.addEventListener("keydown", (e) => {
    updateInput(e);
});


// input, output and expression storage
const outputField = document.getElementById("output");
outputField.value = 0;
let expressionStorage;


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
            addOperation(inputParsed);
            break;
        case "plusminus":
            unaryPlusMinus();
            break;
        case "xsquared":
            unarySquared();
            break;
        case "xcubed":
            unaryCubed();
            break;
        case "tentox":
            unaryTenToX();
            break;
        case "inverse":
            unaryInverse();
            break;
        case "sqrt":
            unarySqrt();
            break;
        case "cbrt":
            unaryCbrt();
            break;
        case "factorial":
            unaryFactorial();
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
    expressionStorage = outputField.value.split(" ");

    let hasComma = expressionStorage[expressionStorage.length - 1].includes(".");

    if (!hasComma) {
        expressionStorage[expressionStorage.length - 1] += ".";
        outputField.value = expressionStorage.join(" ");
    }
};

const addOperation = operation => outputField.value += " " + operation + " ";

const equals = () => {
    expressionStorage = outputField.value.split(" ");
    outputField.value = calculate(expressionStorage);
}


// unary functions
const unaryPlusMinus = () => {
    expressionStorage = outputField.value.split(" ");

    let lastElement = expressionStorage[expressionStorage.length - 1];

    if (lastElement !== "0" && lastElement !== "") {
        let result = -1 * lastElement;
        expressionStorage.splice(-1, 1, result);
        outputField.value = expressionStorage.join(" ");
    } else {
        alert("first enter a number");
    }
}

const unarySquared = () => {
    expressionStorage = outputField.value.split(" ");

    const lastElement = expressionStorage[expressionStorage.length - 1];

    const result = lastElement ** 2;

    console.log(result);

    expressionStorage.splice(-1, 1, result);

    outputField.value = expressionStorage.join(" ");
};

const unaryCubed = () => {
    expressionStorage = outputField.value.split(" ");

    const lastElement = expressionStorage[expressionStorage.length - 1];

    const result = lastElement ** 3;

    expressionStorage.splice(-1, 1, result);

    outputField.value = expressionStorage.join(" ");
};


const unaryTenToX = () => {
    expressionStorage = outputField.value.split(" ");

    const lastElement = expressionStorage[expressionStorage.length - 1];

    const result = 10 ** lastElement;

    expressionStorage.splice(-1, 1, result);

    outputField.value = expressionStorage.join(" ");
}

const unaryInverse = () => {
    expressionStorage = outputField.value.split(" ");

    const lastElement = expressionStorage[expressionStorage.length - 1];

    const result = 1 / lastElement;

    expressionStorage.splice(-1, 1, result);

    outputField.value = expressionStorage.join(" ");
}

const unarySqrt = () => {
    expressionStorage = outputField.value.split(" ");

    const lastElement = expressionStorage[expressionStorage.length - 1];

    const result = lastElement ** (1 / 2);

    expressionStorage.splice(-1, 1, result);

    outputField.value = expressionStorage.join(" ");
}


const unaryCbrt = () => {
    expressionStorage = outputField.value.split(" ");

    const lastElement = expressionStorage[expressionStorage.length - 1];

    const result = lastElement ** (1 / 3);

    expressionStorage.splice(-1, 1, result);

    outputField.value = expressionStorage.join(" ");
}

const unaryFactorial = () => {
    expressionStorage = outputField.value.split(" ");

    const lastElement = expressionStorage[expressionStorage.length - 1];

    if (lastElement >= 1 && !(lastElement % 1)) {

        let result = factorial(lastElement);

        expressionStorage.splice(-1, 1, result);

        outputField.value = expressionStorage.join(" ");
    } else {
        alert("Enter a positive integer");
    }
}

const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);


// calculating result (temporarily with eval())
const calculate = (expression) => {
    return eval(expression.join(""));
}


// clear function
const ac = document.getElementById("ac");

ac.addEventListener("click", () => {
    outputField.value = 0;
});


//theme switching
const switchTheme = document.getElementById("switch-theme");

switchTheme.addEventListener("click", () => {

    const buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("button-light");
    }

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.toggle("number-light");
    }

    for (let i = 0; i < operations.length; i++) {
        operations[i].classList.toggle("operation-light");
    }

    document.getElementsByClassName("output-bottom")[0].classList.toggle("output-bottom-light");
})
