
var hangman;

function Hangman() {
  this.words = ["escapology", "brightwork", "verkrampte", "protectrix"];
  // this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  this.secretWord = this.getWord();

};

Hangman.prototype.getWord = function () {
  var secretWord = Math.floor(Math.random() * this.words.length);
  return this.words[secretWord];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;

  };
    
  
};

Hangman.prototype.checkClickedLetters = function (key) {
  
  if( this.letters.indexOf(key) === -1){
    return true;
  } else {
    return false;
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
