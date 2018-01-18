var hangman;

function Hangman() {
  this.words = ["culo", "caca", "pedo"];
  this.secretWord = (this.words[0]);
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode >= 65 && keyCode <= 90
}

Hangman.prototype.checkClickedLetters = function (key) {
    return typeof key == "string";
}

Hangman.prototype.addCorrectLetter = function (i) {
  if (this.secretWord.includes(this.secretWord[i])) {
    this.guessedLetter=this.secretWord[i].toUpperCase();
  } else {
    return false;
  }
};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


// document.onkeydown = function (e) {

// };


