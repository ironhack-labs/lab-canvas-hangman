class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
    this.gameover = new Image()
    this.gameover.src = '../images/gameover.png'
    this.gamewin = new Image()
    this.gamewin.src = '../images/awesome.png'
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    let x = 500
    let y = 700
    this.secretWord.split("").forEach(e =>{
      this.context.beginPath()
      this.context.moveTo(x,y)
      this.context.lineTo(x+20,y)
      this.context.strokeStyle = "black"
      this.context.lineWidth = 2
      this.context.stroke()
      this.context.closePath()
      x += 30
    })
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let x = 506
    let y = 680
    this.secretWord.split("").forEach(e =>{
      if(e === index){
        this.context.fillStyle="black"
        this.context.font = '16px Arial'
        this.context.fillText(e.toUpperCase(), x, y)
      }
      x += 30
    }) 
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let x = 700
    let y = 400
    let i = 20 * (10 - errorsLeft)
    if(!this.secretWord.includes(letter)){
      this.context.fillStyle="black"
      this.context.font = '16px Arial'
      this.context.fillText(letter.toUpperCase(), x + i , y)
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft){
      case 9:
        this.context.beginPath()
          this.context.moveTo(350,700)
          this.context.lineTo(450, 700)
          this.context.lineTo(400, 650)
          this.context.lineTo(350, 700)
          this.context.stroke()
        this.context.closePath()
      break
      case 8:
        this.context.beginPath()
          this.context.moveTo(400, 650)
          this.context.lineTo(400, 450)
          this.context.stroke()
        this.context.closePath()
      break
      case 7:
        this.context.beginPath()
          this.context.moveTo(400, 450)
          this.context.lineTo(500, 450)
          this.context.stroke()
        this.context.closePath()
      break
      case 6:
        this.context.beginPath()
          this.context.moveTo(500, 450)
          this.context.lineTo(500, 480)
          this.context.stroke()
        this.context.closePath()
      break
      case 5:
        this.context.beginPath()
          this.context.arc(500, 495, 15, 0, Math.PI * 2)
          this.context.lineWidth = 2
          this.context.stroke()
        this.context.closePath()
      break
      case 4:
        this.context.beginPath()
          this.context.moveTo(500, 510)
          this.context.lineTo(500, 565)
          this.context.stroke()
        this.context.closePath()
      break
      case 3:
        this.context.beginPath()
        this.context.moveTo(470, 520)
        this.context.lineTo(500, 535)
          this.context.stroke()
        this.context.closePath()
      break
      case 2:
        this.context.beginPath()
          this.context.moveTo(500, 535)
          this.context.lineTo(530, 520)
          this.context.stroke()
        this.context.closePath()
      break
      case 1:
        this.context.beginPath()
          this.context.moveTo(500, 565)
          this.context.lineTo(470, 590)
          this.context.stroke()
        this.context.closePath()
      break
      case 0:
        this.context.beginPath()
          this.context.moveTo(500, 565)
          this.context.lineTo(530, 590)
          this.context.stroke()
        this.context.closePath()
      break
    }
  }

  gameOver() {
    // ... your code goes here
    this.gameover.onload = this.drawImage(this.gameover)
    //gameover.addEventListener("load", this.drawImage(gameover)); //otra opción
  }

  drawImage(image){
    this.context.drawImage(image, 200, 150, 400, 300)
  }

  winner() {
    // ... your code goes here
    this.gamewin.onload = this.drawImage(this.gamewin)
  }
}
