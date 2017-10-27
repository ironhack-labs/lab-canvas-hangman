var hangman;

function Hangman() {
  this.words = ["information", "difficult", "parking", "building", "fahrenheit"];

  this.secretWord = ("");
  this.letters = [];
}

Hangman.prototype._getWord = function () {
  return this.secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (65 <= keyCode && keyCode <= 90) {
    return true;
  }
  return false;
};

Hangman.prototype._checkClickedLetters = function(key) {

  var letters = String.fromCharCode(event.keyCode);

if (/[a-zA-Z]/) {
    return true;
  }

  return false;

};

Hangman.prototype._addCorrectLetter = function(i){

};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
