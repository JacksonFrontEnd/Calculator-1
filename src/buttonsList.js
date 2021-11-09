"use strict";

export { buttonsList };

const buttonsList = [
    { // first row
        label: 'm+',
        value: '',
        class: 'button',
        id: 'mplus'
    }, {
        label: 'm-',
        value: '',
        class: 'button',
        id: 'mminus'
    },
    {
        label: 'mr',
        value: '',
        class: 'button',
        id: 'mr'
    }, {
        label: 'AC',
        value: '',
        class: 'button',
        id: 'ac'
    }, {
        label: '+/-',
        value: 'plusminus',
        class: 'button unary',
        id: ''
    }, {
        label: '%',
        value: '%',
        class: 'button operation',
        id: ''
    }, {
        label: '&#xf7;',
        value: '/',
        class: 'button operation orange',
        id: ''
    }, { // second row
        label: 'x<sup class="superscript">2</sup>',
        value: 'xsquared',
        class: 'button unary',
        id: ''
    }, {
        label: 'x<sup class="superscript">3</sup>',
        value: 'xcubed',
        class: 'button unary',
        id: ''
    }, {
        label: 'mc',
        value: '',
        class: 'button',
        id: 'mc'
    }, {
        label: '7',
        value: '7',
        class: 'button number',
        id: ''
    }, {
        label: '8',
        value: '8',
        class: 'button number',
        id: ''
    }, {
        label: '9',
        value: '9',
        class: 'button number',
        id: ''
    }, {
        label: '&#xd7;',
        value: '*',
        class: 'button operation orange',
        id: ''
    }, { // third row
        label: 'x<sup class="superscript">y</sup>',
        value: '^',
        class: 'button operation',
        id: ''
    }, {
        label: '10<sup class="superscript">x</sup>',
        value: 'tentox',
        class: 'button unary',
        id: ''
    }, {
        label: '1/x',
        value: 'inverse',
        class: 'button unary',
        id: ''
    }, {
        label: '4',
        value: '4',
        class: 'button number',
        id: ''
    }, {
        label: '5',
        value: '5',
        class: 'button number',
        id: ''
    }, {
        label: '6',
        value: '6',
        class: 'button number',
        id: ''
    }, {
        label: '&#x2212;',
        value: '-',
        class: 'button operation orange',
        id: ''
    }, { // forth row
        label: '&#x221A;x',
        value: 'sqrt',
        class: 'button unary',
        id: ''
    }, {
        label: '<sup class="superscript">3</sup>&#x221A;x',
        value: 'cbrt',
        class: 'button unary',
        id: ''
    }, {
        label: '<sup class="superscript">y</sup>&#x221A;x',
        value: 'y√x',
        class: 'button operation',
        id: ''
    }, {
        label: '1',
        value: '1',
        class: 'button number',
        id: ''
    }, {
        label: '2',
        value: '2',
        class: 'button number',
        id: ''
    }, {
        label: '3',
        value: '3',
        class: 'button number',
        id: ''
    }, {
        label: '+',
        value: '+',
        class: 'button operation orange',
        id: ''
    }, {
        label: 'Switch<br>theme',
        value: '',
        class: 'button rounded-bl',
        id: 'switch-theme'
    }, {
        label: 'x!',
        value: 'factorial',
        class: 'button unary',
        id: ''
    }, {
        label: '←',
        value: '',
        class: 'button',
        id: 'cancel'
    }, {
        label: '0',
        value: '0',
        class: 'button big number',
        id: ''
    }, {
        label: ',',
        value: ',',
        class: 'button number',
        id: ''
    }, {
        label: '=',
        value: '=',
        class: 'button operation orange rounded-br',
        id: ''
    }
];