var hangman;

function Hangman() {
  this.words = [""];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return "";
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 123) {
    return true;
  } else {
    return false;
  };
};

Hangman.prototype._checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function (letter){
  if (!this.secretWord.includes(letter)) {
    this.errorsLeft--;
  }
};

Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft<1;
};

Hangman.prototype._checkWinner = function() {
  for(var i = 0; i < this.secretWord.length; i++){
    if(this.guessedLetter.indexOf(this.secretWord[i]) == -1){
      return false;
    };
  };
  return true;
};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
