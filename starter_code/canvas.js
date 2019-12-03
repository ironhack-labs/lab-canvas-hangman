class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.canvas = document.getElementById("hangman");
    this.ctx = this.canvas.getContext("2d");
    this.errorLetterPosition = { x: 700, y: 100 };
    this.correctLetterPosition = [];
    this.winnerImg = new Image();
    this.loserImg = new Image();

    this.loadImages();
  }

  loadImages() {
    this.winnerImg.src = "./images/awesome.png";
    this.loserImg.src = "./images/gameover.png";
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    let x = 400;
    let y = 500;

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);

    for (let i = 0; i < this.secretWord.length; ++i) {
      x += 50;
      this.ctx.lineTo(x, y);

      this.correctLetterPosition.push({ x: x - 35, y: 490 });

      x += 20;
      this.ctx.moveTo(x, y);
    }

    this.ctx.stroke();
    this.ctx.closePath();
  }

  writeCorrectLetter(index) {
    this.ctx.beginPath();

    this.ctx.fillStyle = "#0F0";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(
      this.secretWord[index],
      this.correctLetterPosition[index].x,
      this.correctLetterPosition[index].y
    );

    this.ctx.stroke();
    this.ctx.closePath();
  }

  writeWrongLetter(letter, errorsLeft) {
    this.errorLetterPosition.x += 40;

    this.ctx.beginPath();

    this.ctx.fillStyle = "#F00";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(
      letter,
      this.errorLetterPosition.x,
      this.errorLetterPosition.y
    );

    this.ctx.stroke();
    this.ctx.closePath();

    this.drawHangman(errorsLeft);
  }

  drawHangman(shape) {
    this.ctx.beginPath();
    let x = 0;
    let y = 0;

    switch (shape) {
      case 10:
        x = 100;
        y = 500;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(300, 500);
        this.ctx.lineTo(200, 450);
        this.ctx.lineTo(100, 500);
        break;

      case 9:
        x = 200;
        y = 450;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, y - 400);
        break;

      case 8:
        x = 200;
        y = 50;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + 300, y);
        break;

      case 7:
        x = 500;
        y = 50;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(500, y + 20);
        break;

      case 6:
        x = 500;
        y = 70;
        this.ctx.moveTo(x, y);
        this.ctx.arc(x, y + 40, 40, 0, Math.PI * 2);
        break;

      case 5:
        x = 500;
        y = 150;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, y + 150);
        break;

      case 4:
        x = 500;
        y = 300;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x - 70, y + 80);
        break;

      case 3:
        x = 500;
        y = 300;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + 70, y + 80);
        break;

      case 2:
        x = 500;
        y = 200;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x - 100, y - 70);
        break;

      case 1:
        x = 500;
        y = 200;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + 100, y - 70);
        break;
    }

    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "#000";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  gameOver() {
    this.ctx.drawImage(this.loserImg, 300, 100, 500, 300);
  }

  winner() {
    this.ctx.drawImage(this.winnerImg, 300, 0, 500, 500);
  }
}
