


var hangman ;

function Hangman() {
  this.words = ["piscine", "quasar", "escalier", "temps"]
  this.secretWord = ""
  this.letters = []
  this.guessedLetter = ""
  this.errorsLeft = 10;
  this.secretWord = ""
  //this.HangmanCanvas =
}

Hangman.prototype.getWord = function (words) {
  var random = Math.floor(Math.random() * this.words.length)
  return this.words[random];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 97 && keyCode <= 122) || (keyCode >= 65 && keyCode <= 90) ) {
    return true
  }
  else return false;
};

 Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) == -1) return true;
  else return false;
};

Hangman.prototype.addCorrectLetter = function (i) {

  this.guessedLetter += this.secretWord[i].toUpperCase()

return this.checkWinner()
  
};

Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft --
};

Hangman.prototype.checkGameOver = function () {

  if (this.errorsLeft <= 0 ) return true;
  else return false
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length == this.secretWord.length) return true;
  else return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
