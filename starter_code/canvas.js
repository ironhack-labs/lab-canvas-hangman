function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.fillText(this.secretWord[0], 325, 780);
};

HangmanCanvas.prototype.drawLines = function() {
  this.ctx.beginPath();
  
  this.ctx.moveTo(200, 720);
  this.ctx.lineTo(100, 800);
  this.ctx.lineTo(300, 800);
  this.ctx.closePath();
  this.ctx.moveTo(200, 720);
   this.ctx.lineTo(200, 100);
   this.ctx.lineTo(600, 100);
   this.ctx.lineTo(600, 150);
   this.ctx.lineWidth = 3;
   this.ctx.stroke();

   var startX = 300;
   for (let index = 0; index < this.secretWord.length; index++) {
     this.ctx.beginPath();
     startX = startX + 25;
     this.ctx.moveTo(startX, 800);
     startX = startX + 25;
     this.ctx.lineTo(startX, 800);
     this.ctx.stroke();
   }
   startX = startX - 20;
   this.ctx.fillText(this.secretWord[this.secretWord.length - 1], startX, 780);
 };

 HangmanCanvas.prototype.addCorrectLetter = function(index) {};
 HangmanCanvas.prototype.addWrongLetter = function(letter, errorsLeft) {};

 HangmanCanvas.prototype.drawHangman = function(shape) {
  this.ctx.beginPath();
  var x = 600; 
  var y = 200; 
  var radius = 50; 
  var startAngle = 300; 
  var endAngle = Math.PI * 2; 
  this.ctx.arc(x, y, radius, startAngle, endAngle, true);
  this.ctx.stroke();

  this.ctx.moveTo(600, 250);
  this.ctx.lineTo(600, 500);
  this.ctx.lineTo(550, 600);
  this.ctx.stroke();
  this.ctx.moveTo(600, 500);
  this.ctx.lineTo(650, 600);
  this.ctx.stroke();
  this.ctx.closePath();
};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};