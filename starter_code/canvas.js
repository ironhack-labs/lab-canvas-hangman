class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.numberOfLetters = secretWord.length;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 500, 500);
  }

  drawLines() {
    let startX = 25;
    let linesWidth = 60;
    let endX = startX + linesWidth;
    let fixedY = 25;
    let space = 10;

    for (let i = 0; i < this.numberOfLetters; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(startX, fixedY);
      this.ctx.lineTo(startX + linesWidth, fixedY);
      this.ctx.stroke();
      startX = endX + space;
      endX = startX + linesWidth;
    }
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
