const lineStart = 250;
const lineLength = 35;
const spacing = 15;

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // this.context.strokeStyle = "black";
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(lineStart + i * (lineLength + spacing), 700);
      this.context.lineTo(
        lineStart + lineLength + i * (lineLength + spacing),
        700
      );
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    this.context.font = "24px Arial";
    this.context.textAlign = "center";
    this.context.fillText(
      this.secretWord[index].toUpperCase(),
      lineStart + index * (lineLength + spacing) + lineLength / 2,
      680
    );
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "24px Arial";
    this.context.textAlign = "center";
    this.context.fillText(
      letter.toUpperCase(),
      600 + (10 - errorsLeft) * (lineLength + spacing) + lineLength / 2,
      200
    );
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(100, 700);
        this.context.lineTo(200, 700);
        this.context.lineTo(150, 650);
        this.context.lineTo(100, 700);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(150, 650);
        this.context.lineTo(150, 150);
        this.context.stroke();
        this.context.closePath();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(150, 150);
        this.context.lineTo(500, 150);
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(500, 150);
        this.context.lineTo(500, 200);
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.arc(
          500,
          250,
          50,
          (Math.PI / 180) * 0,
          (Math.PI / 180) * 360
        );
        this.context.stroke();
        this.context.closePath();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(500, 300);
        this.context.lineTo(500, 500);
        this.context.stroke();
        this.context.closePath();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(500, 500);
        this.context.lineTo(430, 570);
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(500, 500);
        this.context.lineTo(570, 570);
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(500, 370);
        this.context.lineTo(450, 420);
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(500, 370);
        this.context.lineTo(550, 420);
        this.context.stroke();
        this.context.closePath();
        break;
      default:
        console.log("Error!");
    }
  }

  gameOver() {
    console.log("Game over!");
    const gameOverImage = new Image();
    gameOverImage.src = "./images/gameover.png";
    this.context.drawImage(gameOverImage, 100, 100, 500, 500);
  }

  winner() {
    console.log("Winner!");
    const winnerImage = new Image();
    winnerImage.src = "./images/awesome.png";
    this.context.drawImage(winnerImage, 100, 100, 500, 500);
  }
}
