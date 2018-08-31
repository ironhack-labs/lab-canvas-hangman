var hangman;

 function Hangman() {
this.words = ["HANG","MAN","IRONHACK"],
this.secretWord = " ",
this.letters = [],
this.guessedLetter = "",
this.errorsLeft = 10
 }

 Hangman.prototype.getWord = function () {
  var indexWord = Math.floor(Math.random() * this.words.length);
  return this.words[indexWord]
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
    return true;
  } else {
    return false;
  }
 };

 Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
 };

 Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
};

 Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
  this.checkGameOver();
 };

 Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) {
    return true;
  } else {
    return false;
  }

 };

 Hangman.prototype.checkWinner = function () {
  if (this.secretWord.length == this.guessedLetter.length) {
       return true;
     } else {
   } return false;
  };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
