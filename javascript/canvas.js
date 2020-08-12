class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    let numberOfLines = this.secretWord.length
    this.context.strokeStyle = 'black'
    this.context.beginPath()
    for(let i = 0; i < numberOfLines; i++){
      this.context.moveTo(60 + (i+1)*40, 760)
      this.context.lineTo(60 + (i+1)*40 + 35, 760)
    }
    this.context.stroke()
    this.context.closePath()
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
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
