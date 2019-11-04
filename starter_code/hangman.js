class Hangman {
	constructor() {
		this.words = [ 'javascript', 'platzi', 'masorca', 'ironhack' ];
		this.secretWord = '';
		this.letters = [];
		this.guessedLetter = '';
		this.errorsLeft = 10;
	}

	getWord() {
		return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
	}

	checkIfLetter(keyCode) {
		return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) ? true : false;
	}

	checkClickedLetters(key) {
		return this.letters.includes(key) ? false : true;
	}

	addCorrectLetter(i) {
		this.guessedLetter += this.secretWord[i].toUpperCase();
	}

	addWrongLetter(letter) {
		this.errorsLeft--;
		this.letters += letter;
	}

	checkGameOver() {
		return this.errorsLeft === 0 ? true : false;
	}

	checkWinner() {
		return this.guessedLetter.length === this.secretWord.length ? true : false;
	}
}
/**
 * Game instances
 */
const hangman = new Hangman();
const canvas = new HangmanCanvas();
let isCorrect;

document.getElementById('start-game-button').onclick = () => {
	hangman.secretWord = hangman.getWord();
	canvas.secretWord = hangman.secretWord;
	canvas.createBoard();
};

document.onkeydown = (e) => {
	console.log(`${e.keyCode}`);
	isCorrect = false;

	if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key) && hangman.errorsLeft > 0) {
		console.log('Loop');
		for (let i = 0; i < canvas.secretWord.length; i++) {
			if (String(e.key).toUpperCase() === canvas.secretWord[i]) {
				hangman.addCorrectLetter(i);
				canvas.writeCorrectLetter(i);
				isCorrect = true;
			}
		}
		if (!isCorrect) {
			canvas.writeWrongLetter(String(e.key).toUpperCase(), hangman.errorsLeft);
			hangman.addWrongLetter(String(e.key));
			canvas.drawHangman(hangman.errorsLeft);
			isCorrect = false;
		}
	}

	if (hangman.checkGameOver()) {
		canvas.gameOver();
	} else if (hangman.checkWinner()) {
		canvas.winner();
	}
};
