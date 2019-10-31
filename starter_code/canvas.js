
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    this.letterPosition = []
  }
  }

  createBoard() {
    document.getElementById('starting').style.display = 'none'
    document.getElementById('game').style.display = ''
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawHangman()
    this.ctx.strokeStyle = 'black'
    this.ctx.font = '50px '
  }

  drawLines() {
    let position = 60
    this.letterPosition.push(position)
    this.ctx.moveTo(60, this.canvas.height - 20)
    console.log(this.secretWord)
    for (let i = 0; i < this.secretWord.length; i++) {
      position += 50
      this.ctx.lineTo(position, this.canvas.height - 20)
      this.ctx.stroke()
      position += 10
      this.ctx.moveTo(position, this.canvas.height - 20)
      this.letterPosition.push(position)
    }
  }

  writeCorrectLetter(letter) {
    }

    writeWrongLetter(letter, timesLeft) {
      this.ctx.fillText(letter, this.canvas.width - 50, this.canvas.height - 60 * timesLeft)
    }

    drawHangman() {
      console.log('shdsa')
      const {
        ctx,
        canvas: { height }
      } = this
      ctx.beginPath()
      ctx.moveTo(0, height - 150)
      ctx.lineTo(200, height - 150)
    ctx.lineTo(100, height - 260)
    ctx.lineTo(0, height - 150)
    ctx.moveTo(100, height - 260)
    ctx.lineTo(100, 100)
    ctx.lineTo(350, 100)
    ctx.lineTo(350, 150)
    ctx.moveTo(400, 200)
    ctx.arc(350, 200, 50, 0, Math.PI * 2)
    ctx.moveTo(350, 250)
    ctx.lineTo(350, 450)
    ctx.lineTo(280, 550)
    ctx.moveTo(350, 450)
    ctx.lineTo(420, 550)
    ctx.stroke()
  }
  gameOver() {
    
    }
  

  winner() {
   
    }
  