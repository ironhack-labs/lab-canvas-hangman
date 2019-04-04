
function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman")
  this.ctx = this.canvas.getContext('2d')
  this.secretWord = secretWord;
}




HangmanCanvas.prototype.createBoard = function () {
  //GANCHO
  this.ctx.beginPath();
  this.ctx.moveTo(45, 50);
  this.ctx.lineTo(450, 50);
  this.ctx.lineTo(450, 100);
  this.ctx.stroke();
  this.ctx.closePath();
  // ASTA 
  this.ctx.beginPath();
  this.ctx.moveTo(45, 470);
  this.ctx.lineTo(45, 50);
  this.ctx.stroke();
  this.ctx.closePath();
  // LA BASE (TRIANGULO): 
  this.ctx.beginPath();
  this.ctx.moveTo(10, 500);
  this.ctx.lineTo(80, 500);
  this.ctx.lineTo(45, 470);
  this.ctx.fill();
  this.ctx.closePath();
};

HangmanCanvas.prototype.drawLines = function () {
  // SEGUN A LA PALABRA RANDOM
  let x = 0
  for(let i = 0 ; i < this.secretWord.length; i++)
  {
  this.ctx.beginPath();
  this.ctx.moveTo(100+x, 500);
 x += 50
  this.ctx.lineTo(100+x, 500);
  this.ctx.stroke();
 x+= 50
  this.ctx.closePath();
  }
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
