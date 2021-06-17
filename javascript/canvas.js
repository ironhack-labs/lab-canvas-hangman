class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = hangman.pickWord();
  }

  createBoard() {
    // ... your code goes here
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this. context.beginPath();
      this.context.moveTo (250 + i * 80, 500);
      this.context.stroke();
    }
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
