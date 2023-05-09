// step 1: select all of the elements that we are going to need:

const numberBtns = document.querySelectorAll('[data-number]'); //Data attributes must be inside brackets.
const operationBtns = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector("[data-all-clear]");
const equalBtn = document.querySelector("[data-equals]");
// Get the text elements
const preiousOperandTextEl = document.querySelector("[data-previous-operand]");
const currentOperandTextEl = document.querySelector("[data-current-operand]");