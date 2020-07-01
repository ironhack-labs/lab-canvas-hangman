class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    let canvas = document.getElementById('hangman');
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines()
  }

  drawLines() {
    let lineStartX = 80 
    let lineStartY= 600; 
    let lineEndX = 160;
    let lineEndY = lineStartY;

    [...this.secretWord].forEach(letter => {
      this.context.beginPath();
      this.context.moveTo(lineStartX, lineStartY);
      this.context.lineTo(lineEndX, lineEndY);
      this.context.stroke();
      this.context.closePath();
      lineStartX += 100;
      lineEndX += 100;
  })
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
