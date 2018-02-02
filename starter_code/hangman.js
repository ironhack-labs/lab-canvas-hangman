var hangman;

function Hangman() {
 this.words = ["car", "shadow", "learn", "sing", "spring"];
 this.secretWord = "";
 this.letters = [];
 this.guessedLetter = "";
 this.errorsLeft = 10;
 //secretword is a random word from arr of words
 // corelate this very game HangmanCanvas with this constructor
}

Hangman.prototype.getWord = function () {
  var that = this;
  that.secretWord = Math.floor(Math.random * that.words.length);
  return that.secretWord.toString();
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  this.keyCode = keyCode;
  if (this.keyCode >= 65 && this.keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) == -1) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.i = String.fromCharCode(i);
  if (this.getWord.indexOf(this.i)) {
    this.guessedLetter.push(this.i);
    this.checkWinner;
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
  this.checkGameOver;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter == this.secretWord) {
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
