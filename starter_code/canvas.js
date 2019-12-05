class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.posX = 400;
    this.posY = 500;
    this.letterPosArray = [];
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
      this.letterPosArray.push(this.posX);
      this.ctx.moveTo(this.posX + space, this.posY);
      this.ctx.lineTo(this.posX + line, this.posY);
      this.ctx.stroke();
    }
  }

  writeCorrectLetter() {
    let letterPos = this.letterPosArray[hangman.index];
    console.log(hangman.key, this.letterPosArray, hangman.index);
    this.ctx.fillText(hangman.key, letterPos, this.posY);
  }

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
