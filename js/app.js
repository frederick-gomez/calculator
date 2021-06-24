const one = document.getElementById('1'),
	two = document.getElementById('2'),
	three = document.getElementById('3'),
	four = document.getElementById('4'),
	five = document.getElementById('5'),
	six = document.getElementById('6'),
	seven = document.getElementById('7'),
	eight = document.getElementById('8'),
	nine = document.getElementById('9'),
	zero = document.getElementById('0'),
	comma = document.getElementById(',');

//Can't append new number
function renderNumbers(num) {
	const currentNumbers = document.getElementById('current-num').textContent;
	let fetchNum = num.value;
	currentNumbers.textContent = currentNumbers + fetchNum;
}

one.addEventListener('click', renderNumbers(one));
