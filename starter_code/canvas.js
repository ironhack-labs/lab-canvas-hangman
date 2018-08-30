
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.errorsDraw = [
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
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,this.ctx.width,this.ctx.height);
};

HangmanCanvas.prototype.drawLines = function () {
  for (var i=0; i<this.secretWord.length;i++){
    this.ctx.moveTo(150+i*38,500);
    this.ctx.lineTo(150+(i+1)*28,500);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font="28px serif";
  this.ctx.fillText(this.secretWord[i], 150 + index*38, 490);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font="28px serif";
  this.ctx.fillText(letter,800-errorsLeft*35,150);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  if(this.errorsDraw[shape].type === "line") {
    this.ctx.moveTo(this.errorsDraw[shape].x1,this.errorsDraw[shape].y1);   
    this.ctx.lineTo(this.errorsDraw[shape].x2,this.errorsDraw[shape].y2);
    this.ctx.stroke();
  } else if(this.errorsDraw[shape].type === "triangle") {
    this.ctx.beginPath();
    this.ctx.moveTo(this.errorsDraw[shape].x1,this.errorsDraw[shape].y1);    
    this.ctx.lineTo(this.errorsDraw[shape].x2,this.errorsDraw[shape].y2);
    this.ctx.lineTo(this.errorsDraw[shape].x3,this.errorsDraw[shape].y3);
    this.ctx.lineTo(this.errorsDraw[shape].x1,this.errorsDraw[shape].y1);
    this.ctx.stroke();
  } else {
    this.ctx.beginPath();
    this.ctx.arc(this.errorsDraw[shape].x1, this.errorsDraw[shape].y1, this.errorsDraw[shape].r, 0, Math.PI*2, true);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
