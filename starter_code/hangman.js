var hangman;

 function Hangman() {
  this.words = ['ayuntamiento', 'murcielago', 'telefono', 'pizza', 'camion'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
 }

Hangman.prototype.getWord = function () {
var maximo = this.words.length;

	var randomWordIndex = Math.floor(Math.random() * maximo);
	this.secretWord = this.words[randomWordIndex];
	return this.secretWord;
};

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122) {
     return true;
  } else {
      return false;
  }
};
 Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) !== -1) {
		return false;
	} else {
		return true;
	}

 };

 Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  
 };

 Hangman.prototype.addWrongLetter = function (letter) {

 };

 Hangman.prototype.checkGameOver = function () {

 };

 Hangman.prototype.checkWinner = function () {

 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
