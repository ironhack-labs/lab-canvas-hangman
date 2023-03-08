class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(
      0,
      0,
      document.getElementById("hangman").width,
      document.getElementById("hangman").height
    );
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    let i = 0;
    while (i < this.secretWord.length * 2) {
      this.context.moveTo(300 + i * 30, 700);
      i++;
      this.context.lineTo(300 + i * 30, 700);
      i++;
    }
    this.context.stroke();
    this.context.closePath();
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
