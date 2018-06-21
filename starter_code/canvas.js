
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}


HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 800, 1200);
  this.ctx.moveTo(20, 400)
  for (let i = 0; i < 5; i++) {
    this.ctx.lineTo(20 + i*40, 400);
    this.ctx.stroke();
  }
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
