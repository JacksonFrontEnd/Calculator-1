import { showError } from "./error_popup";

const calculate = (currentExpression) => {
  const leftOperand = Number(currentExpression[0]); // первое число

  const operation = currentExpression[1]; // знак между числами

  const rightOperand = Number(currentExpression[2]); // второе число
};

export { calculate };