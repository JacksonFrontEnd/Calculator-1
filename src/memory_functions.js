import { outputField } from "./index";

let mMemory = 0;

const mPlus = () => {}; // функции для работы с памятью калькулятора

const mMinus = () => {};

const mR = () => {};

const mC = () => {};

const addMemoryButtons = () => {
  const mPlusButton = document.getElementById("mplus");
  const mMinusButton = document.getElementById("mminus");
  const mRButton = document.getElementById("mr");
  const mCButton = document.getElementById("mc");

  mPlusButton.addEventListener("click", () => mPlus());
  mMinusButton.addEventListener("click", () => mMinus());
  mRButton.addEventListener("click", () => mR());
  mCButton.addEventListener("click", () => mC());
};

export { addMemoryButtons };