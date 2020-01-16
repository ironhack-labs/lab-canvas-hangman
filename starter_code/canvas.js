
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800)
    this.drawLines()
  }

  drawLines() {

    this.ctx.beginPath()

    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.moveTo(300 + 100 * i, 600)
      this.ctx.strokeStyle = 'purple'
      this.ctx.lineWidth = 3
      this.ctx.lineTo((300 + 100 * i) + 75,600)
      this.ctx.stroke()
    }

    this.ctx.closePath()

  }

  writeCorrectLetter(letter) {  // Cambie index por letter

    this.ctx.beginPath()
    this.ctx.font = '100px Monospace'
    for (let i = 0; i < this.secretWord.length; i++) { // Para cada letra en secretWord.
      if (letter == this.secretWord[i]) { // ¿Coincide la letra y el índice de secretWord?
        this.ctx.fillStyle = 'purple'
        this.ctx.fillText(letter, 305 + 100 * i, 590)
      }
    }
    this.ctx.closePath()
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.beginPath()
    this.ctx.font = '50px Monospace'
    for (let i = 0; i < letter.length; i++) {
      this.ctx.fillStyle = 'purple'
      this.ctx.fillText(letter[i], 600 + 50 * i, 300)
    }
    this.drawHangman(errorsLeft)
    this.ctx.closePath()
  }

  drawHangman(shape) {
    switch (shape) {
      case 9: // base
        this.ctx.beginPath();
        this.ctx.fillStyle = 'purple'
        this.ctx.moveTo(100,600);
        this.ctx.lineTo(200,600);
        this.ctx.lineTo(150,550);
        this.ctx.lineTo(100,600);
        this.ctx.lineWidth = 5;
        this.ctx.fill();
        this.ctx.closePath();
        break;
      case 8: // poste
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round'
        this.ctx.moveTo(150,550);
        this.ctx.lineTo(150,100);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 7:
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round'
        this.ctx.moveTo(150,100);
        this.ctx.lineTo(500,100);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
    }
  }

  gameOver() {

  }

  winner() {

  }

}