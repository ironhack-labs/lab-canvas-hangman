

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');


}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800);


};

HangmanCanvas.prototype.drawLines = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(0,0);
  this.ctx.lineTo(100,0);
  this.ctx.stroke();

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

var canvas = new HangmanCanvas("Hola")
