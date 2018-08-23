
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(50,468);
  this.ctx.lineTo(150,468);
  this.ctx.lineTo(100,437);
  this.ctx.lineTo(50,468);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(100,437);
  this.ctx.lineTo(100,125);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(100,125);
  this.ctx.lineTo(250,125);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(250,125);
  this.ctx.lineTo(250,187);
  this.ctx.stroke();
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
