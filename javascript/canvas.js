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
    this.context.beginPath();
    this.context.moveTo(240, this.lineYStart);
    this.context.lineTo(120, this.lineYStart);
    this.context.lineTo(180, 350);
    this.context.closePath();
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(180, 350);
    this.context.lineTo(180, 80);
    this.context.lineTo(360, 80);
    this.context.lineTo(360, 120);
    this.context.stroke();

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
    this.context.font = '40px Helvetica';
    const upperCaseLetter = this.secretWord[index].toUpperCase();
    const paddingLeft = 310;
    const axisY = 690;
    this.context.fillText(upperCaseLetter, paddingLeft + index, axisY);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
