
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0, getElementById('hangman').width, getElementById('hangman').height);
};

HangmanCanvas.prototype.drawLines = function () {
  var j = 0;
  for(i = 0; i<this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(50+j,50);
    this.ctx.lineTo(60+j,50);
    this.ctx.stroke();
    this.ctx.closePath();
    j += 30;
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