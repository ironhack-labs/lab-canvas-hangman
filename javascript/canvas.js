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
    //should have a loop to compute lines needed considering the secretWord length

    this.context.beginPath();
    this.context.moveTo(250, 790);
    this.context.lineTo(300, 790);
    this.context.moveTo(330, 790);
    this.context.lineTo(380, 790);
    this.context.moveTo(410, 790);
    this.context.lineTo(460, 790);
    this.context.moveTo(490, 790);
    this.context.lineTo(540, 790);
    this.context.moveTo(570, 790);
    this.context.lineTo(620, 790);
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
