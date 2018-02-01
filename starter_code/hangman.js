
var hangman;

function Hangman() {
  this.words = ["escapology", "brightwork", "verkrampte", "protectrix"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

};

Hangman.prototype.getWord = function () {
  secretWord = this.words[Math.floor(Math.random() * words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    return true;
    continue;
  } else {
    return false;

  };
    
  
};

Hangman.prototype.checkClickedLetters = function (key) {
  if ( guessLetter === secretWord[i]){
    getWord[i]= secretWord[i];
  } else {
    this.errorseft -= this.errorsLeft
  };

};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
