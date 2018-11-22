
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, document.getElementById('hangman').width, document.getElementById('hangman').height);
    this.ctx.beginPath();
    this.ctx.lineWidth=15
    this.ctx.moveTo(50, 750);
    this.ctx.lineTo(0, 800);
    this.ctx.lineTo(100, 800);
    this.ctx.lineTo(50, 50);

    this.ctx.beginPath();
    this.ctx.lineWidth=15
    this.ctx.moveTo(50, 50);
    this.ctx.lineTo(500, 50);

    this.ctx.beginPath();
    this.ctx.lineWidth=15
    this.ctx.moveTo(500, 50);
    this.ctx.lineTo(500, 100);
};

HangmanCanvas.prototype.drawLines = function () {
  for (l = 0; l < hangman.getWord().length; l++) { 
  this.ctx.beginPath();
    this.ctx.lineWidth=15
    this.ctx.moveTo(110 + l*60, 750);
    this.ctx.lineTo(160 + l*60, 750);
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
