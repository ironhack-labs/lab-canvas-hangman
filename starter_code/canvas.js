// space is the width value where we will start drawing wrong letters
var space = 500;

// all the shapes and coordinates we need to draw the hangman
var errorsDraw = [
  {
    type: 'triangle', x1: 50,  y1: 500, x2: 125, y2: 475, x3: 200, y3: 500
  },
  {
    type: 'line',     x1: 125, y1: 475, x2: 125, y2: 50
  },
  {
    type: 'line',     x1: 125, y1: 50,  x2: 300, y2: 50
  },
  {
    type: 'line',     x1: 300, y1: 50,  x2: 300, y2: 100
  },
  {
    type: 'circle',   x1: 335, y1: 135, x2: 300, y2: 135, r: 35
  },
  {
    type: 'line',     x1: 300, y1: 170, x2: 300, y2: 320
  },
  {
    type: 'line',     x1: 300, y1: 320, x2: 250, y2: 380
  },
  {
    type: 'line',     x1: 300, y1: 320, x2: 350, y2: 380
  },
  {
    type: 'line',     x1: 300, y1: 200, x2: 265, y2: 250
  },
  {
    type: 'line',     x1: 300, y1: 200, x2: 335, y2: 250
  }
];

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.createBoard();
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.beginPath();
  this.ctx.lineWidth = 8;
};

HangmanCanvas.prototype.drawLines = function () {
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(230 + (i * 50), 480);
    this.ctx.lineTo(250 + (i * 50), 480);
    this.ctx.stroke();
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
  var img = new Image();
  that = this;
  img.onload = function () {
    that.ctx.drawImage(img, 150, 100);
  };
  img.src = './images/gameover.png';
};

HangmanCanvas.prototype.winner = function () {
  var img = new Image();
  that = this;
  img.onload = function () {
    that.ctx.drawImage(img, 150, 100);
  };
  img.src = './images/awesome.png';
};