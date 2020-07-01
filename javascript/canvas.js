class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.cWidth = this.canvas.width;
    this.cHeight = this.canvas.height;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.cWidth, this.cHeight);
    this.drawLines();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(300 + (i * 75), this.cHeight - 50);
      this.context.lineTo(350 + (i * 75), this.cHeight - 50);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(letter) {
    this.context.font = '50px monospace';
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) {
        this.context.fillText(this.secretWord[i].toUpperCase(), 310 + (i * 75), this.cHeight - 55);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '50px monospace';
    this.context.fillText(letter.toUpperCase(), 550 - ((errorsLeft - 10) * 60), this.cHeight - 600);
  }

  drawHangman(errorsLeft) {
    //triangle base
    if (errorsLeft < 10) {
      this.context.beginPath();
      this.context.moveTo(50, this.cHeight - 50);
      this.context.lineTo(250, this.cHeight - 50);
      this.context.lineTo(150, this.cHeight - 150);
      this.context.fill();
    }

    //pole
    if (errorsLeft < 9) {
      this.context.beginPath();
      this.context.moveTo(150, this.cHeight - 100);
      this.context.lineTo(150, this.cHeight - 750);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //overhang
    if (errorsLeft < 8) {
      this.context.beginPath();
      this.context.moveTo(148, this.cHeight - 750);
      this.context.lineTo(500, this.cHeight - 750);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //rope
    if (errorsLeft < 7) {
      this.context.beginPath();
      this.context.moveTo(498, this.cHeight - 750);
      this.context.lineTo(500, this.cHeight - 650);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //head
    if (errorsLeft < 6) {
      this.context.beginPath();
      this.context.arc(500, this.cHeight - 600, 50, 0, Math.PI * 2);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //body
    if (errorsLeft < 5) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 550);
      this.context.lineTo(500, this.cHeight - 400);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //left leg
    if (errorsLeft < 4) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 400);
      this.context.lineTo(450, this.cHeight - 300);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //right leg
    if (errorsLeft < 3) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 400);
      this.context.lineTo(550, this.cHeight - 300);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //left arm
    if (errorsLeft < 2) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 500);
      this.context.lineTo(450, this.cHeight - 400);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

    //right arm
    if (errorsLeft < 1) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 500);
      this.context.lineTo(550, this.cHeight - 400);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }
  }

  gameOver() {
    const imgGameOver = new Image();
    imgGameOver.src = './images/gameover.png'
    this.context.drawImage(imgGameOver, 400, 200);
  }

  winner() {
    const imgWinner = new Image();
    imgWinner.src = './images/awesome.png'
    this.context.drawImage(imgWinner, 200, 0);
  }
}