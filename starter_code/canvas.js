function HangmanCanvas(secretWord) {
  this.secretWord = secretWord;

  this.canvas = document.getElementById("hangman");

  this.ctx = this.canvas.getContext("2d");
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function() {
  let x = 500;
  let y = 500;

  for (let i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    x += 50;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.closePath();
    x += 20;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.font = "50px Arial";
  this.ctx.fillText(this.secretWord[index], 500 + 70 * index, 490);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.ctx.font = "50px Arial";
  this.ctx.fillText(letter, 700 + 50 * (10 - errorsLeft), 200, 50);
};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {
  this.ctx.drawImage(imageLose, 100, 100, 570, 240);
};

HangmanCanvas.prototype.winner = function() {
  this.ctx.drawImage(imageWin, 100, 100, 872, 618);
};

const imageWin = new Image();
imageWin.src = "./images/awesome.png";

const imageLose = new Image();
imageLose.src = "./images/gameover.png";
