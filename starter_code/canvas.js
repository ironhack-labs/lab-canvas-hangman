
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {

  this.ctx.strokeRect(0,0,1200,800);
};

HangmanCanvas.prototype.drawLines = function () {
  var xInit = 350;
  var yInit = 600;
  for (var i = 0; i<this.secretWord.length; i++){
  this.ctx.beginPath();
  this.ctx.moveTo(xInit,yInit);
  this.ctx.lineTo(xInit+50,yInit);
  xInit += 60;
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
