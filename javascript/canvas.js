class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    let canvasElement = document.querySelector("#hangman");
    this.context.clearRect(0, 0, canvasElement.width, canvasElement.height);

    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    this.context.fillRect(50, 50, 50, 50);
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
