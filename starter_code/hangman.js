var hangman;

function Hangman() {
  this.words = ['piña', 'pitufo', 'mollete', 'viena'];
  this.secretWord = this.words[0];
  this.letters = [];
  this.guessedLetter;
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var randomIndex = Math.floor( Math.random() * ( this.words.length) )
  this.secretWord = this.words[randomIndex];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return ( ( keyCode > 64 && keyCode < 91 ) || keyCode === 186 ); // 186 es el keyCode de la letra 'ñ'
};

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
