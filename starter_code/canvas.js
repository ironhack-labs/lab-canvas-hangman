
function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById('hangman');
  this.ctx = this.canvas.getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  ctx.clearRect(0,0,canvas.width, canvas.heigth);
};

HangmanCanvas.prototype.drawLines = function () {
  
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
