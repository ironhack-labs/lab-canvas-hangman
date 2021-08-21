class HangmanCanvas {
	constructor(secretWord) {
		this.context = document.getElementById('hangman').getContext('2d');
		// ... your code goes here
		this.secretWord = secretWord;
		//width 1200 / height 800
	}

	createBoard() {
		// ... your code goes here
		this.context.clearRect(0, 0, 1200, 800);
		//alert('test');

		this.drawLines();
	}

	drawLines() {
		// ... your code goes here

		//Triangulo base
		this.context.beginPath();
		this.context.moveTo(75, 750);
		this.context.lineTo(200, 750);
		this.context.lineTo(140, 650);
		this.context.fill();

		//Palo 1
		this.context.beginPath();
		this.context.moveTo(140, 650);
		this.context.lineTo(140, 150);
		this.context.stroke();

		//Palo 2
		this.context.beginPath();
		this.context.moveTo(140, 150);
		this.context.lineTo(500, 150);
		this.context.stroke();

		//Palo hanging
		this.context.beginPath();
		this.context.moveTo(500, 150);
		this.context.lineTo(500, 250);
		this.context.stroke();

		//Cabeza
		this.context.beginPath();
		this.context.arc(500, 250, 35, 0, Math.PI * 2);
		this.context.stroke();
		this.context.fill();

		//Cuerpo lineal
		this.context.beginPath();
		this.context.moveTo(500, 285);
		this.context.lineTo(500, 430);
		this.context.stroke();
		this.context.fill();

		//Brazo1
		this.context.beginPath();
		this.context.moveTo(500, 300);
		this.context.lineTo(450, 350);
		this.context.stroke();
		this.context.fill();

		//brazo2
		this.context.beginPath();
		this.context.moveTo(500, 300);
		this.context.lineTo(550, 350);
		this.context.stroke();
		this.context.fill();

		//pata1
		this.context.beginPath();
		this.context.moveTo(500, 430);
		this.context.lineTo(450, 480);
		this.context.stroke();
		this.context.fill();

		//pata2
		this.context.beginPath();
		this.context.moveTo(500, 430);
		this.context.lineTo(550, 480);
		this.context.stroke();
		this.context.fill();
	}

	writeCorrectLetter(index) {
		// ... your code goes here
		let x = 200 + index * 55;
		this.ctx.fillText(this.secretWord[index].toUpperCase(), x, 490);
	}

	writeWrongLetter(letter, errorsLeft) {
		// ... your code goes here
		let x = 1050 + errorsLeft * -55;
		this.ctx.fillText(letter.toUpperCase(), x, 150);
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
