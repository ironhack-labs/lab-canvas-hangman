class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();  
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(200, 200);
    this.context..stroke();
    }
  }

  writeCorrectLetter(index) {
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(errorsLeft) {
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
