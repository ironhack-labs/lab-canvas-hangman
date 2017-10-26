var hangman;

function Hangman() {
  this.words = ["hello"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "R";
  this.errorsLeft = 7;
}

Hangman.prototype._getWord = function () {
  return "";
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (typeof(keyCode)==='number' && ((keyCode>=65 && keyCode<=90) || (keyCode>=97 && keyCode<=122))) {
    return true;
  }else{
    return false;
  }

};

Hangman.prototype._checkClickedLetters = function(key) {
  //this.checkIfLetter(key);
    if(this.letters.indexOf(key) === -1 ){
      return true;
    } else {
      return false;
    }
};

Hangman.prototype._addCorrectLetter = function(i){
  typeof(this.guessedLetter) === "string"
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft -=1;
};

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft == 0){
    return true;
  }else{
    return false;
  }
};

Hangman.prototype._checkWinner = function() {
  if(this.secretWord.length == this.guessedLetter.length){
    return true;
  }else{
    return false;
  }


};
