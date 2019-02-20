"use strict";
var hangman; // define the variable global! (with startgame button it is given a value)
var canvasGame;

function Hangman() {
  this.words = ["chronometer", "piano", "microwave","fedde","momo"];
  this.secretWord = this.getWord();
  this.letters = []; // storing already clicked letters
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
  console.log(key.length);
  return ((key.match(/[a-z]/i) && key.length === 1) ? true : false);
  // apparently keycode is a number of the iput (65-90 is a-z)
  // return (keyCode >= 65 && keyCode <= 90 ? true : false);
};

Hangman.prototype.checkClickedLetters = function (key) {
  // if not (!) includes the key, then it returns true
  return (!this.letters.includes(key) && !this.guessedLetter.includes(key));
};

Hangman.prototype.addCorrectLetter = function (key) {
  // input is the index of the secretword letter that is guessed correctly!!
 // 77 has to be fixed! convert i (index of letter) to the keycode?
    this.guessedLetter += key;
    console.log(this.guessedLetter);
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
  console.log("you won!");
  canvasGame.winner();
  return true;
};
 

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  console.log(hangman);
  canvasGame = new HangmanCanvas(hangman.secretWord);
  console.log(canvasGame);
  canvasGame.createBoard();
};


document.addEventListener("keydown", function (e) { 
  if (hangman.status === false) {
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
  console.log(hangman.secretWord.includes(e.key));
  if (hangman.secretWord.includes(e.key)) {
    hangman.addCorrectLetter(e.key);
    // at which positions?
    var correct = [];
    for (var i = 0; i < hangman.secretWord.length; i++) { 
      if(e.key === hangman.secretWord.charAt(i)) {
        correct.push(i); 
      };
    };
    canvasGame.writeCorrectLetter(correct, e.key);
  } else { // false
    hangman.letters += e.key; 
    hangman.addWrongLetter();
    canvasGame.writeWrongLetter(hangman.letters, hangman.errorsLeft);
    canvasGame.drawHangman(hangman.errorsLeft);
  };
});