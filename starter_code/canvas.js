
class HangmanCanvas {
  constructor(secretWord){
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
  }
  
  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
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



