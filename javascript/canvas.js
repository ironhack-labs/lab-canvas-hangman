class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines();
  }

  drawLines() {
    const newLine = this.context.lineTo(70, 0);
    for (let i = 0; i < secretWord.length; i++) {
      newLine;
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
