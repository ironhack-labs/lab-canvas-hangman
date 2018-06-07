var hangman;

function Hangman() {
  this.words = ["bonjour", "food", "javascript"],
  this.secretWord = "",
  this.letters = [],
  this.guessedLetter = "",
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 64 && keyCode < 91){
    return true;
  }
 return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1){
    return true;
  }
  return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  return this.guessedLetter;
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft <= 0){
    return true;
  }
  return false;
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length){
    return true;
  }
  return false;
}


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
