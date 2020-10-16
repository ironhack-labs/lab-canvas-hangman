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
    let x = 300;
    let y = 700;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.lineWidth = 5;
      this.context.moveTo(x += 25, y);
      this.context.lineTo(x += 50, y);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.textFill(letter, 500, 500);
    this.context.textFill(errorsLeft, 400, 500);
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();

    switch (errorsLeft) {
      case 10:
        break;

      case 9:
        this.context.moveTo(100, 700);
        this.context.lineTo(250, 700);
        break;

      case 8:
        this.context.moveTo(250, 700);
        this.context.lineTo(60, 600);
        break;

      case 7:
        this.context.moveTo(100, 700);
        this.context.lineTo(60, 600);
        break;

      case 6:
        this.context.moveTo(60, 600);
        this.context.lineTo(60, 300);
        break;

      case 5:
        this.context.moveTo(60, 300);
        this.context.lineTo(400, 300);
        break;

      case 4:
        this.context.moveTo(400, 300);
        this.context.lineTo();
        break;

      case 3:
        this.context.moveTo();
        this.context.lineTo();
        break;

      case 2:
        this.context.moveTo();
        this.context.lineTo();
        break;

      case 1:
        this.context.moveTo();
        this.context.lineTo();
        break;

      case 0:
        this.context.moveTo();
        this.context.lineTo();
        break;
    }
    this.context.stroke();
  }


  // BONUS
  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}