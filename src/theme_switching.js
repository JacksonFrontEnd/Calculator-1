const addSwitchThemeButton = () => {
  const switchThemeButton = document.getElementById('switch-theme');

  switchThemeButton.addEventListener('click', () => {
    const buttons = document.getElementsByClassName('button');

    const numbers = document.getElementsByClassName('number');

    const orangeButtons = document.getElementsByClassName('orange');

    const outputBottom = document.getElementsByClassName('output-bottom')[0];

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle('button-light');
    }

    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.toggle('number-light');
    }

    for (let i = 0; i < orangeButtons.length; i++) {
      orangeButtons[i].classList.toggle('blue');
    }

    outputBottom.classList.toggle('output-bottom-light');
  });
};

export { addSwitchThemeButton };
