import { drawCalculator } from "./drawing_calculator";
import { addSwitchThemeButton } from "./theme_switching";
import { addEventListeners } from "./add_event_listeners";
import { addMemoryButtons } from "./memory_functions";
import { addErrorElement } from "./error_popup";

import "./style/style.css";
import "./style/light_theme.css";

drawCalculator();
addSwitchThemeButton();
addEventListeners();
addMemoryButtons();
addErrorElement();

const outputField = document.getElementById("output"); // поле для вывода чисел
outputField.value = 0; // его значение
const expressionHistory = [[0]];

export { outputField, expressionHistory };