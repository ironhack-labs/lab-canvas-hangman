var hangman;

function Hangman() {
  this.words = ["string", "string", "string"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var word = this.words[Math.floor(Math.random() * this.words.length)];
  return word;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  for (i = 65; i < 91; i++) {
    if (keyCode === i) {
      return true;
    } else {
      return false;
    }
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  var key = this.guessedLetter;
  for (i = 0; i < this.letters.length - 1; i++) {
    return key !== this.letters[i] ? true : false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  if (this.secretWord.indexOf(i) != -1) {
    this.guessedLetter = this.guessedLetter + i;
    return this.guessedLetter;
  }
};

Hangman.prototype.addWrongLetter = function(letter) {
  if (this.secretWord.indexOf(letter) < 0) {
    this.errorsLeft--;
    return this.errorsLeft === 0 ? true : false;
  }
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  for (var i = 0; i < this.secretWord.length; i++) {
    var count = 0;
    if (this.secretWord.indexOf(this.guessedLetter[i])) {
      return count++;
      if (count === this.secretWord.length) {
        return "You won!";
      }
    }
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {
  console.log(e);
};
