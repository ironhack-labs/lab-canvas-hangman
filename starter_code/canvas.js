class HangmanCanvas {
	constructor(secretWord) {
		this.canvas = document.getElementById('hangman');
		this.ctx = this.canvas.getContext('2d');
		this.secretWord;
		// this.img1 = new Image();
		// this.img1.src = './images/gameover.png';
		// this.img2 = new Image();
		// this.img2.src = './images/awesome.png';
	}

	createBoard() {
		this.drawLines();
	}

	drawLines() {
		console.log(`${this.secretWord}`);
		let axisX = 200;
		let axisY = 450;
		let lineWidth = 75;
		let position = 0;
		for (let i = 0; i < this.secretWord.length; i++) {
			this.ctx.strokeStyle = '#000000';
			this.ctx.beginPath();
			this.ctx.moveTo(axisX + position, axisY);
			this.ctx.lineTo(axisX + lineWidth + position, axisY);
			this.ctx.stroke();
			this.ctx.closePath();
			position += 100;
		}
	}

	writeCorrectLetter(index) {
		let axisX = 215;
		let axisY = 435;
		let position = index * 100;
		this.ctx.font = '75px Georgia';
		this.ctx.fillText(`${this.secretWord[index]}`, axisX + position, axisY);
	}

	writeWrongLetter(letter, errorsLeft) {
		let axisX = 850;
		let axisY = 150;
		let position = (10 - errorsLeft) * 40;
		if (errorsLeft > 5 && errorsLeft > 0) {
			this.ctx.font = '50px Georgia';
			this.ctx.fillText(`${letter}`, axisX + position, axisY);
		} else if (errorsLeft < 6 && errorsLeft > 0) {
			position = (5 - errorsLeft) * 40;
			this.ctx.font = '50px Georgia';
			this.ctx.fillText(`${letter}`, axisX + position, axisY + 50);
		}
	}

	drawHangman(errorsLeft) {
		switch (errorsLeft) {
			case 9:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(50, 450);
				this.ctx.lineTo(150, 450);
				this.ctx.stroke();
				this.ctx.closePath();
				this.ctx.beginPath();
				this.ctx.moveTo(50, 450);
				this.ctx.lineTo(100, 400);
				this.ctx.stroke();
				this.ctx.closePath();
				this.ctx.beginPath();
				this.ctx.moveTo(150, 450);
				this.ctx.lineTo(100, 400);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 8:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(100, 400);
				this.ctx.lineTo(100, 50);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 7:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(100, 50);
				this.ctx.lineTo(350, 50);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 6:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(350, 50);
				this.ctx.lineTo(350, 100);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 5:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.arc(350, 125, 25, 0, 2 * Math.PI);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 4:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(350, 150);
				this.ctx.lineTo(350, 225);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 3:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(350, 225);
				this.ctx.lineTo(320, 275);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 2:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(350, 225);
				this.ctx.lineTo(380, 275);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 1:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(350, 150);
				this.ctx.lineTo(320, 200);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
			case 0:
				this.ctx.strokeStyle = '#000000';
				this.ctx.lineWidth = 5;
				this.ctx.beginPath();
				this.ctx.moveTo(350, 150);
				this.ctx.lineTo(380, 200);
				this.ctx.stroke();
				this.ctx.closePath();
				break;
		}
	}
}

HangmanCanvas.prototype.gameOver = function() {
	this.ctx.drawImage(img1, 400, 100, 400, 300);
};

HangmanCanvas.prototype.winner = function() {
	this.ctx.drawImage(img2, 400, 100, 400, 300);
};

const img1 = new Image();
img1.src = './images/gameover.png';

const img2 = new Image();
img2.src = './images/awesome.png';
