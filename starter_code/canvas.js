
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
};

HangmanCanvas.prototype.drawLines = function () {
  var x = 250 // x coordinate
  var y = 500 //y coordinate
  for (i=0; i<this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x+50, y);
    this.ctx.stroke();
    this.ctx.closePath();
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
