
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
    for(let i = 300; i < lines; i += 100) {
      this.ctx.beginPath()
      this.ctx.moveTo(i, 750);
      this.ctx.lineTo(i + 70, 750)
      this.ctx.stroke()
    }
  }
  writeCorrectLetter (index) {
    
  }
  writeWrongLetter(letter, errorsleft) {

  }
  drawHangman(shape) {

  }
  gameOver(){

  }
  winner(){

  }
}
