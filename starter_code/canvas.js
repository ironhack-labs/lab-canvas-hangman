var hangman = new Hangman();

class HangmanCanvas {
  constructor() {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = hangman.secretWord;
  }

  createBoard() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.closePath();
  }

  drawLines() {
    let initX = 100;
    let lineY = 750;

    for (let i = 0; i < hangman.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(initX, lineY);
      this.ctx.lineTo(initX + 100, lineY);
      this.ctx.stroke();
      this.ctx.closePath();
      initX += 150;
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    let initX = 650;
    let initY = 200;
    for(let i = 0; i < hangman.letters.length; i++) {
      this.ctx.font = "30px Arial";
      this.ctx.fillText(letter, initX, initY);
      initX += 40;
    }
    
  }

}

//HangmanCanvas.prototype.createBoard = function () {

//};

//HangmanCanvas.prototype.

//HangmanCanvas.prototype.writeCorrectLetter = function (index) {

//};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

const hangmanCanvas = new HangmanCanvas;