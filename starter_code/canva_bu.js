class HangmanCanvas {
  constructor(secretWord) {
    this.wrongLetters = [];
    this.secretWord = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.ctx.font = "30px Arial";
  }

  createBoard() {
    this.ctx.fillStyle = '#000';
    this.ctx.clearRect(0, 0, 800, 1200);
  }
  drawLines() {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.ctx.fillStyle = '#000';
      const factor = (i) * 50;
      this.ctx.beginPath();
      this.ctx.moveTo(200 + factor, 600);
      this.ctx.lineTo(230 + factor, 600);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
  writeCorrectLetter(x) {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.secretWord.split('')[i] === x.key) {
        this.drawLines();
        this.ctx.fillText(x.key.toUpperCase(), (i * 50) + 200, 580);
      }
    }
  }
  writeWrongLetter(w) {
    if (!this.secretWord.split('').includes(w.key)) {
      this.wrongLetters.push(w);
      // console.log(this.wrongLetters.length);
      this.ctx.fillText(w.key.toUpperCase(), 500 + (this.wrongLetters.length + 1) * 50, 200);
    }


  }
  drawHangman() {
    console.log(this.wrongLetters);
    switch (this.wrongLetters) {
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(50, 600);
        this.ctx.lineTo(100, 600);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      default:
        break;
    }
  }
  gameOver() {

  }
  winner() {

  }
}




// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }

// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };