let hangman;

// function Hangman() {

// }
function Hangman() {

  this.words = ["vegeta", "freezer", "dardock", "goku", "gohan"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  }
// Hangman.prototype.getWord = function () {

// };

Hangman.prototype.getWord = function () {
 let word = Math.floor(Math.random()*this.words.length)
 return this.words[word];

};


// Hangman.prototype.checkIfLetter = function (keyCode) {

// };
Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 64 && keyCode <= 91){
    return true;
  }else {
    return false;
  }
};

// Hangman.prototype.checkClickedLetters = function (key) {

// };

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key.toUpperCase()) == -1;
};
  

// Hangman.prototype.addCorrectLetter = function (i) {

// };
Hangman.prototype.addCorrectLetter = function (i) {
this.guessedLetter += this.secretWord[i].toUpperCase();
this.checkWinner();
};


// Hangman.prototype.addWrongLetter = function (letter) {

// };
Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -=1;
};

// Hangman.prototype.checkGameOver = function () {

// };
Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;

  }else {
    return false;
  }
};

// Hangman.prototype.checkWinner = function () {

// };
Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  }else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function () {
};



document.onkeydown = function (e) {
  
};
