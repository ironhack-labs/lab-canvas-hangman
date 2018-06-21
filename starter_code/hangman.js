
var hangman;

 function Hangman() {
    this.words =[];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
    this.canvas = new HangmanCanvas();

 }

 Hangman.prototype.getWord = function () {
   return "";

 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
   if (keyCode >= 65 && keyCode <=90 ){
    return true;
   } else return false;    
 };

 Hangman.prototype.checkClickedLetters = function (key) {

    if (this.letters.indexOf(key) === -1) {
    return true; } return false;
 };

 Hangman.prototype.addCorrectLetter = function (i) {
    
 this.guessedLetter += this.secretWord[i].toUpperCase();

 };

 Hangman.prototype.addWrongLetter = function (letter) {

  if (this.guessedLetter != this.secretWord[letter]) {
    return this.errorsLeft--;}
  
 };

 Hangman.prototype.checkGameOver = function () {
 
  if (this.errorsLeft == 0) {
return true;
  } return false;

 };

 Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length == this.secretWord.length) {
    return true;
  } return false;   
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
