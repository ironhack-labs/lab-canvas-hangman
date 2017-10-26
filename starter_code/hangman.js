function Hangman() {
  this.words = ['Hello'];
  this.secretWord = "Hoolaa";
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return this.secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 91){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  if (this.letters.indexOf(key)!= -1) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype._addLetter = function(letter) {
  this.letters.push(letter);
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord[i].toUpperCase();
  console.log(this.guessedLetter);
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  return (this.errorsLeft == 0) ? true:false;
};

Hangman.prototype._checkWinner = function() {
  if (this.guessedLetter.length == this.secretWord.length){
    return true;
  }
  return false;
};
