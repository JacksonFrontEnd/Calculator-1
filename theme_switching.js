"use strict";

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