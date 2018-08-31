function Hangman() {
  this.words = ["IRONHACK","CANVAS","LESSON","JAVASCRIPT","HTML","HANGMAN","JASMINE","GITHUB"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 7;
}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[(Math.floor(Math.random()*this.words.length))];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    return (String.fromCharCode(keyCode).match(/[a-z]/i) !== null) ? true : false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return (this.letters.indexOf(key) != -1) ? false : true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.letters.push(letter);  
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft == 0) ? true : false;
};

Hangman.prototype.checkWinner = function () {
  return (this.guessedLetter.length === this.secretWord.length) ? true : false;
};