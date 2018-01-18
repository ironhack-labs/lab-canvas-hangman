var hangman;

function Hangman() {
  this.words = ["JESUS", "JOSE", "MARIA", "BUEY", "MULA"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  return this.words[
    Math.floor(Math.random() * Math.floor(this.words.length - 1))
  ];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  if (this.secretWord.includes(this.secretWord[i])) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
  }
};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
