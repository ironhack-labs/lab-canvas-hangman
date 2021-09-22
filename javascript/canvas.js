class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    this.ctx.strokeStyle = "black";
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines()
  }

  drawLines() {
    let xLine = 260 
    let yLine = 600
    this.secretWord.split().lenght.forEach(element => {
      this.ctx.beginPath();
      this.ctx.moveTo(xLine, yLine);
      this.ctx.lineTo(xLine + 60, yLine);
      this.ctx.stroke();
      xLine += 20
      this.ctx.closePath()
    });
  }

  writeCorrectLetter(index) {
   
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.clearRect(0,0,1200,200)
    if (errorsLeft >= 0) this.context.font[letter].toUpperCase

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
