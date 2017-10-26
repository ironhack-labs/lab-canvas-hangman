var hangman;

function Hangman() {
  this.words = ['hola', 'papagayo', 'cocacola', 'tormenta', 'ligero'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return this.words[[Math.floor(Math.random() * this.words.length)]];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122);
};

Hangman.prototype._checkClickedLetters = function(key) {
  for( var i=0; i < this.letters.length; i++) {
    if (this.letters[i] == key) {
      return false;
    }
  }
  return true;
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
  this._checkGameOver();
};

Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft == 0;
};

Hangman.prototype._checkWinner = function() {
  return this.secretWord.length == this.guessedLetter.length;
};
