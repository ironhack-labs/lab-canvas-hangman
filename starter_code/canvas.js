
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.createBoard();
  this.drawLines();
  
}

HangmanCanvas.prototype.createBoard = function () {

  this.ctx.clearRect(0,0, 600, 1000);
  


};

HangmanCanvas.prototype.drawLines = function () {
for (var i = 0; var < 
this.ctx.beginPath();
this.ctx.moveTo(200,200);
this.ctx.lineTo(200,100);
this.ctx.lineTo(700,100);
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
