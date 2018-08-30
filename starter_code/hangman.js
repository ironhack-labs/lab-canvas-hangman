
function Hangman() {
  this.words = ["hola", "adios", "ya"]
  this.secretWord = ""
  this.letters = []
  this.guessedLetter = ""
  this.errorsLeft = 10
 }

Hangman.prototype.getWord = function () {
  var randomWord = this.words[Math.floor(this.words.length * Math.random())];
  return "";
};

Hangman.prototype.checkIfLetter = function (keyCode) {
   if (keyCode >= 65 && keyCode <= 90){
     return true
   }
   return false
};

Hangman.prototype.checkClickedLetters = function (key) {
   return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
  
  this.guessedLetter += this.secretWord[i].toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {
 if (!this.secretWord.includes(letter)){
   this.errorsLeft -= 1;
 }

};

Hangman.prototype.checkGameOver = function () {
  if( this.errorsLeft == 0){
    return true
  }
  return false 
};

Hangman.prototype.checkWinner = function () {
  if (this.secretWord.length == this.guessedLetter.length){
    return true
  }
  return false

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  var hangGame = new HangmanCanvas;
  hangGame.createBoard();
  this.getWord();
};

document.onkeydown = function (e) {
  this.checkIfLetter();
  this.checkClickedLetters();
  this.addCorrectLetter();
};