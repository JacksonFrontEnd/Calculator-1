import { outputField } from './index';

let mMemory = 0;

const mPlus = () => {
  const currentExpression = outputField.value.trim().split(' ');

  const numberToAdd = currentExpression.length === 3
    ? Number(currentExpression[2])
    : Number(currentExpression[0]);

  mMemory += numberToAdd;
};

const mMinus = () => {
  const currentExpression = outputField.value.trim().split(' ');

  const numberToSubtract = currentExpression.length === 3
    ? Number(currentExpression[2])
    : Number(currentExpression[0]);

  mMemory -= numberToSubtract;
};

const mR = () => {
  outputField.value = mMemory;
};

const mC = () => {
  mMemory = 0;
};

const addMemoryButtons = () => {
  const mPlusButton = document.getElementById('mplus');
  const mMinusButton = document.getElementById('mminus');
  const mRButton = document.getElementById('mr');
  const mCButton = document.getElementById('mc');

  mPlusButton.addEventListener('click', () => mPlus());
  mMinusButton.addEventListener('click', () => mMinus());
  mRButton.addEventListener('click', () => mR());
  mCButton.addEventListener('click', () => mC());
};

export { addMemoryButtons };
