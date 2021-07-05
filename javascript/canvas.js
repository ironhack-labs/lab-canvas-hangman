class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d')
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
    return this.drawLines()
  }

  drawLines() {
    const nbLines = this.secretWord.length

    for(let i = 0 ; i < nbLines ; i++){
      this.context.beginPath()
      this.context.moveTo(300 + (80 * i), this.canvas.height - 100)
      this.context.lineTo(350 + (80 * i), this.canvas.height - 100)
      this.context.strokeStyle = "black"
      this.context.stroke()
      this.context.closePath()
    }

    this.writeCorrectLetter()
  }

  writeCorrectLetter(index) {
    const letter = this.secretWord.toUpperCase()[index]

    this.context.font = '48px sans-serif';
    this.context.fillStyle = 'black'
    this.context.fillText(letter, 310 + (80 * index), this.canvas.height - 120)

  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.clearRect(this.canvas.width - 400, 120, 400, -100)
    this.context.fillStyle = 'black'
    this.context.font = '48px sans-serif';
    this.context.fillText(`Errors left : ${errorsLeft}`, this.canvas.width - 300, 120)
    this.context.fillStyle = 'orange'
    this.context.fillText(letter, this.canvas.width - 55, 70 + 60 * (11 - errorsLeft))
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath()
        this.context.moveTo(100, this.canvas.height - 100)
        this.context.lineTo(200, this.canvas.height - 100)
        this.context.lineTo(150, this.canvas.height - 150)
        this.context.lineTo(100, this.canvas.height - 100)
        this.context.stroke()
        this.context.closePath()
        break
      case 8 :
        this.context.beginPath()
        this.context.moveTo(150, this.canvas.height - 150)
        this.context.lineTo(150, this.canvas.height - 600)
        this.context.stroke()
        this.context.closePath()
        break
      case 7 :
        this.context.beginPath()
        this.context.moveTo(150, this.canvas.height - 600)
        this.context.lineTo(450, this.canvas.height - 600)
        this.context.stroke()
        this.context.closePath()
        break
      case 6 :
        this.context.beginPath()
        this.context.moveTo(450, this.canvas.height - 600)
        this.context.lineTo(450, this.canvas.height - 500)
        this.context.stroke()
        this.context.closePath()
        break
      case 5 :
        this.context.beginPath()
        this.context.arc(450, this.canvas.height - 480, 20, 0, 2*Math.PI)
        this.context.stroke()
        this.context.closePath()
        break
      case 4 :
        this.context.beginPath()
        this.context.moveTo(450, this.canvas.height - 460)
        this.context.lineTo(450, this.canvas.height - 400)
        this.context.stroke()
        this.context.closePath()
        break 
      case 3 :
        this.context.beginPath()
        this.context.moveTo(450, this.canvas.height - 400)
        this.context.lineTo(400, this.canvas.height - 300)
        this.context.stroke()
        this.context.closePath()
        break 
      case 2 :
        this.context.beginPath()
        this.context.moveTo(450, this.canvas.height - 400)
        this.context.lineTo(500, this.canvas.height - 300)
        this.context.stroke()
        this.context.closePath()
        break 
      case 1 :
        this.context.beginPath()
        this.context.moveTo(450, this.canvas.height - 440)
        this.context.lineTo(400, this.canvas.height - 450)
        this.context.stroke()
        this.context.closePath()
        break 
      case 0 :
        this.context.beginPath()
        this.context.moveTo(450, this.canvas.height - 440)
        this.context.lineTo(500, this.canvas.height - 450)
        this.context.stroke()
        this.context.closePath()
        break 
    }
  }

  gameOver() {
    let img = new Image(300, 300)
    img.src = '../images/gameover.png'
    img.addEventListener('load', () => this.context.drawImage(img, 300, 300))
    
  }

  winner() {
    let img = new Image(300, 300)
    img.src = '../images/awesome.png'
    img.addEventListener('load', () => this.context.drawImage(img, 0, 0))
  }
}
