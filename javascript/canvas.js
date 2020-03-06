class HangmanCanvas {
	constructor(secretWord) {
		this.context = document.getElementById("hangman").getContext("2d");
		this.secretWord = secretWord;
	}

	createBoard() {
		this.context.clearRect(0, 0, 1200, 800);
		this.drawLines();
	}

	drawLines() {
        // this.context.strokeRect(10, 10, 200, 200);
        console.log(this.secretWord)
		for (let i = 0; i < this.secretWord.length; i++) {
			this.context.lineWidth = 2;
			this.context.beginPath();
			this.context.moveTo(20 + 100 * i, 120);
			this.context.lineTo(80 + 100 * i, 120);
			this.context.stroke();
		}
	}

	writeCorrectLetter(index) {
        
	}

	writeWrongLetter(letter, errorsLeft) {
		// ... your code goes here
	}

	drawHangman(errorsLeft) {
		// ... your code goes here
	}

	gameOver() {
		// ... your code goes here
	}

	winner() {
		// ... your code goes here
	}
}
