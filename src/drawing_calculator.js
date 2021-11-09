import { buttonsList } from './buttonsList';

const drawCalculator = () => {
  const calculator = document.createElement('div');
  document.body.appendChild(calculator);
  calculator.className = 'calculator';

  const outputContainer = document.createElement('div');
  calculator.appendChild(outputContainer);
  outputContainer.className = 'output-container';

  const outputBottom = document.createElement('div');
  outputContainer.appendChild(outputBottom);
  outputBottom.className = 'output-bottom';

  const outputField = document.createElement('output');
  outputBottom.appendChild(outputField);
  outputField.id = 'output';

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';
  calculator.appendChild(buttonContainer);

  buttonsList.forEach((button) => {
    const element = document.createElement('div');

    element.innerHTML = button.label;
    element.className = button.class;
    if (button.id) { element.id = button.id; }
    if (button.value) { element.dataset.value = button.value; }

    buttonContainer.appendChild(element);
  });
};

export { drawCalculator };
