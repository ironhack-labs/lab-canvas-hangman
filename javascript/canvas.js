class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d')

    this.secretWord = secretWord
    
  }

  createBoard() {
    ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    drawLines();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++){
      this.ctx.beginPath()
      this.ctx.moveTo(550 + 60 * i, 500)
      this.ctx.lineTo(550 + 60 * i, 500)
      this.ctx.stroke()
      this.ctx.closePath()
    }
  }

  writeCorrectLetter(index) {
    this.ctx.font = "40px Arial"
    //("TEXT", x, y, width, height)
    this.ctx.fillText = (this.guessedLetters, 500 + 60 * index, 490)
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "40px Arial"
    //("TEXT", x, y, width, height)
    this.ctx.fillText = (this.letters, 100 + 60 * index, 0)
  }

  drawHangman(errorsLeft) {


    switch(errorsLeft){

      case 0:
        // Rope
        this.context.beginPath()
        this.ctx.moveTo(400, 200)
        this.ctx.lineTo(400, 260)
        this.ctx.stroke()
      break;

      case 1:
        // Head 
        this.context.beginPath()
        this.ctx.arc(400,300,40,0,2 * Math.PI)
        this.ctx.stroke()
      break;

      case 2:
        // Left Arm
        this.context.beginPath()
        this.ctx.moveTo(400, 400)
        this.ctx.lineTo(330, 400)
        this.ctx.stroke()
      break;

      case 3:
        // Right Arm
        this.context.beginPath()
        this.ctx.moveTo(400, 400)
        this.ctx.lineTo(470, 400)
        this.ctx.stroke()
      break;

      case 4:
        // Body
        this.context.beginPath()
        this.ctx.moveTo(400, 500)
        this.ctx.lineTo(400, 340)
        this.ctx.stroke()
      break;

      case 5:
        // Right leg
        this.context.beginPath()
        this.ctx.moveTo(460, 580)
        this.ctx.lineTo(400, 500)
        this.ctx.stroke()
      break;

      case 6:
        //Left leg
        this.context.beginPath()
        this.ctx.moveTo(340, 580)
        this.ctx.lineTo(400, 500)
        this.ctx.stroke()
      break;

      case 7:
        //Horizontal line
        this.context.beginPath()
        this.ctx.moveTo(100, 200)
        this.ctx.lineTo(400, 200)
        this.ctx.stroke()
      break;

      case 8:
        //Vertical Line
        this.context.beginPath()
        this.ctx.moveTo(100, 200)
        this.ctx.lineTo(100, 700)
        this.ctx.stroke()
      break;

      case 9:
        // Base 
        this.context.beginPath()
        this.ctx.moveTo(100, 700)
        this.ctx.lineTo(30, 780)

        this.ctx.moveTo(100, 700)
        this.ctx.lineTo(160, 780)
        this.ctx.stroke()

        this.ctx.moveTo(160, 780)
        this.ctx.lineTo(30, 780)
        this.ctx.stroke()
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