function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.word = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  console.log("Ready");
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.fillStyle = "black";
  this.ctx.beginPath();
  this.ctx.moveTo(200, 500);
  this.ctx.lineTo(100, 600);
  this.ctx.stroke();
  this.ctx.lineTo(300, 600);
  this.ctx.stroke();
  this.ctx.lineTo(200, 500);
  this.ctx.stroke();
  this.ctx.lineTo(200, 50);
  this.ctx.stroke();
  this.ctx.lineTo(500, 50);
  this.ctx.stroke();
  this.ctx.lineTo(500, 100);
  this.ctx.stroke();
  this.ctx.moveTo(500, 200);
  this.ctx.arc(500, 200, 100, 0, Math.PI * 2);
  this.ctx.stroke();
};

HangmanCanvas.prototype.drawLines = function() {};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
