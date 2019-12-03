let hangman;

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
	}

	addWrongLetter(letter) {
		this.errorsLeft--;
	}

	checkGameOver() {
		return this.errorsLeft === 0 ? true : false;
	}

	checkWinner() {
		if (this.guessedLetter.length !== this.secretWord.length) {
			return false;
		} else {
			for (let i = 0; i < this.guessedLetter.length; i++) {
				if (this.secretWord.indexOf(this.guessedLetter[i]) === -1) {
					return false;
				}
			}
			return true;
		}
	}
}

document.getElementById('start-game-button').onclick = () => {
	hangman = new Hangman();
};

document.onkeydown = e => {
	console.log(e.key);
};
