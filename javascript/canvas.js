/* eslint-disable default-case */
/* eslint-disable no-plusplus */
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord.toLowerCase();
    this.context.font = '30px Arial';
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.height+500, this.canvas.width+500);

    // Hang
    this.drawLines(150, 700, 230, 700);
    this.drawLines(230, 700, 190, 650);
    this.drawLines(190, 650, 150, 700);
    this.drawLines(190, 650, 190, 350);
    this.drawLines(190, 350, 390, 350);
    this.drawLines(390, 350, 390, 400);

    // Secret Letters
    for (let i = 0; i < this.secretWord.length; i++) {
      this.drawLines(300 + i * 50, 700, 330 + i * 50, 700);
    }
    this.context.closePath();
  }

  drawLines(x1, y1, x2, y2) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (index === this.secretWord[i]) {
        this.context.fillText(index.toUpperCase(), 305 + i * 50, 695);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    let errors = 10 - errorsLeft;
    this.context.fillText(letter.toUpperCase(), 200 + errors * 50, 300);
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.arc(390, 430, 30, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.drawLines(390, 460, 390, 560);
        break;
      case 7:
        this.drawLines(390, 560, 360, 610);
        break;
      case 6:
        this.drawLines(390, 560, 420, 610);
        break;
      case 5: {
        this.drawLines(390, 500, 420, 470);
        break;
      }
      case 4: {
        this.drawLines(390, 500, 360, 470);
        break;
      }
      case 3: {
        this.drawLines(360, 610, 340, 610);
        break;
      }
      case 2: {
        this.drawLines(420, 610, 440, 610);
        break;
      }
      case 1: {
        this.drawLines(420, 470, 430, 470);
        break;
      }
      case 0: {
        this.drawLines(360, 470, 350, 470);
        break;
      }
    }
  }

  gameOver() {
    const loseImage = new Image();
    loseImage.src = './images/gameover.png';
    loseImage.onload = () => {
      this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
      this.context.drawImage(loseImage, 215, 150);
    }
  }

  winner() {
    const winImage = new Image();
    winImage.src = './images/awesome.png';
    winImage.onload = () => {
      this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
      this.context.drawImage(winImage, 215, 150);
    }
  }
}
