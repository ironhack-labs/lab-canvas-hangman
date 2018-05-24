var hangman;

function Hangman() {
	// An array where we will store all the words that the player need to guess. We will take one of them randomly.
	this.words = ['node','ironhack','bootstrap','jasmine','flexbox','ubuntu'];	
	this.secretWord = ""; // Here we will store the word chosen for each game
	this.letters = []; // An array to store the letters the user already clicked, so we do not repeat them.
	this.guessedLetter = ""; // A string to store the letters the user clicked and guessed. We will use this to know when the user wins.
	this.errorsLeft = 10; // It should start at 10, and decrease every time a user clicks on a letter that is not in the word.
}

Hangman.prototype.getWord = function () {
	let numeroAleatorio = Math.floor(Math.random() * this.words.length);
	return this.words[numeroAleatorio];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
	// MAYUSCULAS A--Z::::::::::::minusculas a--z
	if ( keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122 ){
		return true;
	}
	return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
	if (this.letters.indexOf(key) == -1) {
		// this.letters.push(String.fromCharCode(key).toUpperCase);
		return true;		
	}
	return false;
};

Hangman.prototype.addCorrectLetter = function (key) {

	// This is not good yet

	for(var j = 0; j < this.secretWord.length;j++){
		let letraSecreta = this.secretWord[j].toUpperCase;
		let letraEscrita = String.fromCharCode(i).toUpperCase;
		if (letraSecreta == letraEscrita){
			this.guessedLetter[i] = letraSecreta[j];
		}
	}

	if (this.secretWord == this.guessedLetter){
		return true;
	} else {
		return false;
	}
};

Hangman.prototype.addWrongLetter = function (letter) {
	this.errorsLeft--;

};

Hangman.prototype.checkGameOver = function () {
	if (this.errorsLeft == 0) return true; else return false;
};

Hangman.prototype.checkWinner = function () {
	if (this.guessedLetter == this.secretWord) return true; else return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  HangmanCanvas(hangman.getWord());
  console.log(hangman.secretWord);
  HangmanCanvas.createBoard;
};


document.onkeydown = function (e) {

};
