const betInputEl = document.getElementById('betInput');
const betSelectEl = document.getElementById('betSelect');
const betBtnEl = document.getElementById('betBtn');
const resultMessageEl = document.getElementById('resultMessage');
const resultValueEl = document.getElementById('resultValue');

betBtnEl.addEventListener('click', function () {
	const generatedNumber = parseInt(randomNumber0to5());
	const userNumber = parseInt(betInputEl.value);

	if (isNaN(userNumber) || userNumber < 0 || userNumber > 5) {
		alert('Inserire un numero accettato (Da 0 a 5)');
		betInputEl.value = '';
	} else {
		const sum = generatedNumber + userNumber;

		const result = checkOddOrEven(sum);

		resultValueEl.innerText = result;
		resultValueEl.classList.remove('text-success', 'text-danger');

		if (betSelectEl.value === result) {
			resultValueEl.classList.add('text-success');
			resultMessageEl.innerText = 'User wins, lucky!';
		} else {
			resultValueEl.classList.add('text-danger');
			resultMessageEl.innerText = 'You lost, try again...';
		}
	}
});

function randomNumber0to5() {
	const number = Math.floor(Math.random() * 6);
	return number;
}

function checkOddOrEven(num) {
	let value;

	if (num % 2 === 0) {
		value = 'Even';
	} else {
		value = 'Odd';
	}

	return value;
}
