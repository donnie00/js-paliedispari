const palindromeInputEl = document.getElementById('palindromeInput');
const palindromeBtnEl = document.getElementById('palindromeBtn');
const palindromeMessageEl = document.getElementById('palindromeMessage');

const wordToCheck = palindromeInputEl.value;

palindromeBtnEl.addEventListener('click', checkPalindrome(wordToCheck));

/**
 * Check if word is palindrome
 * @param {String} word
 */

function checkPalindrome(word) {
	const wordArray = word.split('');

	let i = 0;
	while (i < wordArray.length) {
		const firstToCheck = wordArray[i];
		const lastToCheck = wordArray[wordArray.length - 1];

		if (firstToCheck === lastToCheck) {
			wordArray.shift();
			wordArray.pop();
		} else {
			console.log('Non palindroma');
			return false;
		}

		return true;
	}

	// for (let i = 0; i < wordArray.length; i++) {
	// 	const firstoCheck = wordArray[i];
	// 	const lastToCheck = wordArray[wordArray.length - 1];

	// 	console.log(firstToCheck);
	// 	console.log(lastToCheck);
	// }
}

if (result) {
	palindromeMessageEl.innerText = `La parola ${word} è palindroma!`;
} else {
	palindromeMessageEl.innerText(`La parola ${word} non è palindroma!`);
}
