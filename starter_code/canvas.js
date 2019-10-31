class HangmanCanvas {
	constructor(secretWord) {
		this.canvas = document.getElementById('hangman');
		this.ctx = this.canvas.getContext('2d');
		this.secretWord;
	}

	createBoard() {
		// this.ctx.fillStyle = 'red';
		// this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.attemt10();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(406, 109);
		this.ctx.lineTo(406, 20);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(406, 20);
		this.ctx.lineTo(147, 18);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(147, 18);
		this.ctx.lineTo(147, 385);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(147, 385);
		this.ctx.lineTo(74, 449);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(74, 449);
		this.ctx.lineTo(202, 449);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(202, 449);
		this.ctx.lineTo(147, 386);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(403, 207);
		this.ctx.lineTo(403, 318);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(403, 314);
		this.ctx.lineTo(344, 394);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ctx.moveTo(403, 314);
		this.ctx.lineTo(450, 390);
		this.ctx.stroke();
		this.ctx.closePath();
	}

	drawLines() {}

	writeCorrectLetter(index) {}

	writeWrongLetter(letter, errorsLeft) {}

	drawHangman(shape) {}

	gameOver() {}

	winner() {}

	//Figures
	attemt10() {
		this.ctx.strokeStyle = '#000000';
		this.ctx.save();
		this.ctx.translate(407, 159);
		this.ctx.scale(1, 1);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 48, 0, 6.283185307179586, false);
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.restore();
	}
}
