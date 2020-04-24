class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord.split("");
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.canvas.style.border = "1px solid black";
    HangmanCanvas.drawLines(this.secretWord, this.ctx, this.height, this.width);
  }

  static drawLines(secretWord, ctx, height, width) {
    let x = width * 0.40;
    let y = height * 0.90;
    secretWord.forEach(letter => {
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(x, y);
      x += 20;
      ctx.lineTo(x, y);
      ctx.stroke();
      x += 10;
    });
  }

  writeCorrectLetter(index, letter) {
    this.ctx.font = "30px arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`${letter}`, this.width * (4 / 10) + 30 * index, this.height * (89 / 100));
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "30px arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`${letter}`, this.width * (8 / 10), this.height / 4 + 30 * (10 - errorsLeft));
    hangman.errorsLeft = errorsLeft--;
  }

  drawHangman(errorsLeft) {
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'black';
    this.ctx.save();
    switch (errorsLeft) {
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(this.width * (1 / 10), this.height * (9 / 10));
        this.ctx.lineTo(this.width * (12 / 100), this.height * (86 / 100));
        this.ctx.lineTo(this.width * (14 / 100), this.height * (9 / 10));
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      case 8:
        this.ctx.moveTo(this.width * (12 / 100), this.height * (86 / 100));
        this.ctx.lineTo(this.width * (12 / 100), this.height * (10 / 100));
        this.ctx.stroke();
        break;
      case 7:
        this.ctx.moveTo(this.width * (12 / 100), this.height * (10 / 100));
        this.ctx.lineTo(this.width * (40 / 100), this.height * (10 / 100));
        this.ctx.stroke();
        break;
      case 6:
        this.ctx.moveTo(this.width * (40 / 100), this.height * (10 / 100));
        this.ctx.lineTo(this.width * (40 / 100), this.height * (20 / 100));
        this.ctx.stroke();
        break;
      case 5:
        this.ctx.beginPath();
        this.ctx.arc(this.width * (40 / 100), this.height * (20 / 100) + 40, 40, 0, Math.PI * 2);
        this.ctx.stroke();
        break;
      case 4:
        this.ctx.moveTo(this.width * (40 / 100), this.height * (20 / 100) + 80);
        this.ctx.lineTo(this.width * (40 / 100), this.height * (55 / 100));
        this.ctx.stroke();
        break;
      case 3:
        this.ctx.moveTo(this.width * (40 / 100), this.height * (20 / 100) + 90);
        this.ctx.lineTo(this.width * (37 / 100), this.height * (57 / 100));
        this.ctx.stroke();
        break;
      case 2:
        this.ctx.moveTo(this.width * (40 / 100), this.height * (20 / 100) + 90);
        this.ctx.lineTo(this.width * (43 / 100), this.height * (57 / 100));
        this.ctx.stroke();
        break;
      case 1:
        this.ctx.moveTo(this.width * (40 / 100), this.height * (55 / 100));
        this.ctx.lineTo(this.width * (37 / 100), this.height * (76 / 100));
        this.ctx.stroke();
        break;
      case 0:
        this.ctx.moveTo(this.width * (40 / 100), this.height * (55 / 100));
        this.ctx.lineTo(this.width * (43 / 100), this.height * (76 / 100));
        this.ctx.stroke();
        break;
    }
  }

  gameOver() {
    var gOver = new Image();
    gOver.src = 'images/gameover.png';
    this.ctx.clearRect(0, 0, this.width, this.height);
    gOver.onload = function () {
      const context = document.getElementById('hangman').getContext('2d');
      context.drawImage(gOver, this.width * 0.55, this.height * 0.90, 570, 240);
    };
  }

  winner() {
    var winner = new Image();
    winner.src = 'images/awesome.png';
    this.ctx.clearRect(0, 0, this.width, this.height);
    winner.onload = function () {
      const context = document.getElementById('hangman').getContext('2d');
      context.drawImage(winner, this.width * 0.17, this.height * 0.10, 872, 618);
    };
  }
}