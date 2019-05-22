
function HangmanCanvas(secretWord) {
  let canvas = document.getElementById("hangman");

  canvas.width = window.innerWidth;
  canvas.heigth = window.innerHeight;

  this.ctx = canvas.getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.fillStyle = 'white';
  this.ctx.strokeStyle = 'black';
  this.ctx.fillRect(0, 0, 1200, 8000);
  this.ctx.lineWidth = 5;
};

HangmanCanvas.prototype.drawLines = function () {
  let wordCount = this.secretWord.length;
  let letterSpacing = 25;
  let lineLength = 50;
  let x1 = 100;
  let x2 = x1 + lineLength;
  let y = 750;

  for (let i = 0; i < wordCount; i++) {
    let x3 = x2 + letterSpacing;
    let x4 = x3 + lineLength;

    this.ctx.beginPath();
    this.ctx.moveTo(x3, y);
    this.ctx.lineTo(x4, y);
    this.ctx.stroke()
    this.ctx.fill();

    x2 += lineLength + letterSpacing;

  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let x = 199 + (index * 75);
  let y = 740;

this.ctx.fillStyle = "black";
this.ctx.textAlign = "center";
this.ctx.font = "30px Arial";
this.ctx.fillText(this.secretWord[index], x, y);
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
