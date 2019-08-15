var hangman;

class Hangman {
  constructor() {
    this.words = ["filler", "crap", "bullshit"];
    this.secretWord = "shit";
    this.letters = [];
  }

  getWord() {
    return "hola";
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) return true;
    return false;
  }

  checkClickedLetters(letter) {
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] === letter) return false;
    }
    return true;
  }
}

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

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

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
