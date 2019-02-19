var hangman;

 function Hangman() {
  this.words = ['COCHE', 'AVIÓN', 'CAMIONETA', 'ELEFANTE'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {
   // Returns a random word from our array 
  this.words[Math.floor(Math.random())*this.words.length];
  return 'undefined';
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 64 && keyCode <= 91){
    return true;
  } else {
    return false;
  }
 };

 Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.includes(key)){
    return false;
  }else{
    return true;
  }
 };

 Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
 };

 Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  //llamada a game over
  this.checkGameOver();
 };

 Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft == 0){
    return true;
  }else{
    return false;
  }
 };

 Hangman.prototype.checkWinner = function () {
 //Compruebe si los usuarios ganan y devuelven un valor booleano.
  if(this.secretWord.length == this.guessedLetter.length){
    //return true if we guess all letters
    return true;
  } else {
    //return true if we guess all letters
    return false;
  }
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
