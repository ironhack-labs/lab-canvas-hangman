class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.ctx.font = "30px Arial";
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.linesWidth = 60;
    this.space = 10;
    this.startX = 450;
    this.fixedY = 450;
  }

  drawLines() {
    let startX = this.startX;
    let linesWidth = this.linesWidth;
    let endX = startX + linesWidth;
    let fixedY = this.fixedY;
    let space = this.space;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(startX, fixedY);
      this.ctx.lineTo(startX + linesWidth, fixedY);
      this.ctx.stroke();
      startX = endX + space;
      endX = startX + linesWidth;
    }
  }

  writeCorrectLetter(index) {
    let posX = this.startX + index * (this.linesWidth + this.space) + 20;
    this.ctx.fillText(
      this.secretWord[index].toUpperCase(),
      posX,
      this.fixedY - 5
    );
  }

  writeWrongLetter(letter, errorsLeft) {
    let pos = (10 - errorsLeft) * 30;
    this.ctx.fillText(letter.toUpperCase(), 500 + pos, 200);
    /*this.ctx.clearRect(500, 300, 500, 5);
    this.ctx.fillText("Errors left: " + errorsLeft, 500, 300);*/
  }

  drawHangman(shape) {}

  //bonus

  gameOver() {}

  winner() {}
}
