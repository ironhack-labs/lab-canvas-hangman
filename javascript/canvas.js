class HangmanCanvas {
	constructor(secretWord) {
		this.context = document.getElementById('hangman').getContext('2d');
		// ... your code goes here
		this.secretWord = secretWord;
		//width 1200 / height 800
	}

	createBoard() {
		this.hintSecretWord();
		// ... your code goes here
		//Secret word to show into a password input

		//this.password.setAttribute('type', 'text');
		//this.password.onfocus('type', 'text');
		// $(password).on('focus', function() {
		// 	$(password).attr('type', 'text');
		// });

		this.context.clearRect(0, 0, 1200, 800);
		this.context.font = '48px arial';
		this.context.strokeText('Palabras correctas', 250, 700);
		this.context.strokeStyle = 'red';
		this.context.strokeText('Palabras incorrectas', 650, 130);
		this.context.fillStyle = 'black';
		this.context.strokeStyle = 'black';

		//alert('test');

		this.drawLines();
	}

	//el input quiero hacer que sea un hint, si tiene focus, pone palabra sinó, eliminamos palabra, para no mirar por consola...
	hintSecretWord() {
		let password = document.getElementById('secretWordToFind');
		password.value = this.secretWord;
	}

	writeCorrectLetter(index) {
		// ... your code goes here
		this.context.font = '48px arial';
		this.context.fillStyle = 'black';
		let x = 250 + index * 55;
		this.context.fillText(index, x, 750);
	}

	writeWrongLetter(letter, errorsLeft) {
		// ... your code goes here
		//console.log(errorsLeft);
		this.context.font = '48px arial';
		this.context.fillStyle = 'red';
		let x = 1000 + errorsLeft * -40;
		this.context.fillText(letter, x, 180);
	}

	drawHangman(errorsLeft) {
		// ... your code goes here
		if (errorsLeft === 10) {
			//Triangulo base
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(75, 750);
			this.context.lineTo(200, 750);
			this.context.lineTo(140, 650);
			this.context.fill();
		} else if (errorsLeft === 9) {
			//Palo 1
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(140, 650);
			this.context.lineTo(140, 150);
			this.context.stroke();
		} else if (errorsLeft === 8) {
			//Palo 2
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(140, 150);
			this.context.lineTo(500, 150);
			this.context.stroke();
		} else if (errorsLeft === 7) {
			//Palo hanging
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(500, 150);
			this.context.lineTo(500, 250);
			this.context.stroke();
		} else if (errorsLeft === 6) {
			//Cabeza
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.arc(500, 250, 35, 0, Math.PI * 2);
			this.context.stroke();
			this.context.fill();
		} else if (errorsLeft === 5) {
			//Cuerpo lineal
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(500, 285);
			this.context.lineTo(500, 430);
			this.context.stroke();
			this.context.fill();
		} else if (errorsLeft === 4) {
			//Brazo1
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(500, 300);
			this.context.lineTo(450, 350);
			this.context.stroke();
			this.context.fill();
		} else if (errorsLeft === 3) {
			//brazo2
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(500, 300);
			this.context.lineTo(550, 350);
			this.context.stroke();
			this.context.fill();
		} else if (errorsLeft === 2) {
			//pata1
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(500, 430);
			this.context.lineTo(450, 480);
			this.context.stroke();
			this.context.fill();
		} else {
			//pata2
			this.context.beginPath();
			this.context.fillStyle = 'black';
			this.context.moveTo(500, 430);
			this.context.lineTo(550, 480);
			this.context.stroke();
			this.context.fill();
		}
	}
}
