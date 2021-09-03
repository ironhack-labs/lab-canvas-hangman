class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
  }

  createBoard() {
    // ... your code goes here
    this.context.strokeStyle = "black"
      
      //this.context.clearRect(45, 45, 60, 60);
      this.context.strokeRect(0, 0, 1200, 800);    
      this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    let xLine = 260 
    let yLine = 600
    this.secretWord.split().forEach(element => {
      this.context.beginPath()
      this.context.moveTo(xLine, yLine)
      this.context.lineTo(xLine + 60, yLine)
      this.context.stroke()
    xLine += 20

      
    });
   

  
// CERRAR EL CAMINO
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
