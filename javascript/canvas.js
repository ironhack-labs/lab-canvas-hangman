class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");

    this.width = this.context.width;
    this.height = this.context.height;

    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawLines();
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
