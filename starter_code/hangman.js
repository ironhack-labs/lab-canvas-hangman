var hangman;

 function Hangman() {
  this.words = ["dfokdo", "ffsdf", "dddg"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

   }

 Hangman.prototype.getWord = function () {
    return this.words[Math.floor(Math.random() * (this.words.length))];
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
 return 65 < keyCode && 90 > keyCode;
 }
 
 Hangman.prototype.checkClickedLetters = function (key) {
  
  return this.letters.indexOf(key) === -1;


};

 Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
 };



 Hangman.prototype.addWrongLetter = function (letter) {
   this.letters.push(letter);
  if (!this.secretWord.includes(letter)) {
    return this.errorsLeft--;
  }
  this.checkGameOver();
 };



 Hangman.prototype.checkGameOver = function () {
    if (this.errorsLeft === 0) {
      return true;
    }
    return false;
 };

 Hangman.prototype.checkWinner = function () {
   if (this.guessedLetter.length === this.secretWord.length) {
     return true;
   }
   return false;

 };



 document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCtx = new HangmanCanvas(this.secretWord);
  hangmanCtx.createBoard();
};


document.onkeydown = function (e) {

};
