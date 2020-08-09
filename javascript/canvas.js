class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.context.strokeStyle = 'black';
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.drawLines(150, 600, 225, 650);
    this.drawLines(225, 650, 75, 650);
    this.drawLines(75, 650, 150, 600);

    this.drawLines(150, 600, 150, 200);
  }

  drawLines(x1, y1, x2, y2) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
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
