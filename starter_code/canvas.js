class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
};

HangmanCanvas.prototype.drawLines = function () {
  let x = 200;
  for (let counter = 0; counter < this.secretWord.length; counter += 1) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, 700);
    this.ctx.lineTo(x + 20, 700);
    this.ctx.stroke();
    this.ctx.closePath();
    x += 25;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let x = 200;
  let pos = x + (25 * index);
  this.ctx.beginPath();
  this.ctx.fillText(this.secretWord[index], pos, 695);
  this.ctx.closePath();
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let x = 800;
  let pos = x + (25 * this.errorsLeft);
  this.ctx.beginPath();
  this.ctx.fillText(letter, pos, 200);
  this.ctx.closePath();
  this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (shape) {
    case 9:
      this.ctx.beginPath();
      this.ctx.moveTo(50, 700);
      this.ctx.lineTo(150, 700);
      this.ctx.lineTo(100, 670);
      this.ctx.lineTo(50, 700);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 8:
      this.ctx.beginPath();
      this.ctx.moveTo(100, 670);
      this.ctx.lineTo(100, 100);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 7:
      this.ctx.beginPath();
      this.ctx.moveTo(100, 100);
      this.ctx.lineTo(400, 100);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 6:
      this.ctx.beginPath();
      this.ctx.moveTo(400, 100);
      this.ctx.lineTo(400, 150);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 5:
      this.ctx.beginPath();
      this.ctx.arc(400, 200, 50, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 5:
      this.ctx.beginPath();
      this.ctx.moveTo(400, 250);
      this.ctx.lineTo(400, 500);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 4:
      this.ctx.beginPath();
      this.ctx.moveTo(400, 300);
      this.ctx.lineTo(300, 400);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 3:
      this.ctx.beginPath();
      this.ctx.moveTo(400, 300);
      this.ctx.lineTo(500, 400);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 2:
      this.ctx.beginPath();
      this.ctx.moveTo(400, 500);
      this.ctx.lineTo(300, 600);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 1:
      this.ctx.beginPath();
      this.ctx.moveTo(400, 500);
      this.ctx.lineTo(500, 600);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
  }

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};