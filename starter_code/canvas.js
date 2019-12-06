class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.x = 0;
    this.y = 0;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo((this.x = 250), (this.y = 500));
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.lineTo((this.x += 25), this.y);
      this.ctx.moveTo((this.x += 25), this.y);
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  writeCorrectLetter(index) {
    this.ctx.beginPath();
    this.x =250;
    this.y = 490;
    this.ctx.font = "20px serif";
    for (let i = 0; i < this.secretWord.length; i++) {
      if (index === this.secretWord[i]){
        this.ctx.fillText(index,this.x,this.y);
      }
     this.x +=50;
    }
    this.ctx.closePath();
  }

  writeWrongLetter(letter, errorsLeft) {
    console.log(letter);
    console.log(errorsLeft);
    this.ctx.beginPath();
    this.x = 700;
    this.y = 300;
    this.ctx.font = "20px serif";
    this.ctx.fillText(letter,this.x,this.y);
    this.drawHangman(errorsLeft);
  }

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
