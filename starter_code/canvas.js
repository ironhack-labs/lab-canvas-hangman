class HangmanCanvas {
  constructor(secretWord) {
    this.word = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
  }
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.beginPath();
  this.ctx.lineWidth = 5;
  this.ctx.moveTo(0, 790);
  this.ctx.lineTo(200, 790);
  this.ctx.lineTo(100, 740);
  this.ctx.closePath();
  this.ctx.stroke();

  this.ctx.moveTo(100, 740);
  this.ctx.lineTo(100, 5);
  this.ctx.lineTo(500, 5);
  this.ctx.lineTo(500, 105);
  this.ctx.stroke();

  this.ctx.moveTo(250, 790);
  let posicao = 250;
  for (let i = 0; i < this.word.length; i += 1) {
    this.ctx.lineTo(posicao + 80, 790);
    this.ctx.stroke();
    posicao += 100;
    this.ctx.moveTo(posicao, 790);    
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {
  this.alert('You Lose');
};

HangmanCanvas.prototype.winner = function () {

};
