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

    this.ctx.fillStyle = "#000";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  writeCorrectLetter(index) {
    let letter = this.secretWord[index];

    this.ctx.beginPath();
    this.ctx.fillStyle = "#0F0";
    this.ctx.font = "30px Arial";

    for (let i = 0; i < this.secretWord.length; ++i) {
      if (this.secretWord[i] === letter) {
        this.ctx.fillText(
          letter,
          this.correctLetterPosition[i].x,
          this.correctLetterPosition[i].y
        );
      }
    }

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

    switch (shape) {
      case 10:
        this.ctx.moveTo(100, 500);
        this.ctx.lineTo(300, 500);
        this.ctx.lineTo(200, 450);
        this.ctx.lineTo(100, 500);
        break;

      case 9:
        this.ctx.moveTo(200, 450);
        this.ctx.lineTo(200, 50);
        break;

      case 8:
        this.ctx.moveTo(200, 50);
        this.ctx.lineTo(500, 50);
        break;

      case 7:
        this.ctx.moveTo(500, 50);
        this.ctx.lineTo(500, 70);
        break;

      case 6:
        let radio = 40;
        this.ctx.arc(500, 70 + radio, radio, Math.PI * 2, 0);
        break;

      case 5:
        this.ctx.moveTo(500, 150);
        this.ctx.lineTo(500, 300);
        break;

      case 4:
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(430, 380);
        break;

      case 3:
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(570, 380);
        break;

      case 2:
        this.ctx.moveTo(500, 200);
        this.ctx.lineTo(400, 130);
        break;

      case 1:
        this.ctx.moveTo(500, 200);
        this.ctx.lineTo(600, 130);
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
