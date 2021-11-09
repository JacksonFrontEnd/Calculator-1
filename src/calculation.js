import { showError } from './error_popup';

const calculate = (currentExpression) => {
  // const currentExpression = outputField.value.split(" ");

  const leftOperand = Number(currentExpression[0]);

  const operation = currentExpression[1];

  const rightOperand = Number(currentExpression[2]);

  let result = 0;

  switch (operation) {
    case '+':
      result = leftOperand + rightOperand;
      break;
    case '-':
      result = leftOperand - rightOperand;
      break;
    case '/':
      if (rightOperand !== 0) {
        result = leftOperand / rightOperand;
      } else {
        showError("Can't divide by 0");
      }
      break;
    case '*':
      result = leftOperand * rightOperand;
      break;
    case '%':
      if (rightOperand !== 0) {
        result = leftOperand % rightOperand;
      } else {
        showError("Can't divide by 0");
      }
      break;
    case '^':
      result = leftOperand ** rightOperand;
      break;
    case 'y√x':
      if (leftOperand !== 0) {
        result = rightOperand ** (1 / leftOperand);
      } else {
        showError("Can't get 0th root");
      }
      break;
    default: break;
  }

  return result;
};

export { calculate };
