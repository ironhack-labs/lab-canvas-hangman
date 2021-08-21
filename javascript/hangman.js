class Hangman {
	constructor(words) {
		this.words = words;
		// ... your code goes here
		this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
		this.letters = [];
		this.guessedLetters = '';
		this.errorsLeft = 10;
	}

	pickWord() {
		// ... your code goes here
		//LEE MEJOR LOS TEST, pone constructor, no aquí...
		//this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];

		return this.secretWord;
	}

	checkIfLetter(keyCode) {
		// ... your code goes here
		return keyCode >= 65 && keyCode <= 90 ? true : false;
	}

	//checkClickedLetters(letter) - a method that should check if the letter passed as an argument has
	// already been pressed. It should return true if it was not or false in the opposite case.
	checkClickedLetters(letter) {
		// ... your code goes here
		if (this.letters.includes(letter)) {
			this.letters.push(letter);
			return false;
		} else {
			this.letters.push(letter);
			return true;
		}
	}

	/*addCorrectLetter(letter) - a method that should add the passed letter
   to the guessedLetters property. This could be a good place to check if the user won.*/
	addCorrectLetter(letter) {
		// ... your code goes here
		this.guessedLetters += letter;
		//console.log(this.guessedLetters);
		//this.checkWinner();
	}

	addWrongLetter(letter) {
		// ... your code goes here
		//console.log(letter);
		letter = this.errorsLeft--;
		//console.log(letter);
		return letter;
	}

	checkGameOver() {
		// ... your code goes here
		// console.log(this.errorsLeft);
		// console.log(this.errorsLeft >= 0 ? true : false);
		return this.errorsLeft > 0 ? true : false;
	}

	checkWinner() {
		// ... your code goes here
		return this.secretWord.length === this.guessedLetters.length ? true : false;
		//return this.guessedLetters.includes(this.secretWord) ? true : false;
	}
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
	startGameButton.addEventListener('click', (event) => {
		hangman = new Hangman([ 'node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa' ]);

		// HINT (uncomment when start working on the canvas portion of the lab)
		hangman.secretWord = hangman.pickWord();
		hangmanCanvas = new HangmanCanvas(hangman.secretWord);

		// ... your code goes here
		console.log(hangman.secretWord);
		hangmanCanvas.createBoard();
	});
}

document.addEventListener('keydown', (event) => {
	let letterToPassAsKey = event.keyCode;
	let letterToPassAsLetter = event.key;
	document.getElementById('instrucciones').value = ' ';
	//console.log(letterToPassAsLetter);
	// React to user pressing a key
	// ... your code goes here
	//Miramos que la tecla sea la correcta checkIfLetter()
	//miramos que no se repita la tecla checkClickedLetters()
	//miramos si la letra (palabra) está dentro de la palabra misteriosa y pintamos palabro
	if (hangman.checkGameOver() && !hangman.checkWinner()) {
		if (hangman.checkIfLetter(letterToPassAsKey)) {
			if (hangman.checkClickedLetters(letterToPassAsLetter)) {
				//Si la palabra secreta incluye la letra pulsada, guardamos letra y pintamos palabro
				if (hangman.secretWord.includes(letterToPassAsLetter)) {
					//hangman.addCorrectLetter(letterToPassAsLetter);
					const posicionLetra = [];

					for (let i = 0; i < hangman.secretWord.length; i++) {
						if (hangman.secretWord[i] === letterToPassAsLetter) posicionLetra.push(i);
					}

					posicionLetra.map((index) => {
						hangman.addCorrectLetter(index);
						hangmanCanvas.writeCorrectLetter(index);
					});

					// hangmanCanvas.writeCorrectLetter(index);
					// console.log('SI');
				} else if (!hangman.secretWord.includes(letterToPassAsLetter)) {
					//hangman.addWrongLetter(letterToPassAsLetter);
					hangmanCanvas.writeWrongLetter(letterToPassAsLetter, hangman.errorsLeft);
					hangmanCanvas.drawHangman(hangman.addWrongLetter(letterToPassAsLetter));

					// if (hangman.checkGameOver()) {
					// 	null;
					// } else {
					// 	alert('LOSER');
					// }
				}
			} else {
				document.getElementById('instrucciones').value = 'Tecla repetida';
				//console.log('tecla repetida');
				//hangman.addWrongLetter(letterToPassAsLetter);
			}
		} else {
			document.getElementById('instrucciones').value = 'Tecla fuera del rango a-z';
			//console.log('not a good key');
			// alert('not a good key');
		}
	} else if (hangman.checkWinner()) {
		alert('HAS GANADO');
		location.reload();
		//console.log('Has ganado');
	} else {
		alert('HAS PERDIDO');
		location.reload();
		//console.log('Has perdido');
	}
});
/*
writeCorrectLetter(index) and writeWrongLetter(letter, errorsLeft) - the methods that should write the letter 
on which the user has just clicked, on the appropriate part of the canvas. After checking if the letter was
 not already clicked, we should write it on our board. If the secret word includes the letter, we should 
 write it in the position where it belongs, and if the letter is not included in the secret word, we should 
 write it on the top right corner, so that the user knows which letters were already clicked.
*/
