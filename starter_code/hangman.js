var hangman, canvas;

function Hangman() {
  this.words = ["one", "two", "three"];
  this.secretWord = "Ironhack";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var x = Math.floor(Math.random() * this.words.length);
  return this.words[x];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (this.letters.indexOf(key) === -1) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord.charAt(i).toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft <= 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  }
  return false;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  canvas = new HangmanCanvas();

  canvas.createBoard();
};

document.onkeydown = function(e) {
  // this.value + String.fromCharCode(e.keyCode);
  console.log(e);
};
