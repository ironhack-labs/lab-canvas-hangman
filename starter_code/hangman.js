var hangman;

function Hangman() {
  this.words = ['ESTO', 'NO', 'ES', 'LO', 'QUE', 'PARECE'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode > 64 && keyCode < 91;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (arr) {
  this.guessedLetter += this.secretWord[arr].toUpperCase();
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function () {
  var guessed = this.guessedLetter.split('');
  var secret = this.secretWord;
  for (var i = 0; i < guessed.length; i++) {
    if (!guessed.includes(secret[i])) {
      return false;
    }
  }
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};

document.onkeydown = function (e) {

};