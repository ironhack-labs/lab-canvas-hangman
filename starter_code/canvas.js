
function HangmanCanvas(words, secretWord, letters, guessedLetter) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.words = words
  this.secretWord = secretWord
  this.letters = letters
  this.guessedLetter = guessedLetter
  this.errorsLeft = 10
}

HangmanCanvas.prototype.createBoard = function () {

};

HangmanCanvas.prototype.drawLines = function () {

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
