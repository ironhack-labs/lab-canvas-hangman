let hangman;
let canvas;

class Hangman {
	constructor() {
		this.words = [
			'starbucks',
			'cartier',
			'amazon',
			'siemens',
			'prada',
			'ferrari',
			'ebay',
			'lancome',
			'netflix',
			'hyundai'
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
		return keyCode >= 65 && keyCode <= 90;
	}

	checkClickedLetters(key) {
		return !this.letters.includes(key);
	}

	addCorrectLetter(i) {
		for (let j = 0; j < this.secretWord.length; j++) {
			if (this.secretWord[i] === this.secretWord[j]) {
				this.guessedLetter += this.secretWord[i].toUpperCase();
			}
		}
		this.letters.push(this.secretWord[i]);
		this.checkWinner();
	}

	addWrongLetter(letter) {
		this.letters.push(letter);
		this.errorsLeft--;
		this.checkGameOver();
	}

	checkGameOver() {
		return this.errorsLeft === 0;
	}

	checkWinner() {
		return this.guessedLetter.length === this.secretWord.length;
	}
}

function startGame() {
	hangman = new Hangman();
	canvas = new HangmanCanvas(hangman.secretWord);
	canvas.createBoard();
}

function checkGameStatus() {
	if (hangman.checkWinner()) {
		canvas.winner();
		setTimeout(() => {
			startGame();
		}, 1000);
	}
	if (hangman.checkGameOver()) {
		canvas.gameOver();
		setTimeout(() => {
			startGame();
		}, 1000);
	}
}

document.getElementById('start-game-button').onclick = () => {
	startGame();
};

document.onkeydown = e => {
	if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
		if (hangman.secretWord.includes(e.key)) {
			hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
			canvas.writeCorrectLetter(hangman.secretWord.indexOf(e.key));
		} else {
			hangman.addWrongLetter(e.key);
			canvas.writeWrongLetter(e.key, hangman.errorsLeft);
		}
	}

	checkGameStatus();
};
