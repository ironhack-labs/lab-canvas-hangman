var hangman;

function Hangman() {
  this.words = [""];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var wordPicked = this.words[
    Math.floor(Math.random() * this.words.length)
  ].toString();
  return wordPicked;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (this.letters.indexOf(key) === -1) {
    this.letters.push(key);
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  return this.secretWord.length === this.guessedLetter.length ? true : false;
};
//
Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft = this.errorsLeft - 1;
};
// };

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {
  console.log(e);
};
