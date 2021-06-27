const numberButtons = document.querySelectorAll('[data-number]');
const operandButtons = document.querySelectorAll('[data-operand]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const prevNum = document.getElementById('prev-num');
const currentNum = document.getElementById('current-num');

//Can't append new number
function renderNumbers(num) {
	const currentNumbers = document.getElementById('current-num').textContent;
	let fetchNum = num.value;
	currentNumbers.textContent = currentNumbers + fetchNum;
}
