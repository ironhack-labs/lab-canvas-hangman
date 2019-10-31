function HangmanCanvas(secretWord) {
}

HangmanCanvas.prototype.createBoard = function () {

  ctx.clearRect(0, 0, 300, 300);
};

HangmanCanvas.prototype.drawLines = function () {

  ctx.beginPath();
  ctx.moveTo(80, 920);
  ctx.lineTo(40, 950);
  ctx.lineTo(130, 950);
  ctx.lineTo(80, 920);
  ctx.lineTo(80, 650);
  ctx.lineTo(300, 650);
  ctx.lineTo(300, 700);
  ctx.arc(300, 700, 30, 0, Math.PI*2, true);
  ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
};
HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
};
HangmanCanvas.prototype.drawHangman = function (shape) {
};
HangmanCanvas.prototype.gameOver = function () {
};
HangmanCanvas.prototype.winner = function () {
};
/*class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {

  }

  drawLines() {

  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}*/