function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1000, 900)
};


HangmanCanvas.prototype.drawLines = function () {  
  var position = 300;
  for (i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(position, 100);
    ctx.lineTo(position + 50, 100);
    ctx.stroke();
    ctx.fill();
    position += 60;
  }
};


HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.fillText(letter, 500, 500);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.fillText(letter, 600, 500);
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
