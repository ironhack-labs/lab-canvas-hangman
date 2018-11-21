
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.strokeRect(0, 0, 1200, 800);
  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
  //Las de las letras
  // this.ctx.beginPath();
  // this.ctx.arc(400, 400, 200, 0, Math.PI*2);
  // this.ctx.fill();
  //Las del patíbulo
  let i = 100;
  let j = 750;
  let topPole = 100;
  let radius = 50;
  //Gallow
  this.ctx.beginPath();
  this.ctx.lineWidth = "3";
  this.ctx.moveTo(i+75, j-50);
  this.ctx.lineTo(i, j);
  this.ctx.lineTo(i+150, j);
  this.ctx.lineTo(i+75, j-50);
  this.ctx.lineTo(i+75, topPole);
  this.ctx.lineTo(i+450, topPole);
  this.ctx.lineTo(i+450, topPole+radius);
  this.ctx.stroke();
  this.ctx.beginPath();

  //Vato
  this.ctx.arc(i+450, topPole + radius*2, radius, 0, Math.PI*2);
  this.ctx.stroke();
  // this.ctx.fill();
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
