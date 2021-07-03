const numberButtons = document.querySelectorAll('[data-number]');
const operandButtons = document.querySelectorAll('[data-operand]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');
const prevNum = document.getElementById('prev-num');
const currentNum = document.getElementById('current-num');
const operand = document.getElementById('operand');

//Functions

function clearAll() {
	prevNum.innerText = '';
	currentNum.innerText = '';
	operand.innerText = '';
}

function appendNumber(number) {
	if (number === '.' && currentNum.innerText.includes('.')) return;
	currentNum.innerText += number;
}

function deleteNum() {
	currentNum.innerText = currentNum.innerText.toString().slice(0, -1);
}

function chooseOperation(operation) {
	if (!currentNum.innerText) return;
	if (prevNum !== '') {
		compute();
		updateDisplay();
	}
	prevNum.innerText = currentNum.innerText;
	operand.innerText = operation;
	currentNum.innerText = '';
}

function compute() {
	let result;
	const prev = parseFloat(prevNum.innerText);
	const current = parseFloat(currentNum.innerText);
	const operation = operand.innerText;

	if (isNaN(prev) || isNaN(current)) return;
	switch (operation) {
		case '+':
			result = prev + current;
			break;
		case '-':
			result = prev - current;
			break;
		case '÷':
			result = prev / current;
			break;
		case '×':
			result = prev * current;
			break;
		default:
			return;
	}
	prevNum.innerText = '';
	currentNum.innerText = result;
	operand.innerText = '';
}

function updateDisplay() {}

//Event Listeners

numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		appendNumber(button.innerText);
		updateDisplay();
	});
});

operandButtons.forEach((operand) => {
	operand.addEventListener('click', () => {
		chooseOperation(operand.innerText);
		updateDisplay();
	});
});

clearButton.addEventListener('click', clearAll);
equalButton.addEventListener('click', compute);
deleteButton.addEventListener('click', deleteNum);
