var hangman;

function Hangman() {
  this.words = ["Dom"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function() {
  return (randomWord = this.words[
    Math.floor(Math.random() * this.words.length)
  ]);
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 48 && keyCode <= 57) {
    return false;
  } else if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  return false;
};

Hangman.prototype._checkClickedLetters = function(letter) {
  var check = this.letters.indexOf(letter);
  if (check == -1) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._addCorrectLetter = function(i) {
  return (this.guessedLetter += this.secretWord[i].toUpperCase());
  this._checkGameOver();
};

Hangman.prototype._addWrongLetter = function(letter) {
  return (this.errorsLeft -= 1);
};

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkWinner = function() {
  if (
    this.secretWord
      .split("")
      .sort()
      .join("") ===
    this.guessedLetter
      .split("")
      .sort()
      .join("")
  ) {
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
