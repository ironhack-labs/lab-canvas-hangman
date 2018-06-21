
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.lineWidth=10;

  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
  var letterSpace = 100;
  var sep = 10;
  var posX = 300;
  this.ctx.moveTo(posX, 700);
  for (var i = 0; i < this.secretWord.length; i++) {
    posX+=letterSpace;
    this.ctx.lineTo(posX, 700);
    posX += sep;
    this.ctx.moveTo(posX, 700);
  } 
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
