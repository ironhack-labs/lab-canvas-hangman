
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.index = [];
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 3;
  }

  drawLines() {
    let x = 300;
    let y = 600;
    let number = this.secretWord.length;
    this.ctx.font = "25px Space";
    this.ctx.fillText(`Intentos Restantes: `, 900, 50);
    for(let i = 0; i < number; i++){
      this.ctx.fillRect(x, y, 50, 10);
      x = x + 80;
      this.index.push(x - 70);
    }
  }
  

  writeCorrectLetter(index) {
    this.ctx.font = "25px Space";
    this.ctx.fillText(letter.toUpperCase(), this.errorsLeft[i], 580);
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
