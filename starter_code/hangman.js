var hangman;

function Hangman() {
  this.words = ["Cheese", "JavaScript", "Spotify", "Facebook"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var position = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[position];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode > 64 && keyCode < 91;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(i) {
  var letter = String.fromCharCode(i);
  if (this.secretWord.toUpperCase().includes(letter.toUpperCase())) {
    this.guessedLetter += letter;
    return this.checkWinner();
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.letters.push(letter);
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function() {
  return this.secretWord.length == this.guessedLetter.length;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
