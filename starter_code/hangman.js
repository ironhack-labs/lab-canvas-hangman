var hangman;

function Hangman() {
  this.words = ["JAVASCRIPT", "CSS", "HTML", "JQUERY", "BOOTSTRAP"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var randomNumber =  Math.floor(Math.random() * (this.words.length));
  this.secretWord = this.words[randomNumber];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >= 65 && keyCode <= 90);
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (letter) {
  this.guessedLetter += letter.toUpperCase();
  return this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft--;
  return this.checkGameOver();
};

Hangman.prototype.checkIfCorrect = function(letter){
  return this.secretWord.includes(letter);
}

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function () {
  return this.guessedLetter.length == this.secretWord.length;
};
