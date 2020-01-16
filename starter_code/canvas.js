
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
      this.ctx.moveTo(300 + 100 * i, 700)
      this.ctx.strokeStyle = 'purple'
      this.ctx.lineWidth = 3
      this.ctx.lineTo((300 + 100 * i) + 75, 700)
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
        this.ctx.fillText(letter, 305 + 100 * i, 690)
      }
    }
    this.ctx.closePath()
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.beginPath()
    this.ctx.font = '50px Monospace'
    for (let i = 0; i < letter.length; i++) {
      this.ctx.fillStyle = 'purple'
      this.ctx.fillText(letter[i], 650 + 50 * i, 400)
    }
    this.drawHangman(errorsLeft)
    this.ctx.closePath()
  }

  drawHangman(shape) {
    switch (shape) {
      case 9: // base
        this.ctx.beginPath()
        this.ctx.fillStyle = 'purple'
        this.ctx.moveTo(100,600)
        this.ctx.lineTo(200,600)
        this.ctx.lineTo(150,550)
        this.ctx.lineTo(100,600)
        this.ctx.lineWidth = 5
        this.ctx.fill()
        this.ctx.closePath()
        break
      case 8: // poste
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.lineCap = 'round'
        this.ctx.moveTo(150,550)
        this.ctx.lineTo(150,100)
        this.ctx.stroke()
        this.ctx.closePath()
        break
      case 7:
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.lineCap = 'round'
        this.ctx.moveTo(150,100)
        this.ctx.lineTo(500,100)
        this.ctx.stroke()
        this.ctx.closePath()
        break
      case 6:
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.lineCap = 'round'
        this.ctx.moveTo(500,100)
        this.ctx.lineTo(500,150)
        this.ctx.stroke()
        this.ctx.closePath()
        break;
      case 5:
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.arc(500, 200, 50, 0, Math.PI * 2,true)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.arc(480, 220, 5, 0, Math.PI * 2,true)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.arc(520, 220, 5, 0, Math.PI * 2,true)
        this.ctx.stroke()
        this.ctx.closePath()

        break
      case 4:
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.moveTo(500,250)
        this.ctx.lineTo(500,400)
        this.ctx.stroke()
        this.ctx.closePath()
        break;
      case 3:
        
        this.ctx.beginPath()
        this.ctx.moveTo(500,400)
        this.ctx.lineTo(450,500)
        this.ctx.stroke()
        this.ctx.closePath()
        break
      case 2:
          
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.moveTo(500,400)
        this.ctx.lineTo(550,500)
        this.ctx.stroke()
        this.ctx.closePath()
        break
      case 1:
        this.ctx.beginPath()
        this.ctx.moveTo(500,275)
        this.ctx.lineTo(450,350)
        this.ctx.stroke()
        this.ctx.closePath()
        break;
    }
  }

  gameOver() {

  }

  winner() {

  }

}