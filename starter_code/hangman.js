let hangman;
let canvas;

class Hangman {
	constructor() {
		this.words = [
			'pepsi',
			'cartier',
			'ikea',
			'siemens',
			'prada',
			'sprite',
			'ebay',
			'lancome',
			'pampers',
			'budweiser'
		];
		this.secretWord = this.getWord();
		this.letters = [];
		this.guessedLetter = '';
		this.errorsLeft = 10;
	}

	getWord() {
		return this.words[Math.floor(Math.random() * this.words.length)];
	}

	checkIfLetter(keyCode) {
		return keyCode >= 65 && keyCode <= 90 ? true : false;
	}

	checkClickedLetters(key) {
		return !this.letters.includes(key);
	}

	addCorrectLetter(i) {
		this.guessedLetter += this.secretWord[i].toUpperCase();
		this.letters.push(this.secretWord[i]);
		this.checkWinner();
	}

	addWrongLetter(letter) {
		this.letters.push(letter);
		this.errorsLeft--;
		this.checkGameOver();
	}

	checkGameOver() {
		return this.errorsLeft === 0 ? true : false;
	}

	checkWinner() {
		if (this.guessedLetter.length < this.secretWord.length) return false;

		let secretWordArr = this.secretWord.split('').sort();
		let guessedWord = [];
		this.guessedLetter.split('').sort().forEach(letter => {
			if (secretWordArr.includes(letter) && !guessedWord.includes(letter)) {
				guessedWord.push(letter);
			}
		});
		return guessedWord.join('') === secretWordArr.join('');
	}
}

document.getElementById('start-game-button').onclick = () => {
	hangman = new Hangman();
	canvas = new HangmanCanvas(hangman.secretWord);
	canvas.createBoard();
};

document.onkeydown = e => {
	// console.log(e.key, e.keyCode);
	if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
		if (hangman.secretWord.includes(e.key)) {
			hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
			canvas.writeCorrectLetter(hangman.secretWord.indexOf(e.key));
		} else {
			hangman.addWrongLetter(e.key);
			canvas.writeWrongLetter(e.key, hangman.errorsLeft);
		}
	}
};
