class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;

  }

  createBoard() {
    this.context.clearRect(0, 0, 1200,800);
  }

  drawLines() {
    this.context.lineWidth = 4;
    this.context.beginPath();
    let x = 300;
    let y = 700;
    for (let i = 0; i < this.secretWord.length ; i++) {
      this.context.moveTo(x, y);
      this.context.lineTo(x + 50, y);
      x += 55;
    }
    this.context.closePath();
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    this.context.beginPath();
    this.context.font = "30px sans-serif";
    this.context.fillText(this.secretWord[index].toUpperCase(), 300 + (55 * index), 690);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "30px sans-serif";
    this.context.fillText(letter.toUpperCase(), 950, 70 * errorsLeft);
  }

  drawHangman(errorsLeft) {
    this.context.lineWidth = 3;
    if (errorsLeft == 9) {
      this.context.beginPath();
      this.context.moveTo(100, 700);
      this.context.lineTo(200, 700);
      this.context.lineTo(150, 650);
      this.context.closePath();
      this.context.stroke();
    }
    else if (errorsLeft == 8) {
      this.context.beginPath();
      this.context.moveTo(150, 650);
      this.context.lineTo(150, 250);
      this.context.stroke();
    }
    else if (errorsLeft == 7) {
      this.context.beginPath();
      this.context.moveTo(150, 250);
      this.context.lineTo(300, 250);
      this.context.stroke();
    }

    else if (errorsLeft == 6) {
      this.context.beginPath();
      this.context.moveTo(300, 250);
      this.context.lineTo(300, 300);
      this.context.stroke();
    }
    else if (errorsLeft == 5) {
      this.context.beginPath();
      this.context.arc(300, 330, 30, 0, Math.PI * 2);
      this.context.closePath()
      this.context.stroke();
    }
    else if (errorsLeft == 4) {
      this.context.beginPath();
      this.context.moveTo(300, 360);
      this.context.lineTo(300, 520);
      this.context.stroke();
    }
    else if (errorsLeft == 3) {
      this.context.beginPath();
      this.context.moveTo(300, 520);
      this.context.lineTo(350, 580);
      this.context.stroke();
    }
    else if (errorsLeft == 2) {
      this.context.beginPath();
      this.context.moveTo(300, 520);
      this.context.lineTo(250, 580);
      this.context.stroke();
    }
    else if (errorsLeft == 1) {
      this.context.beginPath();
      this.context.moveTo(300, 400);
      this.context.lineTo(250, 470);
      this.context.stroke();
    }
    else if (errorsLeft == 0) {
      this.context.beginPath();
      this.context.moveTo(300, 400);
      this.context.lineTo(350, 470);
      this.context.stroke();
    }
  }

  gameOver() {
    gameOverImg = new Image();
    gameOverImg.src = '/images/gameover.png';
    img.onload = () => {
      this.context.drawImage(gameOverImg, 300, 550, 700, 490);
    }
  }

  winner() {
    winnerImg = new Image();
    winnerImg.src = '/images/awesome.png';
    img.onload = () => {
      this.context.drawImage(winnerImg, 300, 550, 700, 490);
    }
  }

}
