class HangmanCanvas {
  constructor(secretWord) {
    let $canvas = document.querySelector('canvas')
    this.context = $canvas.getContext('2d')
    //this.context = document.getElementById('hangman').getContext('2d');
    this.secretW = secretWord
  }
    


  createBoard() {
    //this.context.clearRect(0,0, this.context.width, this.context.height)
    this.drawLines()
  }

  drawLines() {
    let moveX = 200
    let y = 400
    for(let i = 0; i < this.secretW.length ;i++){
      this.context.beginPath()
      this.context.moveTo(moveX,y)
      this.context.lineTo(moveX+40, y)
      this.context.closePath()
      this.context.stroke()
      moveX+=50
    }      

  }

  writeCorrectLetter(index) {
    let x = 300
    let y = 400

    for(let i = 0; i < this.secretW.length; i++){
      if(this.secretW[i] === index){
        x = x + (i+1) * 45
        this.context.font = '30px Arial'
        this.context.fillText(index,x,y)
        x+=200
      }
    }
    
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 300
    let y = 200
      x += 30 * (10-errorsLeft) 
        this.context.font = '30px Arial'
        this.context.fillText(letter,x,y)

  }

  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case(0):
        this.context.beginPath()
        this.context.moveTo(250,300)
        this.context.lineTo(280, 340)
        this.context.stroke()
        this.context.closePath()
      break;
      case(1):
        this.context.beginPath()
        this.context.moveTo(250,300)
        this.context.lineTo(220, 340)
        this.context.stroke()
        this.context.closePath()
    break;
      break;
      case(2):
        this.context.beginPath()
        this.context.moveTo(250,220)
        this.context.lineTo(220, 190)
        this.context.stroke()
        this.context.closePath()
      break;
      case(3):
        this.context.beginPath()
        this.context.moveTo(250,220)
        this.context.lineTo(280, 190)
        this.context.stroke()
        this.context.closePath()
      break;
      case(4):
        this.context.beginPath()
        this.context.moveTo(250,170)
        this.context.lineTo(250, 300)
        this.context.stroke()
        this.context.closePath()
      break;
      case(5):
        this.context.beginPath()
        this.context.arc(250, 145, 25, 0, 2 * Math.PI);
        this.context.stroke()
        this.context.closePath()
      break;
      case(6):
        this.context.beginPath()
        this.context.moveTo(250,90)
        this.context.lineTo(250, 120)
        this.context.stroke()
        this.context.closePath()
      break;
      case(7):
        this.context.beginPath()
        this.context.moveTo(95,90)
        this.context.lineTo(250, 90)
        this.context.stroke()
        this.context.closePath()
      break;
      case(8):
        this.context.beginPath()
        this.context.moveTo(95,370)
        this.context.lineTo(95, 90)
        this.context.stroke()
        this.context.closePath()
      break;
      case(9):
        this.context.beginPath()
        this.context.moveTo(40,400)
        this.context.lineTo(120, 400)
        this.context.lineTo(95, 370)
        this.context.lineTo(70,400)
        this.context.fill()
        this.context.closePath()
      break;

    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
