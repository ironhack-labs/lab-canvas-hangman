var hangman;

function Hangman() {
  this.words = ["Ironhack"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetters = "";
  this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord.toUpperCase();
 };

Hangman.prototype.checkIfLetter = function (keyCode) {
if (keyCode >= 65 && keyCode <= 90) {
  return true;
} else {
  return false;
}
   };
  

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  }
  else {
    return true;
  }};

Hangman.prototype.addCorrectLetter = function(letter) {
if (this.secretWord.indexOf(letter) > -1) {
  this.guessedLetters += letter;
}
 };


Hangman.prototype.addWrongLetter = function (letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
  };


// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
