var hangman;

function Hangman() {
  this.words = ["IRONHACK","CANVAS","LESSON","JAVASCRIPT","HTML","HANGMAN","JASMINE","GITHUB"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 7;
}

Hangman.prototype.getWord = function () {
  return toString(this.words[(Math.floor(Math.random*this.words.length-1))]);
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    return (String.fromCharCode(keyCode).match(/[a-z]/i) !== null) ? true : false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return (this.letters.indexOf(key) != -1) ? false : true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;  
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft == 0) ? true : false;
};

Hangman.prototype.checkWinner = function () {
  return (this.guessedLetter.length === this.secretWord.length) ? true : false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};

document.onkeydown = function (e) {
};
