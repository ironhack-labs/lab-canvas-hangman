class HangmanCanvas {
  constructor(secretWord,errorsLeft) {
    
    this.context= document.getElementById(`hangman`).getContext("2d")
    

    this.canvas= document.getElementById("hangman")
    this.secretWord = secretWord
    this.errorsLeft = errorsLeft

    this.startPointX = 400
    this.startPointY = 100
    this.lineWidth =20
    this.startPointX_arr =[this.startPointX]

    for (let i= 1;i <= this.secretWord.length; i++){
      this.startPointX_arr.push((this.startPointX += this.lineWidth + 25))
    }


  }

  createBoard() {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
    this.drawLines()
    this.drawHangman (10)

  }

  drawLines() {

    let line = 50
    line.beginPath()
    line.lineTo(50,80)

  }

  writeCorrectLetter(index) {
this.context.font
this.context.fillText(
  this.secretWord[index],
  this.startPointX_arr [index],
  this.startPointY - 5

)
}

  writeWrongLetter(letter, errorsLeft) {

    this.context.beginPath()
    this.context.clearRect(500,150,100,100)
    this.context.fillText(errorsLeft,590,200)
    this.context.closePath()
    
    this.context.beginPath()
    this.context.clearRect(390,250,500,100)
    this.context.font = "30px Arial"

    }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
