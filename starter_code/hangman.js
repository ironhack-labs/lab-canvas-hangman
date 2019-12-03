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

	checkGameOver() {}

	checkWinner() {}
}

document.getElementById('start-game-button').onclick = () => {
	hangman = new Hangman();
};

document.onkeydown = e => {
	console.log(e.key);
};
