function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
}

HangmanCanvas.prototype.createBoard = function() {
  var width = 1200;
  context.clearRect(0, 0, canvas.width, canvas.height);
};

HangmanCanvas.prototype.drawLines = function() {
  this.ctx.beginPath();
  this.ctx.setLineDash([5, 15]);
  this.ctx.moveTo(0, 50);
  this.ctx.lineTo(400, 50);
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
