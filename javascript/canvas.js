class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord= secretWord;

  }

  createBoard() {
    this.ctx.beginPath();
    this.ctx.clearRect(0,0, 1200, 800);
    this.drawLines();
    }

  drawLines() {
    
    this.ctx.lineWidth = 3;
  }

  writeCorrectLetter(index) {
    this.ctx.font = "20px Arial"
    this.ctx.fillText
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    this.ctx.beginPath();
    this.ctx.moveTo
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
