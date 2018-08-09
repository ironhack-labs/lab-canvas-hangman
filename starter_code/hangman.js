var hangman;

function Hangman() {
	this.words = [ 'car', 'joke', 'cat' ];
	this.secretWord = '';
	this.letters = [];
	this.guessedLetter = '';
	this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
	var max = this.words.length;

	var randomWordIndex = Math.floor(Math.random() * max);
	this.secretWord = this.words[randomWordIndex];
	return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
	var key = String.fromCharCode(keyCode);
	//this.letters.push(key);
	console.log(key);
	if (key.match(/[a-z]/i)) {
		return true;
	} else {
		return false;
	}
};

Hangman.prototype.checkClickedLetters = function(key) {
	if (this.letters.indexOf(key) !== -1) {
		return false;
	} else {
		return true;
	}
};

Hangman.prototype.addCorrectLetter = function(i) {
	this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
	this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
	if (this.errorsLeft <= 0) {
		return true;
	} else {
		return false;
	}
};

Hangman.prototype.checkWinner = function() {
	var sortSecretWord = this.secretWord.split('').sort().join('');
	var guessedSorted = this.guessedLetter.split('').sort().join('');

	if (sortSecretWord === guessedSorted) {
		return true;
	} else {
		return false;
	}
};

document.getElementById('start-game-button').onclick = function() {
	hangman = new Hangman();
	canvas = new HangmanCanvas();
	canvas.drawLines();
};

document.onkeydown = function(e) {};
