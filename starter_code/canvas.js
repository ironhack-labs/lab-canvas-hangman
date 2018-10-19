function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  // this.ctx.beginPath();
  // this.ctx.moveTo(800, 800);
  // this.ctx.lineTo(600, 800);
  // this.ctx.lineTo(700, 700);
  // this.ctx.closePath();

  // this.ctx.moveTo(700, 300);
  // this.ctx.lineTo(700, 700);
  // this.ctx.closePath();

  // this.ctx.beginPath();
  // this.ctx.moveTo(200, 720);
  // this.ctx.lineTo(100, 800);
  // this.ctx.lineTo(300, 800);
  // this.ctx.closePath();

  this.ctx.beginPath();
  this.ctx.moveTo(200, 720);
  this.ctx.lineTo(100, 800);
  this.ctx.lineTo(300, 800);
  this.ctx.closePath();

  this.ctx.moveTo(200, 720);
  this.ctx.lineTo(200, 100);
  this.ctx.lineTo(600, 100);
  //this.ctx.lineTo(600, 200);

  this.ctx.lineWidth = 3;
  this.ctx.strokeStyle = "#666666";
  this.ctx.stroke();

  var x = 600; // x coordinate
  var y = 200; // y coordinate
  var radius = 50; // Arc radius
  var startAngle = 300; // Starting point on circle
  var endAngle = Math.PI * 2; // End point on circle
  this.ctx.arc(x, y, radius, startAngle, endAngle, true);
  this.ctx.stroke();
  //this.ctx.fill();
};

HangmanCanvas.prototype.drawLines = function() {};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};

var hangman = new HangmanCanvas("toto");
hangman.createBoard();
