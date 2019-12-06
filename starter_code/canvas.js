class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById("hangman");
    this.ctx = this.canvas.getContext("2d");
    this.secretWord = secretWord;
    this.createBoard();
    this.drawLines();
    this.imageWinner = new Image();
    this.imageWinner.src = "./images/awesome.png";
    this.imageLooser = new Image();
    this.imageLooser.src = "./images/gameover.png";
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.lineWidth = 50;
    this.lineSpace = 10;
    this.correctLettersX = 350;
    this.wrongLettersX = 550;
  }

  drawLines() {
    this.linePos = this.correctLettersX;
    this.secretWord.split("").forEach((letter, index) => {
      this.line(this.linePos, 750, this.linePos + this.lineWidth, 750);
      this.linePos += this.lineWidth + this.lineSpace;
    });
  }

  writeCorrectLetter(index) {
    this.write(
      this.secretWord[index],
      this.correctLettersX + index * (this.lineWidth + this.lineSpace),
      740
    );
  }

  writeWrongLetter(letter, errorsLeft) {
    this.write(
      letter,
      this.wrongLettersX +
        (10 - errorsLeft) * (this.lineWidth + this.lineSpace),
      400
    );
  }

  drawHangman(shape) {
    switch (shape) {
      case 9:
        this.line(100, 650, 0, 750);
        this.line(0, 750, 200, 750);
        this.line(200, 750, 100, 650);
        break;
      case 8:
        this.line(100, 650, 100, 150);
        break;
      case 7:
        this.line(100, 150, 300, 150);
        break;
      case 6:
        this.line(300, 150, 300, 200);
        break;
      case 5:
        this.circle();
        break;
      case 4:
        this.line(300, 300, 300, 500);
        break;
      case 3:
        this.line(300, 500, 250, 600);
        break;
      case 2:
        this.line(300, 500, 350, 600);
        break;
      case 1:
        this.line(300, 400, 250, 400);
        break;
      case 0:
        this.line(300, 400, 350, 400);
        break;

      default:
        break;
    }
  }

  gameOver() {
    this.ctx.drawImage(this.imageLooser, 350, 200);
  }

  winner() {
    this.ctx.drawImage(this.imageWinner, 150, 100);
  }

  write(letter, x, y) {
    this.ctx.font = "70px Arial";
    this.ctx.fillText(letter, x, y);
  }

  line(fromX, fromY, toX, toY) {
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
  }

  circle() {
    this.ctx.beginPath();
    this.ctx.arc(300, 250, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}
