
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.margin = 40;
  this.size = 40;
  this.xstart = 400;
  this.ystart = 400;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200, 800);
};

HangmanCanvas.prototype.drawLines = function () {
  this.ctx.moveTo(this.xstart,this.ystart)
  for (var i= 0; i<this.secretWord.length; i++) {
    this.ctx.moveTo(this.xstart + i*(this.margin+this.size) +this.margin, this.ystart);
    this.ctx.lineTo(this.xstart + (i+1)*(this.margin+this.size), this.ystart);
    this.ctx.stroke();
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
