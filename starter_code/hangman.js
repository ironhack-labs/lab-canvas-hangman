var hangman;
var canvas;

function Hangman() {
  this.words = ["Longitud", "Rocas", "Acorde", "Equipo", "Mujer"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var number = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[number];
  return this.secretWord;
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

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  return this.checkWinner();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft -= 1;
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  if (this.secretWord.length === this.guessedLetter.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.getWord());
  canvas.createBoard();
};

document.onkeydown = function(e) {};
