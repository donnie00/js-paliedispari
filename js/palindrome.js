const palindromeInputEl = document.getElementById('palindromeInput');
const palindromeBtnEl = document.getElementById('palindromeBtn');
const palindromeMessageEl = document.getElementById('palindromeMessage');

palindromeBtnEl.addEventListener('click', function () {
	const wordToCheck = palindromeInputEl.value.toLowerCase();

	if (wordToCheck === '') {
		alert('Inserisci una parola corretta!');
	} else {
		const result = checkPalindrome(wordToCheck);

		if (result) {
			palindromeMessageEl.innerText = `The word ${wordToCheck} is palindrome!`;
		} else {
			palindromeMessageEl.innerText = `THe word ${wordToCheck} is not palindrome!`;
		}
	}
});

/**
 * Check if word is palindrome
 * @param {String} word
 * @return {Boolean}
 */

function checkPalindrome(word) {
	const wordArray = word.split('');

	let i = 0;
	let isCheck = true;
	let isPal = true;
	while (i < wordArray.length && isCheck === true) {
		if (wordArray[i] === wordArray[wordArray.length - 1]) {
			wordArray.shift();
			wordArray.pop();
		} else {
			isCheck = false;
			isPal = false;
		}
	}
	return isPal;
}
