var hangman;

function Hangman() {
  this.words = [];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  if (this.words.length <= 0) {
    return '';
  }
  var i = Math.floor(Math.random * this.words.length);
  return this.words[i];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (typeof (keyCode) == 'number') {
    return keyCode >= 65 && keyCode <= 90;
  }
    
  // Key Codes for letters: 65 a 90
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (typeof (key) == 'string') {
    return !this.letters.includes(key);
  }
  return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

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
