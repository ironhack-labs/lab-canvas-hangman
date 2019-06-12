var hangman;


function Hangman() {
  this.words = ["cero", "uno", "dos"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = ""
  this.errorsLeft = () => {}

 }

Hangman.prototype.getWord = function () {
rnd = Math.floor(Math.random() * this.words.length)
//console.log(rnd)
return this.words[rnd]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  
  if (keyCode >64 && keyCode < 91) {
    return true
  } else {
    return false
  }
 };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

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
