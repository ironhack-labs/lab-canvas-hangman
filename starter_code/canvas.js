
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;



  this.cleanCanvas = function(){
  this.ctx.clearRect(0,0,1200,800);
 
  }

}

HangmanCanvas.prototype.createBoard = function () {
  this.cleanCanvas();
  this.ctx.lineWidth = 3;
  this.ctx.font = "80px serif";
  this.ctx.beginPath();
  this.ctx.moveTo(20, this.ctx.canvas.height-100);
  this.ctx.lineTo(200, this.ctx.canvas.height-100);
  this.ctx.lineTo(110, this.ctx.canvas.height-160);
  this.ctx.closePath();
  this.ctx.moveTo(110, this.ctx.canvas.height-160);
  this.ctx.lineTo(110, this.ctx.canvas.height-700);
  this.ctx.stroke();

};

HangmanCanvas.prototype.drawLines = function () {
  this.createBoard();
  for(i = 0; i < this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(80*(i+1)+200, this.ctx.canvas.height-100);
    this.ctx.lineTo(80*(i+1.5)+200, this.ctx.canvas.height-100);
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
