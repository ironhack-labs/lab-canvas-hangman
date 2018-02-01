function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById('hangman')
  this.ctx = this.canvas.getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.lineWidth = 10;
  this.ctx.moveTo(0, 800);
  this.ctx.lineTo(100, 800);
  this.ctx.stroke();
  hangmanCanvas.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
  this.ctx.setLineDash([100, 20]);
  this.ctx.moveTo(600, 800);
  this.ctx.lineTo(1200, 800);
  this.ctx.stroke();
  this.ctx.font = '48px serif';
  this.ctx.fillText('ERRORS LEFT: ' + hangman.errorsLeft, 700, 200);
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font = '48px serif';
  this.ctx.fillText(this.secretWord[index], 630 + (index * 120), 780);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '40px serif';
  this.ctx.fillText(letter, 700 + (errorsLeft * 40), 250);
  this.ctx.clearRect(1025, 150, 70, 70);
  this.ctx.fillText(errorsLeft, 1050, 200);
};

HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  switch (errorsLeft) {
    case 9: 
      this.ctx.moveTo(0, 800);
      this.ctx.lineTo(50, 750);
      this.ctx.lineTo(100, 800);
      break;
    case 8:
      this.ctx.moveTo(50, 750);
      this.ctx.lineTo(50, 100);
      break;
    case 7:
      this.ctx.moveTo(50, 100);
      this.ctx.lineTo(400, 100);
      break;
    case 6:
      this.ctx.moveTo(400, 100);
      this.ctx.lineTo(400, 200);
      break;
    case 5:
      this.ctx.moveTo(400, 200);
      this.ctx.arc(400, 250, 50, 0, Math.PI * 2, true);
      break;
    case 4:
      this.ctx.moveTo(400, 300);
      this.ctx.lineTo(400, 500);
      break;
    case 3:
      this.ctx.moveTo(400, 500);
      this.ctx.lineTo(300, 700);
      break;
    case 2:
      this.ctx.moveTo(400, 500);
      this.ctx.lineTo(500, 700);
      break;
    case 1:
      this.ctx.moveTo(400, 350);
      this.ctx.lineTo(300, 500);
      break;
    case 0:
      this.ctx.moveTo(400, 350);
      this.ctx.lineTo(500, 500);
      break;
    default:
      console.log('oh no');
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
