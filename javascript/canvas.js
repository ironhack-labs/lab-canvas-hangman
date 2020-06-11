class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    context.clearRect(0, 0, 800, 1200);
    beginPath(this.drawLines());
    // ... your code goes here
  }

  drawLines() {
    // ... your code goes here
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
