class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    this.drawLines()
    // ... your code goes here
  }

  drawLines() {
    // ... your code goes here
    for(let i = 0; i <= this.secretWord.length; i++)
      this.context.beginPath()
        this.context.moveTo(200+88*i,600)
        this.context.lineTo(200+88*i,600)
        this.context.stroke

      this.context.closePath()
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = "60px Arial"
    this.context.fillText(this.secretWord[index],230 + 80 * index, 690)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here

    //dibujar una línea con cada error
    switch(errorsLeft){
      case 9:
        this.context.beginPath()
          this.context.moveTo(50,700)
          this.context.lineTo(150, 700)
          this.context.lineTo(100,650)
          this.context.lineTo(50,700)
          this.context.stroke()
        this.context.closePath()
      break;
      case 8:
     }



  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
