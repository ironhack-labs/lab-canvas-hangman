
//space is the width value where we will start drawing wrong letters
var space = 700;

//all the shapes and coordinates we need to draw the hangman
var errorsDraw = [
  { type: "triangle", x1: 50,  y1: 700, x2: 125, y2: 650, x3: 200, y3: 700 },
  { type: "line",     x1: 125, y1: 650, x2: 125, y2: 50 },
  { type: "line",     x1: 125, y1: 50,  x2: 500, y2: 50 },
  { type: "line",     x1: 500, y1: 50,  x2: 500, y2: 100 },
  { type: "circle",   x1: 550, y1: 150, x2: 500, y2: 150, r: 50, },
  { type: "line",     x1: 500, y1: 200, x2: 500, y2: 400 },
  { type: "line",     x1: 500, y1: 400, x2: 420, y2: 500 },
  { type: "line",     x1: 500, y1: 400, x2: 580, y2: 500 },
  { type: "line",     x1: 500, y1: 250, x2: 420, y2: 300 },
  { type: "line",     x1: 500, y1: 250, x2: 580, y2: 300 }
];

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext('2d');
  this.secretWord = secretWord;
  this._createBoard();
  this._drawLines();
}

HangmanCanvas.prototype._createBoard = function () {
  this.ctx.clearRect(0,0,1200,800);
  this.ctx.beginPath();
  this.ctx.lineWidth = 8;
};

HangmanCanvas.prototype._drawLines = function() {
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(250 + (i * 70), 700);
    this.ctx.lineTo(300 + (i * 70), 700);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype._writeCorrectLetter = function(i){
  this.ctx.font = "48px Open Sans, sans-serif";
  this.ctx.fillText(this.secretWord[i].toUpperCase(), 260+(i*70), 680);
};

HangmanCanvas.prototype._writeWrongLetter = function (letter, errorsLeft){
  this.ctx.font = "48px Open Sans, sans-serif";
  this.ctx.fillText(letter, space, 200);
  space += 45;
  this._drawHangman(errorsDraw[errorsDraw.length - errorsLeft]);
};

HangmanCanvas.prototype._drawHangman = function(shape) {
  switch (shape.type) {
    case "triangle":
      this.ctx.moveTo(shape.x1, shape.y1);
      this.ctx.lineTo(shape.x2, shape.y2);
      this.ctx.lineTo(shape.x3, shape.y3);
      this.ctx.closePath();
      break;
    case "line":
      this.ctx.moveTo(shape.x1, shape.y1);
      this.ctx.lineTo(shape.x2, shape.y2);
      break;
    case "circle":
      this.ctx.moveTo(shape.x1, shape.y1);
      this.ctx.arc(shape.x2, shape.y2, shape.r, 0, Math.PI * 2, true);
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype._gameOver = function() {
  var img = new Image();
  that = this;
  img.onload = function() {
    that.ctx.drawImage(img, 400, 200);
  };
  img.src = './images/gameover.png';
};

HangmanCanvas.prototype._winner = function() {
  var img = new Image();
  that = this;
  img.onload = function() {
    that.ctx.drawImage(img, 150, 0);
  };
  img.src = './images/awesome.png';
};
