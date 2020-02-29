



class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');

    //what do we actually need here?
    this.secretWord = secretWord




  }

  createBoard() {



    this.context.clearRect(0, 0, 1200, 800)
    this.drawLines()
  }

  drawLines() {
    let x = 300
    let y = 700
    
    
    // ... your code goes here


  for (let i =0; i < hangman.secretWord.length; i++) {

    this.context.strokeStyle = "red"
    this.context.beginPath()
    this.context.moveTo(x,y)

    this.context.lineTo(x += 50, y)
    
    this.context.stroke()
    


    this.context.strokeStyle = "white"
    this.context.lineTo(x += 15, y)
    this.context.closePath()

  }
    // this.context.strokeStyle = "red"
    // this.context.strokeRect(200, 0, 800, 600)

  }

  writeCorrectLetter(index) {


    
    let letter = this.secretWord[index]
    this.context.font = "40pt Arial"
    let offset = index * 60
    this.context.fillText(letter, offset, 400)
    this.context 


 
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "40pt Arial"
    this.context.fillStyle = "red"
    let offset = errorsLeft * 50
    this.context.filltext(letter,400 + offset, 200)
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
