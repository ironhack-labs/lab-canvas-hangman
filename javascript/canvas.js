class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.context.lineWidth = 4;
    let x = 250;
    let y = 750;

    this.context.beginPath();
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(x, y);
      this.context.lineTo(x + 50, y);
      x += 70;
    }
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    this.context.font = "30px Verdana";
    this.context.fillText(this.secretWord[index].toUpperCase(), 265 + (70 * index), 735);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "30px Verdana";
    if (errorsLeft > 0) {
      this.context.fillText(letter.toUpperCase(), 600 + (50 * errorsLeft), 300);
    }
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath()
        this.context.moveTo(100, 750);
        this.context.lineTo(150, 700);
        this.context.stroke();
        break;
      case 8:
        this.context.lineTo(200, 750);
        this.context.stroke();
        break;
      case 7:
        this.context.closePath();
        this.context.stroke();
        break;
      case 6:
        this.context.moveTo(150, 700);
        this.context.lineTo(150, 100);
        this.context.stroke();
        break;
      case 5:
        this.context.lineTo(500, 100);
        this.context.stroke();
        break;
      case 4:
        this.context.lineTo(500, 150);
        this.context.stroke();
        break;
      case 3:
        this.context.moveTo(500, 200);
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(500, 200, 50, 0, 2 * Math.PI);
        this.context.stroke();
        break;
      case 2:
        this.context.moveTo(500, 250);
        this.context.lineTo(500, 450);
        this.context.stroke();
        break;
      case 1:
        this.context.lineTo(400, 550);
        this.context.stroke();
        break;
      case 0:
        this.context.moveTo(500, 450);
        this.context.lineTo(600, 550);
        this.context.closePath();
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    let img = new Image();
    img.src = './images/gameover.png';
    img.onload = () => {
      this.context.drawImage(img, 350, 250, img.width, img.height);
    }
  }

  winner() {
    let img = new Image();
    img.src = './images/awesome.png';
    img.onload = () => {
      this.context.drawImage(img, 150, 150, img.width, img.height);
    }
  }
}