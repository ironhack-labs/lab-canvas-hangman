"use strict";
//var hangman;

function Hangman() {
  this.words = ["chronometer", "piano", "microwave"];
  this.secretWord = this.getWord();
  this.letters = []; // storing already clicked letters
  this.guessedLetter = ''; // string to store letters clicked and guessed
  this.errorsLeft = 10; // -- when false letter
}

Hangman.prototype.getWord = function () {
  var randomNr = Math.floor(Math.random() * this.words.length);
  return this.words[randomNr];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  //return (keyCode.match(/[a-z]/i && typeof keyCode !== undefined) ? true : false);
  // if is [a-z] then return true, else false (i = case insensitive)
  // apparently keycode is a number of the iput (65-90 is a-z)
  return (keyCode >= 65 && keyCode <= 90 ? true : false);
};

Hangman.prototype.checkClickedLetters = function (key) {
  // if not (!) includes the key, then it returns true
  return (!this.letters.includes(key));
};

Hangman.prototype.addCorrectLetter = function (i) {
  // input is the index of the secretword letter that is guessed correctly!!
  if (this.checkIfLetter(77) === true) { // 77 has to be fixed!
    this.guessedLetter += this.secretWord.charAt(i).toUpperCase();
    console.log(this.guessedLetter);
  this.checkWinner();
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft === 0)// ? true: false;
};

Hangman.prototype.checkWinner = function () {
  // won when guessedLetter contains same letters as secretWord
  for(var i = 0; i < this.secretWord.length; i++) {
    // check if all the letters of secretword are in guessedLetter. If not found, return false.
    if(!this.guessedLetter.includes(this.secretWord.charAt(i))) {
      return false;
    }
  } // else, all letters are found!
  return true;
};

// some tests
var test = new Hangman();
console.log(test);
// console.log(test.getWord());
console.log(test.checkIfLetter(12));
console.log(test.checkIfLetter(77));
// console.log(test.checkIfLetter("3"));
// console.log(test.checkIfLetter(";"));
// console.log(test.checkIfLetter(NaN));
// test.guessedLetter = "abc";
// test.secretWord = "cbabababbabccca";
// console.log(test.checkWinner());
test.addCorrectLetter(2)


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
