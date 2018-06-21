var hangman;

 function Hangman() {
this.words = ["laptop","skateboard","projector","jacket","blackboard","ironhack"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = [];
this.errorsLeft = 10;
   }

 Hangman.prototype.getWord = function () {
  var secretWord = this.words[Math.floor(Math.random()*this.words.length)];
  return this.secretWord;

 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >=65 && keyCode <= 90)
 };

 Hangman.prototype.checkClickedLetters = function (key) {
  return (!this.letters.includes(key))

 };

 Hangman.prototype.addCorrectLetter = function (i) {

 };

 Hangman.prototype.addWrongLetter = function (letter) {

 };

 Hangman.prototype.checkGameOver = function () {

 };

 Hangman.prototype.checkWinner = function () {

 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
