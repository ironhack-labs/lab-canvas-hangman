class HangmanCanvas {
	constructor(secretWord) {
		this.ctx = document.getElementById('hangman').getContext('2d');
		this.secretWord = secretWord;
		this.letterPosition = [];
	}

	createBoard() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.drawLines();
	}

	drawLines() {
		let x = 300;
		for (let i = 0; i < this.secretWord.length; i++) {
			if (this.secretWord[i] === ' ') {
				this.ctx.fillStyle = 'red';
				this.ctx.fillRect(x, this.ctx.canvas.height / 2, 30, 2);
			} else {
				this.ctx.fillStyle = 'black';
				this.ctx.fillRect(x, this.ctx.canvas.height / 2, 25, 2);
			}
			this.letterPosition.push(x);
			x += 40;
		}
	}

	writeCorrectLetter(index) {
		this.ctx.font = '25px Arial';
		this.ctx.fillText(this.secretWord[index], this.letterPosition[index], this.ctx.canvas.height / 2 - 2);
	}

	writeWrongLetter(letter, errorsLeft) {}

	drawHangman(shape) {}

	gameOver() {}

	winner() {}
}
