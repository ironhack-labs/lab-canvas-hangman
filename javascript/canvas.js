class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');



    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);

  }

  drawLines() {
    for (let i=0;i<this.secretWord.length;i++){
      this.context.beginPath()
      this.context.moveTo(200 + (i*60),600)
      this.context.lineTo(250 + (i*60),600)
      this.context.stroke()
      this.context.closePath()
      

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
