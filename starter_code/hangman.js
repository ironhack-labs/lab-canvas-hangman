var hangman;

function Hangman() {
  this.words = ['palabra1', 'palabra2'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft --;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === 8) {
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
