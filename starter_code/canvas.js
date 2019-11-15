
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearReact(0,0,1200,800);
    this.ctx.lineWidth = 5;
  }

  drawLines() {
    let lines = this.secretWord.length * 100 + 100;
    for (let i = 100; i < lines; i += 100) {
      ctx.beginPath()
      ctx.moveTo(i, 750);
      ctx.lineTo(i + 50, 750)
      ctx.stroke()
    }
  }

  writeCorrectLetter(index) {
    
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}
