"use strict";

import { drawCalculator } from './drawing_calculator';
import { addSwitchThemeButton } from './theme_switching';
import { addEventListeners } from './add_event_listeners';
import { addMemoryButtons } from './memory_functions';
import { addErrorElement } from './error_popup';

import './style/style.css';
import './style/light_theme.css';

export { outputField, expressionHistory };

drawCalculator();
addSwitchThemeButton();
addEventListeners();
addMemoryButtons();
addErrorElement();

// output and expression history storage
const outputField = document.getElementById("output");
outputField.value = 0;
const expressionHistory = [[0]];