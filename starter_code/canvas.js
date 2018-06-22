
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord ? secretWord : 'ironhack';
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1024, 512);
  this.ctx.beginPath();
  this.ctx.lineWidth=2;
  this.ctx.strokeStyle = 'black';
  this.ctx.fillStyle = 'peru';
  this.ctx.fillRect(0,0,1024,512);
  this.ctx.closePath();
};

HangmanCanvas.prototype.drawLines = function () {
  xInit = 300;
  yInit = 450;
  lSize = 40;
  space = 8;
  for(var i = 0; i < this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(xInit, yInit);
    this.ctx.lineTo(xInit + lSize, yInit);
    this.ctx.stroke();
    this.ctx.closePath();
    xInit = xInit + lSize + space;
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
