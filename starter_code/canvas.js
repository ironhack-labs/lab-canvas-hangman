
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,800,1200);
  this.drawLines();
  this.drawHangman();
};

HangmanCanvas.prototype.drawLines = function () {  
  this.ctx.beginPath();
  this.ctx.lineWidth = '5';
  this.ctx.strokeStyle = 'green';
  this.ctx.moveTo(50, 500);
  this.ctx.stroke();
  this.ctx.lineTo(125, 475);
  
  this.ctx.lineTo(200, 500);
  
  this.ctx.fill();

  this.ctx.moveTo(125, 475);
  this.ctx.lineTo(125, 50);

  this.ctx.moveTo(300, 50);
  this.ctx.lineTo(300, 100);

  this.ctx.moveTo(125, 50);
  this.ctx.lineTo(300, 50);
  
  
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.beginPath();    
  this.ctx.lineWidth = '5';
  this.ctx.strokeStyle = 'green';
  this.ctx.arc(335, 135, 300, 135, 35);
  this.ctx.stroke();
  this.ctx.fill();
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};



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
