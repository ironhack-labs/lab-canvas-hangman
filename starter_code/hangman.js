'use strict'

var hangman = new HangmanCanvas();

function Hangman() {
  var self = this;
  self.words = ['map', 'pop', 'push'];
  self.secretWord = '';
  self.letters = [];
  self.guessedLetter = '';
  self.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var self = this;
  return self.words[Math.floor(Math.random()*self.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode < 65 || keyCode > 90) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
 var self = this;
 if (self.letters.indexOf(key) > -1) {
   return false;
 } else {
   return true;
 }
};

Hangman.prototype.addCorrectLetter = function (i) {
  var self = this; 
  self.guessedLetter += self.secretWord[i].toUpperCase();
  self.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  var self = this;
  self.errorsLeft--;
  self.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  var self = this;
  if (self.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  var self = this;
  for (var i = 0; i < self.secretWord; i++) {
    if (self.secretWord.indexOf(self.guessedLetter[i]) < 0) {
      return false;
    }
  }
  if (self.secretWord.length === self.guessedLetter.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
