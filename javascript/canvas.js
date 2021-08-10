class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.xWrongLetterCoord = 700;
    this.context.font = "bold 48px serif";
    this.context.fillStyle = "black";
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.context.beginPath();
    this.context.moveTo(100, 750);
    this.context.lineTo(200, 750);
    this.context.lineTo(150, 700);
    this.context.closePath();
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(150, 700);
    this.context.lineTo(150, 50);
    this.context.lineTo(550, 50);
    this.context.lineTo(550, 100);
    this.context.stroke();
  }

  drawLines() {
    this.context.lineWidth = 2;
    let x = 200;
    for (let i in this.secretWord) {
      this.context.beginPath();
      this.context.moveTo(x, 700);
      this.context.lineTo(x + 40, 700);
      this.context.stroke();
      x += 60;
    }
  }

  writeCorrectLetter(letter) {
    let xCoord = 200;
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) {
        this.context.beginPath();
        this.context.fillText(`${letter.toUpperCase()}`, xCoord, 695);
        this.context.stroke();
      }
      xCoord += 60;
    }
  }

  writeWrongLetter(letter) {
    this.context.beginPath();
    this.context.fillText(
      `${letter.toUpperCase()}`,
      this.xWrongLetterCoord,
      500
    );
    this.context.stroke();
    this.xWrongLetterCoord += 50;
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 0:
        this.context.beginPath();
        this.context.moveTo(450, 200);
        this.context.lineTo(650, 200);
        this.context.stroke();
        this.gameOver();
        break;
      case 1:
        this.context.beginPath();
        this.context.arc(550, 175, 10, 0, Math.PI, true);
        this.context.stroke();
        break;
      case 2:
        this.context.beginPath();
        this.context.arc(575, 135, 10, 0, Math.PI * 2);
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.arc(525, 125, 5, 0, Math.PI * 2);
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(550, 250);
        this.context.lineTo(625, 325);
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();
        this.context.moveTo(550, 250);
        this.context.lineTo(475, 325);
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();
        this.context.moveTo(550, 250);
        this.context.lineTo(475, 325);
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(550, 500);
        this.context.lineTo(625, 575);
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(550, 500);
        this.context.lineTo(475, 575);
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(550, 200);
        this.context.lineTo(550, 500);
        this.context.stroke();
        break;
      case 9:
        this.context.beginPath();
        this.context.arc(550, 150, 50, 0, Math.PI * 2);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    this.context.fillStyle = "red";
    this.context.font = "bold 100px serif";
    this.context.beginPath();
    this.context.fillText("YOU LOSE!", 650, 400);
    this.context.stroke();
  }

  winner() {
    this.context.fillStyle = "red";
    this.context.font = "bold 100px serif";
    this.context.beginPath();
    this.context.fillText("YOU WON!", 650, 400);
    this.context.stroke();
  }
}
