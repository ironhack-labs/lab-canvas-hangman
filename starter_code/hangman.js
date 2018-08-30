var hangman;

function Hangman() {
	this.words = ['m','e','t','a'];
	this.secretWord = "";
	this.letters = [];
	this.guessedLetter = "";
	this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
	var position = Math.floor(Math.random() * this.words.length);
	var word = ""; 

	if(this.words[position] === "") {
		return word;
	}else{
		word = this.words[position];
		return word;
	}
};

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
