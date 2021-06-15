class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    // this.context.fillRect(400,200, 200,200);
    this.drawLines();
  }

  drawLines() {
    this.context.lineWidth = 2;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(400 + (i*50),400);
      this.context.lineTo(420 + (i*50),400);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    
  }

  writeWrongLetter(letter, errorsLeft) {
      this.canvas.fillText(letter, 600 + (errorsLeft*50), 100 );
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
