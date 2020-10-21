class HangmanCanvas {
  constructor(secretWord) {
    $canvas = document.querySelector('canvas')
    this.context = $canvas.getContext('2d')
    //this.context = document.getElementById('hangman').getContext('2d');
  }
    


  createBoard() {
    this.context.clearRect(0,0, $canvas.width, $canvas.height)
    this.drawLines()
  }

  drawLines() {
    let moveX = 100
    for(let i = 0; i < this.secretWord.length ;i ++){
        ctx.beginPath()
        ctx.moveTo(moveX,780)
        ctx.lineTo(moveX + 50,780 )
        ctx.closePath()
        moveX += 20
    }
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
