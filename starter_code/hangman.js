var hangman;

function Hangman() {
  this.words = ['IRONHACK'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return '';
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if(keyCode > 65 && keyCode < 90){
    return true;
  } else{
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  if(this.letters.includes(key)){
    return false;
  } else{
    return true;
  }
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord.substr(i, 1).toUpperCase();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  if(this.errorsLeft == 0){
    return true;
  } else{
    return false;
  }
};

Hangman.prototype._checkWinner = function() {
  if(this.guessedLetter.split('').sort().join('') == this.secretWord.split('').sort().join('')){
    return true;
  } else{
    return false;
  }
};
