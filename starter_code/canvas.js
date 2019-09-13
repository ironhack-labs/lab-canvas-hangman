class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.correct = [];
    this.wrong = [];
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 800, 1200);
    this.ctx.beginPath();
    this.ctx.moveTo(150, 600);
    this.ctx.lineTo(300, 600);
    this.ctx.lineTo(225, 550);
    this.ctx.lineTo(225, 200);
    this.ctx.lineTo(450, 200);
    this.ctx.lineTo(450, 250);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(150, 600);
    this.ctx.lineTo(225, 550);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawLines() {
    this.createBoard();
    let x = 350;
    const y = 600;
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.correct.includes(this.secretWord[i])) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + 10, y);
        this.ctx.lineTo(x + 50, y);
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.font = '30px Arial';
        this.ctx.fillText(this.secretWord[i], x + 20, y - 10);
        x += 50;
      } else {
        this.ctx.beginPath();
        this.ctx.moveTo(x + 10, y);
        this.ctx.lineTo(x + 50, y);
        this.ctx.stroke();
        this.ctx.closePath();
        x += 50;
      }
    }
  }

  writeCorrectLetter(str) {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (str === this.secretWord[i]) {
        this.correct.push(str);
      }
    }
  }

  writeWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.wrong.push(letter);
      this.ctx.font = '30px Arial';
      this.ctx.fillText(this.wrong, 800, 250);
    }
  }

  drawHangman() {
    if (this.wrong.length === 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(450, 250);
      this.ctx.lineTo(450, 600);
      this.ctx.stroke;
    }
  }
}

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
