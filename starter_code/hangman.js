var hangman;

 function Hangman() {
  this.words = ['esternocleidomastoideo', 'zagal', 'almendruco'];
  this.sercretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
 }

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()) * this.words.length];
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
