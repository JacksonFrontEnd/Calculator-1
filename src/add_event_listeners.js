import { updateInput, goBack } from './input_functions';

import { outputField } from './index';

const addEventListeners = () => {
  // numbers and ","
  const numbers = document.getElementsByClassName('number');

  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => updateInput(e));
  }

  // binary ("+", "-", "*", "/", "%", "x^y", "x root y") operations and "="
  const operations = document.getElementsByClassName('operation');

  for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', (e) => updateInput(e));
  }

  // unary operations
  const unaryOperationsDOM = document.getElementsByClassName('unary');

  for (let i = 0; i < unaryOperationsDOM.length; i++) {
    unaryOperationsDOM[i].addEventListener('click', (e) => updateInput(e));
  }

  // clear button
  const ac = document.getElementById('ac');

  ac.addEventListener('click', () => {
    outputField.value = 0;
  });

  // cancel button
  const cancelButton = document.getElementById('cancel');

  cancelButton.addEventListener('click', () => goBack());

  // keyboard input
  document.addEventListener('keydown', (e) => {
    updateInput(e);
  });
};

export { addEventListeners };
