class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200)
    //this.context.fillRect(0, 0, 50, 50)
    this.drawLines()
  }

  drawLines() {
    this.context.beginPath()
    let x = 100
    for (let i = 0; i < this.secretWord.length; i++) {
      x += 10
      this.context.moveTo(x, 600, 0, 0)
      x += 30
      this.context.lineTo(x, y)
      this.context.stroke()
    }
  };

  writeCorrectLetter(index) {

    let letter = this.secretWord[index]
    this.context.font = '40pt Arial'
    let offset = index * 40
    this.context.filledText()
    
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
