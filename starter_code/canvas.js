class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.posX = 200;
    this.posY = 300;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    console.log(this.secretWord);
    let space = 10;
    let line = 50;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.posX += line + space;
      this.ctx.moveTo(this.posX + space, this.posY);
      this.ctx.lineTo(this.posX + line, this.posY);
      this.ctx.stroke();
    }
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
