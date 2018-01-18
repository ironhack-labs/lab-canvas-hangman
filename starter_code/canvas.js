
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {

};

HangmanCanvas.prototype.drawLines = function () {

  this.ctx.strokeRect(50, 50, 300, 0);
  //ctx.lineTo(300, 300);
  this.ctx.strokeRect(350, 50, 0, 50);
  this.ctx.strokeRect(50, 50, 0, 550);
  //circulo
  //ctx.beginPath();
  var endAngle = Math.PI*2;
  this.ctx.arc(350, 150, 50, 0, endAngle, true);
  this.ctx.stroke();

  this.ctx.strokeRect(350, 200, 0, 200);
  
  this.ctx.beginPath();
  //ctx.moveTo(350, 300);
  this.ctx.lineTo(100, 75);
  this.ctx.stroke();
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




