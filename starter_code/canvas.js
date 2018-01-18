function HangmanCanvas(secretWord) {
  var canvas = document.getElementById('hangman');
  this.ctx = canvas.getContext("2d");
  this.hangman = new Hangman();
  this.hangman.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, 800, 1200);
};

HangmanCanvas.prototype.drawLines = function() {
  this.ctx.beginPath();
  this.ctx.moveTo(200, 200);
  for (var i = 0; i < this.hangman.secretWord.length; i++) {
    this.ctx.lineTo(200 + i * 20, 200);
    this.ctx.moveTo(210 + i * 20, 200);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.fillText(this.secret[i], 212 + i * 20, 195, 10);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.ctx.fillText(letter, 200 + (10 - errorsLeft) * 20, 50, 10);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  var x1 = result[0].back_line.x1;
  var y1 = result[0].back_line.y1;
  var x2 = result[0].back_line.x2;
  var y2 = result[0].back_line.y2;
  var stroke = result[0].back_line.stroke;
  var stroke_width = result[0].back_line.width;

  for (var i = 0; i < x1.length - 1; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1[i], y1[i]);
    this.ctx.lineTo(x2[i], y2[i]);
    this.ctx.lineWidth = stroke_width;
    this.ctx.strokeStyle = stroke;
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};

$(document).ready(function() {
  $("#start-game-button").click(function(e) {
    hangmanCanvas = new HangmanCanvas("ADRIAN");
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
});
