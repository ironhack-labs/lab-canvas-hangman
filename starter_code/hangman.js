var hangman;

function Hangman() {
  this.words = [];
  this.secretWord = ('undefined');
  this.letters = [];
  this.guessedLetters = "";
  this.errorsLeft = "";
  this.keyCode = "";

}

Hangman.prototype.getWord = function () {
  return this.words;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode == "") {
    return false;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (key == keyCode) {
    return false;
  }else {
    return true;
  }
};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
