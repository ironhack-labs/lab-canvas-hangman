// var _ = lodash;

function Hangman() {
 this.words = ['bottle', 'navigator', 'poetry', 'astronaut', 'bicycle'];
 this.secretWord = '';
 this.letters = [];
 this.guessedLetter = '';
 this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  var randomIndex = Math.floor(Math.random() * this.words.length);
  return this.words[randomIndex];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if(Number.isInteger(keyCode)) {
    return keyCode <= 90 && keyCode >= 65;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  if(this.letters.indexOf(key) === -1) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._addCorrectLetter = function(i){
  var correctLetter = this.secretWord[i];
  this.guessedLetter += correctLetter.toUpperCase();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft > 0 ? false : true;
};

Hangman.prototype._checkWinner = function() {
  var lettersArr = this.secretWord.split('');
  var that = this;
  function isInGuessedLetters(letter) {
    return that.guessedLetter.indexOf(letter) !== -1;
  }
  return lettersArr.every(isInGuessedLetters);
};
