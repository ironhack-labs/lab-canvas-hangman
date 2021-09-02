class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.gameOverImg = new Image();
    this.gameOverImg.src = "../images/gameover.png";
    this.winnerImg = new Image();
    this.winnerImg.src = "../images/awesome.png";
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for (const key in this.secretWord) {
      this.context.beginPath();
      this.context.moveTo(100 * key, 800);
      this.context.lineTo(100 * key + 80, 800);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = "60px Arial";
    index.forEach((element) => {
      this.context.fillText(`${this.secretWord[element].toUpperCase()}`, 100 * element + 25, 780);
    });
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 100);
    if (errorsLeft >= 0) this.context.font = "30px Arial";
    this.context.fillText(letter, 0, 100);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(0, 700);
        this.context.lineTo(450, 700);
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(100, 700);
        this.context.lineTo(100, 250);
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(100, 250);
        this.context.lineTo(300, 250);
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(300, 250);
        this.context.lineTo(300, 400);
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();
        this.context.arc(300, 440, 40, 0, 2 * Math.PI);
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(300, 480);
        this.context.lineTo(300, 620);
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(300, 500);
        this.context.lineTo(250, 540);
        this.context.stroke();

        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(300, 500);
        this.context.lineTo(350, 540);
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(300, 620);
        this.context.lineTo(260, 660);
        this.context.stroke();

        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(300, 620);
        this.context.lineTo(340, 660);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    // ... your code goes here
    this.context.drawImage(this.gameOverImg, 350, 50, 750, 500);
  }

  winner() {
    // ... your code goes here
    this.context.drawImage(this.winnerImg, 350, 50, 750, 500);
  }
}
