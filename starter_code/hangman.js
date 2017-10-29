// var hangman;

function Hangman() {
  this.words = ["palabra", "abecedario", "rama"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorLeft = 10;
}

Hangman.prototype._getWord = function () {
  var size = this.words.length;
  var index = Math.round(Math.random() * (size - 1));
  this.secretWord = this.words[index];
  return this.secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype._checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft == 0;
};

Hangman.prototype._checkWinner = function() {
  return this.secretWord.length == this.guessedLetter.length;
};
//
