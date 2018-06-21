var hangman;

 function Hangman() {
this.words = ["computer","skate","project","jacket","ironhack"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
   }

 Hangman.prototype.getWord = function () {
  var secretWord = this.words[Math.floor(Math.random()*this.words.length)];
  return secretWord;

 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >=65 && keyCode <= 90)
 };

 Hangman.prototype.checkClickedLetters = function (key) {
  return (!this.letters.includes(key))

 };

 Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = this.secretWord[i].toUpperCase();
 };

 Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
 };

 Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft < 1);
 };

 Hangman.prototype.checkWinner = function () {
  return (this.secretWord.length == this.guessedLetter.length)
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas(Hangman.getWord());
};


document.onkeydown = function (e) {

};
