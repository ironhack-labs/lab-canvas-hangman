function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord =secretWord;
  this.createBoard();
  this.start=0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800);
  this.ctx.lineWidth = 8;
};

HangmanCanvas.prototype.drawLines = function () {
for(let i =0; i<this.secretWord.length; i++) {
  this.ctx.lineWidth = ;
  this.ctx.moveTo(230 +(i*50), 480);
  this.ctx.lineTo(250 +(i*50),480);
}
};

HangmanCanvas.prototype.writeCorrectLetter = function (i) {
  this.ctx.font = '28px Open Sans, sans-serif';
  this.ctx.fillText(this.secretWord[i].toUpperCase(), 230 + (i * 50), 460);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '28px Open Sans, sans-serif';
  this.ctx.fillText(letter, space, 200);
  space += 35;
  this.drawHangman(errorsDraw[errorsDraw.length - errorsLeft]);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (shape.type) {
    case 'triangle':
      this.ctx.moveTo(shape.x1, shape.y1);
      this.ctx.lineTo(shape.x2, shape.y2);
      this.ctx.lineTo(shape.x3, shape.y3);
      this.ctx.closePath();
      break;
    case 'line':
      this.ctx.moveTo(shape.x1, shape.y1);
      this.ctx.lineTo(shape.x2, shape.y2);
      break;
    case 'circle':
      this.ctx.moveTo(shape.x1, shape.y1);
      this.ctx.arc(shape.x2, shape.y2, shape.r, 0, Math.PI * 2, true);
      break;
    default:
      break;
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function () {
  const img = new Image();
  that = this;
  img.onload = function () {
    that.ctx.drawImage(img, 150, 100);
  };
  img.src = './images/gameover.png';
};

HangmanCanvas.prototype.winner = function () {
  const img = new Image();
  that = this;
  img.onload = function () {
    that.ctx.drawImage(img, 150, 100);
  };
  img.src = './images/awesome.png';
};
