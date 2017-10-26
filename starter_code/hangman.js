var hangman;

function Hangman() {
  this.words = ['javascript','ironhack','juan'];
  this.secretWord = 'javascript';
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return "";
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if(keyCode >= 65 && keyCode <= 90){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  return (this.letters.indexOf(key) == -1);
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter = (this.secretWord[i].toUpperCase());
};

Hangman.prototype._addWrongLetter = function(letter){
  this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  return (this.errorsLeft == 0);
};

Hangman.prototype._checkWinner = function() {
  return (this.secretWord.length == this.guessedLetter.length);
};
