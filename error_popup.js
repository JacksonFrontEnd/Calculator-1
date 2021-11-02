"use strict";


let errorPopup = document.createElement("div");
errorPopup.className = "popup";
document.body.appendChild(errorPopup);


const showError = errorMsg => {
    errorPopup.innerHTML = errorMsg;

    errorPopup.style.visibility = "visible";

    setTimeout(() => {
        errorPopup.innerHTML = "";
        errorPopup.style.visibility = "hidden";
    }, 3000);
}