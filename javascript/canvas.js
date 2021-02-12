class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    const ctx = this.context;
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 800, 1200);
    ctx.clearRect(0, 0, 800, 1200);
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(250, 50);
    ctx.stroke();
  }

  drawLines() {
    const ctx = this.context;

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
