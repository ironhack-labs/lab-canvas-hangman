var hangman;

var Hangman = function() {
  this.words = ["soccer", "chicken", "sneakers"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
} 


Hangman.prototype.getWord = function() {
  var randomWordIndex = Math.floor(Math.random() * this.words.length);
  // console.log(randomWordIndex);
  this.secretWord = this.words[randomWordIndex];
  return this.secretWord;
};


Hangman.prototype.checkIfLetter = function (keyCode) {   
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  if (keyCode >= 97 && keyCode <= 122) {
    return true;
  }
  else {
    return false;
  }
  this.letters.push(keyCode);
};


Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  } 
  else {
    return true;
  }
};


Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = this.secretWord[i].toUpperCase();
  // need to check if the user wins in this function
};


Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
  // need to check if the game is over in this function
};


Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  }
  else if (this.errorsLeft > 0) {
    return false;
  }
};


Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  }
  else {
    return false;
  }
};


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  HangmanCanvas = new HangmanCanvas(hangman.secretWord);
};


document.onkeydown = function (e) {
  
};
