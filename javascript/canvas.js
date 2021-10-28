class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0,0,canvas.width,canvas.height);
    this.drawLines();
  }

  drawLines() {
    let secretWordLength = this.secretWord.length
    
    for (let i = 0; i < this.secretWordLength; i++) {
      
    }
    this.context.beginPath();
    this.context.moveTo(50,50);
    this.context.lineTo(250,50);
    this.context.stroke()

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
