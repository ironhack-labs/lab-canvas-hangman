class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.lineXStart = 300;
    this.lineYStart = 400;
    this.lineGap = 30;
    this.lineWidth = 20;
  }

  createBoard() {
    const canvas = document.getElementById('hangman');
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(this.lineXStart + this.lineGap * i, this.lineYStart);
      this.context.lineTo(
        this.lineXStart + this.lineGap * i + this.lineWidth,
        this.lineYStart
      );
      this.context.closePath();
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    this.context.fillStyle = '#1c1919';
    this.context.font = '20px Helvetica';
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[index] === this.secretWord[i]) {
        this.context.fillText(
          this.secretWord[i].toUpperCase(),
          this.lineXStart + this.lineGap * i,
          this.lineYStart - 10
        );
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.fillStyle = '#1c1919';
    this.context.font = '20px Helvetica';
    if (!this.secretWord.includes(letter) && errorsLeft >= 0) {
      this.context.fillText(
        letter.toUpperCase(),
        this.lineXStart + 100 + this.lineGap * errorsLeft,
        this.lineYStart - 100
      );
    }
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 10:
      case 9:
        this.context.beginPath();
        this.context.moveTo(240, this.lineYStart);
        this.context.lineTo(120, this.lineYStart);
        this.context.lineTo(180, 350);
        this.context.closePath();
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(180, 350);
        this.context.lineTo(180, 80);
        this.context.stroke();
        break;
      case 7:
        this.context.lineTo(360, 80);
        this.context.stroke();
        break;
      case 6:
        this.context.lineTo(360, 120);
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();
        this.context.arc(360, 150, 30, 0, 2 * Math.PI);
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(360, 180);
        this.context.lineTo(360, 280);
        this.context.closePath();
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(360, 280);
        this.context.lineTo(400, 320);
        this.context.closePath();
        this.context.stroke();
        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(360, 280);
        this.context.lineTo(320, 320);
        this.context.closePath();
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(360, 180);
        this.context.lineTo(320, 220);
        this.context.closePath();
        this.context.stroke();
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(360, 180);
        this.context.lineTo(400, 220);
        this.context.closePath();
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    const gameOverImg = new Image();
    gameOverImg.src = '../images/gameover.png';
    this.context.drawImage(gameOverImg, 100, 100, 100, 100);
    console.log('this works');
  }

  winner() {
    // ... your code goes here
  }
}
