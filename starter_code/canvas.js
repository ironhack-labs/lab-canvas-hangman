
function HangmanCanvas(secretWord) {
  this.secretWord = secretWord
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.start = 0;

}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  console.log('yasta')

};

HangmanCanvas.prototype.drawLines = function () {
  for ( i = 0; i< this.secretWord.length; i++) {
    x = i * 140;
    this.ctx.beginPath();
    this.ctx.moveTo(100+x, 500);
    this.ctx.lineTo(200+x, 500);
    this.ctx.stroke();
    this.ctx.closePath();

  }
console.log(this.secretWord)
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  console.log(index)
  this.ctx.font="80px Arial"
  this.ctx.fillStyle="black"
  this.ctx.fillText(this.secretWord[index],300 + index * 70,395);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font="70px Arial"
  this.ctx.fillStyle="red"
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
