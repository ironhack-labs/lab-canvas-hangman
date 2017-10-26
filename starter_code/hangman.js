var hangman;

function Hangman() {

  this.words = ["computer", "horse", "site", "keyboard"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function() {
var random = Math.floor(Math.random()*this.words.length);
this.secretWord = this.words[random];
return this.words[random];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if ((keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123)) return true;
  return false;
};

Hangman.prototype._checkClickedLetters = function(key) {
  if (this.letters.indexOf(key) == -1) {
    this.letters.push(key);
    return true;
  }
  return false;
};

Hangman.prototype._addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function(letter) {
  this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft == 0) return true;
  return false;
};

Hangman.prototype._checkWinner = function() {
  var a = this.guessedLetter.split("").sort().join("");
  var b = this.secretWord.split("").sort().join("");
  if (a == b) return true;
  return false;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
