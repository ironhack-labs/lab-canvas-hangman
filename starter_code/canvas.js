function HangmanCanvas(hMan) {
  this.secretWord = hMan.secretWord;
}
HangmanCanvas.prototype.createBoard = function () {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.ctx.clearRect(0,0,1200,800);
};

HangmanCanvas.prototype.drawLines = function () {
  
  //Orca
  this.ctx.beginPath();
  this.ctx.moveTo(400,40);
  this.ctx.lineTo(400,500);
  this.ctx.lineTo(360,540);
  this.ctx.lineTo(440,540);
  this.ctx.lineTo(400,500);
  this.ctx.moveTo(400,40);
  this.ctx.lineTo(500,40);
  this.ctx.lineTo(500,80);
  //Monigote
  this.ctx.moveTo(540,120);
  this.ctx.arc(500,120,40,0,Math.PI*2, false);
  this.ctx.moveTo(500,160);
  this.ctx.lineTo(500,300);
  this.ctx.lineTo(460,340);
  this.ctx.lineTo(500,300);
  this.ctx.lineTo(540,340);
  this.ctx.moveTo(460,200);
  this.ctx.lineTo(540,200);

  //Texto
  this.ctx.moveTo(540,500);
  this.ctx.stroke();
  for(var i= 0; i < this.secretWord.length; i++){
    console.log(i);
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
