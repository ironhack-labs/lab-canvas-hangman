var hangman

function Hangman() {
  this.words = ["robot", "telefono", "ordenador"]
  this.secretWord = ""
  this.letters = []
  this.guessedLetter = ""
  this.errorsLeft = 10;
}


Hangman.prototype._getWord = function () {
 return this.words[0]
}

Hangman.prototype._checkIfLetter = function(keyCode) {
  if  (keyCode >=65 &&  keyCode<=90) {
    return true
  } else  {
    return false
  }
}

Hangman.prototype._checkClickedLetters = function(key) {
  if (this.letters.includes(key)){
    return false
  } else {
    return true
  }

};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter=(this.secretWord.charAt(i)).toUpperCase();
}


Hangman.prototype._addWrongLetter = function (letter){
  return this.errorsLeft -= 1;

}

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft == 0){
    return true
  }else {
    return false
  }
}
Hangman.prototype._checkWinner = function() {
  if (this.guessedLetter.length == this.secretWord.length){
  return true;
}else {
  return false;
}
};
