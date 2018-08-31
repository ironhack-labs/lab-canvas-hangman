
$(document).ready(function(){

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.aSecret = secretWord;
}
var newHangman = new Hangman();
console.log(this.aSecret);

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

$('#start-game-button').click(function () {
  newHangman.createBoard();
})

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0 , 1200, 800);

  var x = 1200;
  var y = 800;

  newHangman.drawLines();

};

HangmanCanvas.prototype.drawLines = function () {

  console.log("this is happening");
  console.log(this.aSecret.length);

  var dist = 50;
  var wordL = this.aSecret.length * 2 * dist;


  this.ctx.setLineDash([dist, dist]);
  this.ctx.beginPath();
  this.ctx.moveTo(200, 200);
  this.ctx.lineTo(200 + wordL, 200);
  this.ctx.stroke();
  this.ctx.setLineDash([]);

  
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

// var newGame = new Hangman();
})