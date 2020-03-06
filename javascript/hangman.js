class Hangman {
	constructor(words) {
		this.words = words;
		this.secretWord = this.pickWord();
		this.letters = [];
		this.guessedLetters = "";
		this.errorsLeft = 10;
	}

	pickWord() {
		let randomWord = Math.floor(Math.random() * this.words.length);
		return this.words[randomWord];
	}

	checkIfLetter(keyCode) {
		if (keyCode >= 65 && keyCode <= 90) {
			return true;
		} else {
			return false;
		}
	}

	checkClickedLetters(letter) {
		let result = this.letters.includes(letter);
		return !result;
	}

	addCorrectLetter(letter) {
		this.guessedLetters += letter;
	}

	addWrongLetter(letter) {
		this.errorsLeft -= 1;
		if (!this.letters.includes(letter)) {
			this.letters.push(letter);
		}
	}

	checkGameOver() {
		if (this.errorsLeft > 0) {
			return false;
		} else {
			return true;
		}
	}

	checkWinner() {
		if (
			this.guessedLetters
				.split("")
				.sort()
				.join("") ===
			this.secretWord
				.split("")
				.sort()
				.join("")
		) {
			return true;
		} else {
			return false;
		}
	}
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
	startGameButton.addEventListener("click", event => {
		hangman = new Hangman([
			"node",
			"javascript",
			"react",
			"miami",
			"paris",
			"amsterdam",
			"lisboa"
		]);
		// HINT (uncomment when start working on the canvas portion of the lab)
		hangman.secretWord = hangman.pickWord();
		hangmanCanvas = new HangmanCanvas(hangman.secretWord);
		hangmanCanvas.createBoard();
	});
}

document.addEventListener("keydown", event => {
	// if (checkIfLetter) {
	// 	if (checkClickedLetters) {
	// 		addCorrectLetter();
	// 	} else {
	// 		addWrongLetter();
	// 	}
	// }
});
