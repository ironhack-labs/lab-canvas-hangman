let hangman;

class Hangman {
	constructor() {
		this.words = [ 'javascript', 'platzi', 'tangamandapio', 'ironhack' ];
		this.secretWord = '';
		this.letters = [];
		this.guessedLetter = '';
		this.errorsLeft = 10;
	}

	getWord() {
		return this.words[Math.floor(Math.random() * this.words.length)];
	}

	checkIfLetter(keyCode) {
		return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) ? true : false;
	}

	checkClickedLetters(key) {
		return this.letters.includes(key) ? false : true;
	}

	addCorrectLetter(i) {
		let secretWordSplit = this.secretWord.split('');
		this.guessedLetter += secretWordSplit[i].toUpperCase();
	}

	addWrongLetter(letter) {
		this.errorsLeft--;
	}

	checkGameOver() {
		return this.errorsLeft === 0 ? true : false;
	}

	checkWinner() {
		return this.guessedLetter.length === this.secretWord.length ? true : false;
	}
}

document.getElementById('start-game-button').onclick = () => {
	hangman = new Hangman();
	let canvas = new HangmanCanvas();
	canvas.createBoard();
};

document.onkeydown = (e) => {};
