"use strict";
var hangman; // define the variable global! (with startgame button it is given a value)
var canvasGame;

function Hangman() {
  this.words = ["chronometer", "headphones", "microwave", "fantastic", "ironhack"];
  this.secretWord = this.getWord();
  this.letters = []; // storing already clicked letters wrong
  this.guessedLetter = ''; // string to store letters clicked and guessed
  this.errorsLeft = 10; // -- when false letter
  this.status = true; // for ending key input check
}

Hangman.prototype.getWord = function () {
  var randomNr = Math.floor(Math.random() * this.words.length);
  return this.words[randomNr];
};

Hangman.prototype.checkIfLetter = function (key) {
  // if is [a-z] + 1 character (no Alt, Shift) then return true, else false (i = case insensitive)
  return ((key.match(/[a-z]/i) && key.length === 1) ? true : false);
};

Hangman.prototype.checkClickedLetters = function (key) {
  // if not (!) includes the key, then it returns true
  return (!this.letters.includes(key) && !this.guessedLetter.includes(key));
};

Hangman.prototype.addCorrectLetter = function (key) {
  // key is the pressed letter, e.g. "a"
  this.guessedLetter += key; 
  this.checkWinner();
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
  for (var i = 0; i < this.secretWord.length; i++) {
    // check if all the letters of secretword are in guessedLetter. If not found, return false.
    if (!this.guessedLetter.includes(this.secretWord.charAt(i))) {
      return false;
    }
  } // else, all letters are found! 
  canvasGame.winner();
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman(); 
  canvasGame = new HangmanCanvas(hangman.secretWord); 
  canvasGame.createBoard();
};

document.addEventListener("keydown", function (e) {
  // when game is lost/won or not started yet, don't register key inputs
  if (hangman === undefined || hangman.status === false) {
    return;
  }
  // not pressed before?
  if (!hangman.checkClickedLetters(e.key)) {
    return alert("you already pressed this letter before!");
  };
  // is it a letter?
  if (!hangman.checkIfLetter(e.key)) {
    return alert("not a letter! (a-z)");
  };
  // is the letter in the secret word? 
  if (hangman.secretWord.includes(e.key)) {
    hangman.addCorrectLetter(e.key);
    // at which positions?
    var correct = [];
    for (var i = 0; i < hangman.secretWord.length; i++) {
      if (e.key === hangman.secretWord.charAt(i)) {
        correct.push(i);
      };
    };
    // write correct letter in the canvas
    canvasGame.writeCorrectLetter(correct, e.key);
  } else { // wrong letter
    hangman.letters += e.key;
    hangman.addWrongLetter();
    canvasGame.writeWrongLetter(hangman.letters);
    canvasGame.drawHangman(hangman.errorsLeft);
  };
});