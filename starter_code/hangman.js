var hangman;

function Hangman() {
this.words = ["game","world","hangman","laptop","coworking"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
 }

Hangman.prototype.getWord = function () {
  var x = Math.floor(Math.random()*this.words.length);
  return this.words[x];
 };

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode >= 65 && keyCode <= 90;  
 };// just to know if the key IS ACTUALLY A LETTER. A=65 and Z=90. So anything between both.
 
 Hangman.prototype.checkClickedLetters = function (key) {
   return !this.letters.includes (key);
 };  //Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.

 Hangman.prototype.addCorrectLetter = function (i) {
   this.guessedLetter += this.letters; 
   this.checkWinner;
 };//Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.

 Hangman.prototype.addWrongLetter = function (letter) {
   if (this.checkClickedLetters != this.secretWord) {
    this.errorsLeft --;
   }
   this.checkGameOver;
 }; // Should subtract one from the variable errorsLeft and check if the game is over.

 Hangman.prototype.checkGameOver = function () {
   if (this.errorsLeft <= 0) {
     return true;
   } else {
     return false;
   }
 };//Returns a bolean value, true if the users lose, and false in any other case.

 Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter == this.secretWord) {
    return true;
  } else {
    return false;
  }
 };// Check if the users win and return a boolean value.

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
