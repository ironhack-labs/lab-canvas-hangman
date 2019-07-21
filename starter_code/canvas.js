canvas.js

//Hendrik slack start
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }
  createBoard() {
    var create = document.getElementById('start-game-button')
  }
  drawLines() {

  }
  writeCorrectLetter(index) {

  }
  writeWrongLetter(letter, errorsLeft) {

  }
  drawHangman(shape) {

  }
  gameOver() {

  }
  winner() {

  }
}
//Hendrik slack end
//2. Second Iteration: Draw in Canvas

// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }
window.onload() { }
document.getElementById('start-game-button').onclick = function () {

  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()

  // new game canvas !
  mycanvas = new HangmanCanvas(hangman.secretWord)
  mycanvas.createBoard()
};

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

