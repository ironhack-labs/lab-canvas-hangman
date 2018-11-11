
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

// HangmanCanvas.prototype.drawLines = function () {
//   this.secretWord.forEach(function(word){
//     for(n = 0; n < word.length; n++){
//       return word.charAt(n) 
//       }
//     }
//   })
// };

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

//draw the man just by calling the drawing path;

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.beginPath()
  this.ctx.fillRect()
};

