
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  // Dibujar horca
  ctx.moveTo(50,300);
  ctx.beginPath();
  ctx.lineTo(30,400);
  ctx.lineTo(70,400);
  ctx.lineTo(50,300);
  ctx.lineTo(50,30);
  ctx.lineTo(120,30);
  ctx.lineTo(120,40);
  ctx.closePath();
};

HangmanCanvas.prototype.drawLines = function (xpos) {
  ctx.moveTo(80,250);
  this.ctx.beginPath();
  this.ctx.moveTo(xpos, 250);
  this.ctx.lineTo(xpos + 40, 250);
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch(shape) {
  // Dibujar cabeza
  ctx.moveTo(120,40);
  ctx.beginPath();
  var x = 120;
  var y = 75;
  var radius = 35;
  var startAngle = 0;
  var endAngle = Math.PI*2;
  ctx.arc(x, y, radius, startAngle, endAngle, true);
  closePath();
  break;
  // Dibujar cuerpo
  ctx.moveTo(120,110);
  ctx.beginPath();
  ctx.lineTo(120,200);
  ctxclosePath();
  break;
  // Dibujar brazo derecho
  ctx.moveTo(120,130);
  ctx.beginPath();
  ctx.lineTo(140,160);
  ctx.closePath;
  break;
  // Dibujar brazo izquierdo
  ctx.moveTo(120,130);
  beginPath();
  lineTo(100,160);
  ctx.closePath();
  break;
  // Dibujar pierna derecha
  ctx.moveTo(120,200);
  ctx.beginPath();
  ctx.lineTo(140,250);
  closePath();
  break;
  // Dibujar pierna izquierda
  ctx.moveTo(120,200);
  ctx.beginPath();
  ctx.lineTo(100,250);
  closePath();
  break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
