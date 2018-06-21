function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
}

HangmanCanvas.prototype.createBoard = function(width) {
  ctx.clear();
  ctx.lineWidth = width;
};

HangmanCanvas.prototype.drawLines = function() {
  ctx.beginPath();
  ctx.moveTo(200, 400);
  var x = 200;
  for (var i = 0; i < hangman.secretWord.length; i++) {
    x += 25;
    ctx.lineTo(x, 400);
    ctx.stroke();
    x += 5;
    ctx.moveTo(x, 400);
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {

};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {
ctx.beginPath();
 ctx.moveTo(175,400);
var x=175;
  
ctx.lineTo(105,400);

ctx.lineTo(140,370);
ctx.closePath()

ctx.stroke()
ctx.beginPath()
ctx.moveTo(140,370)
ctx.lineTo(140,100)
ctx.lineTo(300,100)
ctx.lineTo(300,140)
ctx.stroke()
};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
