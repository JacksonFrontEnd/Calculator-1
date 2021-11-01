"use strict";

const mPlusButton = document.getElementById("mplus");

const mMinusButton = document.getElementById("mminus");

const mRButton = document.getElementById("mr");

const mCButton = document.getElementById("mc");


mPlusButton.addEventListener("click", () => mPlus());

mMinusButton.addEventListener("click", () => mMinus());

mRButton.addEventListener("click", () => mR());

mCButton.addEventListener("click", () => mC());


let mMemory = 0;

const mPlus = () => {

}

const mMinus = () => { };

const mR = () => { };

const mC = () => {

    mMemory = 0;
}