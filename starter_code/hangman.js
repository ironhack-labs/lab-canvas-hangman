var hangman;

 function Hangman() {
  self = this;
  self.words = [];
  self.secretWord = '';
  self.letters = [];
  self.guessedLetter = '';
  self.errorsLeft = 10;

 }

 Hangman.prototype.getWord = function () {
  return toString(Math.random(self.word));
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {

  if (keyCode >= 65 && keyCode <= 90){
    return true;
  }
  return false;

 };

 Hangman.prototype.checkClickedLetters = function (key) {

  if(self.letters.indexOf(key) === -1){
    return true;
  }

  return false;

 };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


document.onkeydown = function (e) {
 
};
