class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    let startX = 450;
    let linesWidth = 60;
    let endX = startX + linesWidth;
    let fixedY = 450;
    let space = 10;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(startX, fixedY);
      this.ctx.lineTo(startX + linesWidth, fixedY);
      this.ctx.stroke();
      startX = endX + space;
      endX = startX + linesWidth;
    }
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {
    let pos = (10 - errorsLeft) * 10;
    this.ctx.fillText(letter, 200 + pos, 200);
  }

  drawHangman(shape) {}

  //bonus

  gameOver() {}

  winner() {}
}
