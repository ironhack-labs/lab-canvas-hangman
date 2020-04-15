class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    let linePosition = 25;
    let lineLength = 25;

    this.context.beginPath();
    this.context.strokeStyle = "black";


    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(linePosition, 25);
      this.context.lineTo(linePosition + 25, lineLength);
      linePosition += 50
    }

    this.context.stroke();
  }

  writeCorrectLetter(index) {
    let letterPosition = 25

    this.context.font = "36px sans-serif"
    this.context.moveTo(letterPosition, 25)
    this.context.fillText(index, 25, 25)
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