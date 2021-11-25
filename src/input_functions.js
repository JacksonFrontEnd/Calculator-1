import { outputField, expressionHistory } from "./index"; //outputField поле, которое содержит выражение, которое мы вводим ( пример 2 + 2 ), expressionHistory нужно для отката назад(пока не делаем)

import { calculate } from "./calculation"; //функция для подсчёта БИНАРНЫХ мат. операций

import { showError } from "./error_popup"; // вывод ошибки если что то пошло не так

// functions
const addDigit = (digit) => {};

const addComma = () => {};

const binaryOperation = (operation) => {};

const equals = () => {};

const factorial = (n) => n; // дописать (по возможности рекурсивно)

// unary functions
const unaryOperation = (operation) => {};

// parsing input
const updateInput = (input) => {
  let inputParsed;

  if (input.key) {
    // keyboard press
    inputParsed = input.key;
  } else {
    // mouse click
    inputParsed = input.target.dataset.value;
  }
  // здесь тебе надо проверить корректность ввода ( т.к. мы можем вводить числа,знаки (и не только) и с клавиатуры )
  // и в зависимости от того, что мы ввели вызвать нужную функцию
};

const goBack = () => {
  //для отката (можешь пока не реализовать)
};

export {
  updateInput,
  addDigit,
  addComma,
  binaryOperation,
  unaryOperation,
  equals,
  goBack,
};