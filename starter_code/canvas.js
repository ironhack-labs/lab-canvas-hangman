
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');

  } 
    createBoard() {
    this.ctx.clearRect(0, 0 ,800, 1200);
    this.ctx.beginPath();
    this.ctx.arc(100, 250, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
    console.log('fernandanidhi')
  }
}











// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }

// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };