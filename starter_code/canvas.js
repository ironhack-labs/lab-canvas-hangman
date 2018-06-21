
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  var lines = 10;
};

HangmanCanvas.prototype.drawLines = function () {
  var x = 300, y = 700;
  this.ctx.moveTo(x, y);
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.lineTo(x += 20, y);
    this.ctx.moveTo(x +=10, y);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) { 
  this.ctx.font = "30px Arial";
  var letterIndex = this.secretWord.indexOf(index);
  var x = 300 + (15 * letterIndex);
  this.ctx.fillText(index, x, 695)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var x = 600, errorsLeft = 10;
  var triesLeft = errorsLeft - 1;
  if (triesLeft > 0) {
    this.ctx.fillText(letter, x+=5, 400);
  }
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
