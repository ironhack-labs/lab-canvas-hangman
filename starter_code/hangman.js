var hangman;

function Hangman() {
  this.words = ["creativity", "javascript", "bootcamp"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  if (this.words.length >= 2) {
    var ind = Math.floor(Math.random() * this.words.length);
    return this.words[ind];
  }
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return ((65 < keyCode) && (keyCode < 91));
  if (keyCode >= 48 && keyCode <= 57) {
    return false;
  } else(keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122); {
    return true;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  var isnot = true;
  this.letters.forEach(function (l) {
    if (l === key) {
      return false;
    }
  });
  return isnot;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft === 0)
};

Hangman.prototype.checkWinner = function () {
  return this.guessedLetter.length === this.secretWord.length;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};
document.onkeydown = function (e) {

};