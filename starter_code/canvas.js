
  // function HangmanCanvas(secretWord) {
  //   this.ctx = document.getElementById('hangman').getContext('2d');
  // }


var HangmanCanvas = function(secretWord) {
  var canvas = document.getElementById('hangman');
  var ctx = canvas.getContext('2d');
  this.secretWord = secretWord;
  this.createBoard();
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {
  // this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.beginPath();
  // this.ctx.moveTo (500, 500);
  this.ctx.lineWidth = 20;
};

HangmanCanvas.prototype.drawLines = function () {
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(250 + (i * 70), 700);
    this.ctx.lineTo(300 + (i * 70), 700);
    this.ctx.stroke();
  }

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
