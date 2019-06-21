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
    let loop = this.secretWord.length;
    for (let i = 0; i < loop; i += 1) {
      if (this.secretWord[i] === index.key.toUpperCase()) {
        let drawLetter = this.secretWord[i]
        this.ctx.font = "60px Georgia";
        this.ctx.fillText(drawLetter, 310 + i * 100, 740);
      }
    }
  }
  writeWrongLetter(letter, errorsleft) {
    let x = letter.join('-').toUpperCase()
    this.ctx.font = "30px Georgia";
    this.ctx.fillText(x, 600, 440);
    this.ctx.fillText('Pressed Letters', 700, 400);

    this.ctx.font = "40px Georgia";
    this.ctx.fillText('Errors Left:', 700, 300);
    this.ctx.clearRect(900, 100, 400, 200);
    this.ctx.fillText(errorsleft, 900, 300);
  }

  drawHangman(shape) {

  }
  gameOver() {

    var img = new Image();
    img.onload = function () {
      context.drawImage(img, 75, 55, 150, 110);
    }
    img.src = "images/gameover.png"

  }
  winner() {

  }
}
