
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');  
  this.secretWord = secretWord;
}

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

HangmanCanvas.prototype.createBoard = function () {
this.ctx.clearRect(0, 0, this.width, this.height);
begingPath();
};

HangmanCanvas.prototype.drawLines = function () {
  var x= 0;
 for(var i = 0; i<this.secretWord.length;i++) {
  this.ctx.moveTo(x,20);
  this.ctx.lineTo(x+10,20);
  this.ctx.stroke();
  x+=12;
 }
}

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};


HangmanCanvas.prototype.drawHangman = function (shapes) {
  console.log("hola");  
  this.ctx.beginPath();
  this.ctx.lineTo(shapes[0].x1,shapes[0].y1);
  this.ctx.lineTo(shapes[0].x2,shapes[0].y2);
  this.ctx.lineTo(shapes[0].x3,shapes[0].y3);
  this.ctx.fill()
  this.ctx.closePath();

  switch(this.errorsLeft){
  case 9:
  console.log("hola");  
  this.ctx.beginPath();
  this.ctx.moveTo(shapes[0].x1,shapes[0].y1);
  this.ctx.lineTo(shapes[0].x2,shapes[0].y2);
  this.ctx.lineTo(shapes[0].x3,shapes[0].x3);
  this.ctx.fill()
  this.ctx.closePath();
  break;
    
  
}
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
