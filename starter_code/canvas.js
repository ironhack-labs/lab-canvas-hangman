var lineLength = 50;

function HangmanCanvas(secretWord) {
  this.wordLength = secretWord.length;
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  var initialPosX = 100;
  var initialPosY = 750;
  this.ctx.clearRect(0,0,800,1200);
  this.ctx.moveTo(initialPosX, initialPosY);
  var previousPosX = initialPosX;
  var previousPosY = initialPosY;
  for(var i=0;i<this.wordLength;i++){
    this.ctx.lineTo(previousPosX+lineLength,750);
    previousPosX += lineLength+20;
    this.ctx.moveTo(previousPosX, previousPosY);
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};


HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.beginPath();
  this.ctx.moveTo(50, 700);
  this.ctx.lineTo(80 , 750);
  this.ctx.lineTo(20 , 750);
  this.ctx.lineTo(50, 700);
  this.ctx.lineTo(50 ,200);
  this.ctx.lineTo(400 , 200);
  this.ctx.lineTo(400 , 250);
  this.ctx.moveTo(450, 300);
  this.ctx.arc(400 , 300, 50, 0, Math.PI*2);
  this.ctx.moveTo(400, 350);
  this.ctx.lineTo(400 , 500);
  this.ctx.lineTo(340 ,600);
  this.ctx.moveTo(400 , 500);
  this.ctx.lineTo(460 , 600);
  this.ctx.moveTo(400 , 400);
  this.ctx.lineTo( 320, 480);
  this.ctx.moveTo(400 , 400);
  this.ctx.lineTo( 480, 480);

  this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
