class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }
  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800)
    this.ctx.lineWidth = 4;
  }
  drawLines() {
    let lines = this.secretWord.length * 100 + 300
    for (let i = 300; i < lines; i += 100) {
      this.ctx.beginPath()
      this.ctx.moveTo(i, 750);
      this.ctx.lineTo(i + 70, 750)
      this.ctx.stroke()
    }
  }
  writeCorrectLetter(index) {
    let wordIndex = this.secretWord.indexOf(index.key.toUpperCase());
    console.log(wordIndex)
    let drawLetter = this.secretWord[wordIndex]
    this.ctx.font = "60px Georgia";
    this.ctx.fillText(drawLetter, 310 + wordIndex * 100, 740);
  }
  writeWrongLetter(letter, errorsleft) {
    this.ctx.font = "60px Georgia";
    this.ctx.fillText(letter, 600 , 440);

    this.ctx.font = "40px Georgia";
    this.ctx.fillText('Errors Left:', 700, 300);
    this.ctx.clearRect(900, 100, 400, 400);
    this.ctx.fillText(errorsleft, 900, 300);
  }

  drawHangman(shape) {

  }
  gameOver() {
    ctx.drawImage(url(images/gameover.png), 10, 10);
  }
  winner() {

  }
}
