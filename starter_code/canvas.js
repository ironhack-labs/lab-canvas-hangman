
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {

  clearRect(0,0,800,1200)
  this.ctx.beginPath()
  this.ctx.moveTo(300,1000)
  this.ctx.lineTo(350,1000)
  this.ctx.lineWidth = 20;

};

HangmanCanvas.prototype.drawLines = function () {


  this.ctx.stroke()
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
