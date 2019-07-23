

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }
  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800)


  }
  drawLines() {
    console.log(hangman.secretWord)
    // push secretWordLetters into a string
    // let secretWordArray = []
    // secretWordArray.push(hangman.secretWord.split(""))
    // console.log(secretWordArray)
    // console.log(secretWordArray[1])
    let positionX = 0
    for (let i = 0; (i < hangman.secretWord.length); i++) {
      console.log("1 iteration")
      this.ctx.beginPath()
      this.ctx.moveTo(positionX, 50)
      this.ctx.lineTo((positionX + 50), 50)
      this.ctx.stroke()
      this.ctx.closePath()
      console.log(positionX)
      positionX += 60

    }


    // for each letter 
    // secretWordArray.forEach(letter)
    // draw a line at y-20; x will  

  }
  writeCorrectLetter(index) {

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