function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function() {
  this.ctx.moveTo(5 * h1, h0 - mar);
  var bias = 5;
  for (i = 0; i < hangman.secretWord.length; i++) {
    this.ctx.strokeStyle = "black";
    this.ctx.lineTo((bias+i) * h1, h0 - mar);
    this.ctx.strokeStyle = "white";
    this.ctx.lineTo(((bias+1.5*i) * h1, h0 - mar);
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};

var h1 = 40;
var mar = 40;
var h0 = 800;
