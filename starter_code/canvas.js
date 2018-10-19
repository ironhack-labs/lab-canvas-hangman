function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.font = "30px Arial";
  this.ctx.fillText(this.secretWord[0], 325, 780);
};

HangmanCanvas.prototype.drawLines = function() {
  this.ctx.beginPath();
  //triangle
  this.ctx.moveTo(200, 720);
  this.ctx.lineTo(100, 800);
  this.ctx.lineTo(300, 800);
  this.ctx.closePath();

  this.ctx.moveTo(200, 720);
  //line 1
  this.ctx.lineTo(200, 100);
  //line 2
  this.ctx.lineTo(600, 100);
  //line 3
  this.ctx.lineTo(600, 150);

  this.ctx.lineWidth = 3;
  this.ctx.strokeStyle = "#666666";
  this.ctx.stroke();

  //secret word
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

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {
  this.ctx.beginPath();
  var x = 600; // x coordinate
  var y = 200; // y coordinate
  var radius = 50; // Arc radius
  var startAngle = 300; // Starting point on circle
  var endAngle = Math.PI * 2; // End point on circle
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
