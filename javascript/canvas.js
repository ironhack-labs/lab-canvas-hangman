class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord; // orange
    this.context = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
   // this.secretWord.split('').forEach(function(_, i) { 
   // })
    for(let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(250 + i * 30, 150);
      this.context.lineTo(275 + i * 25, 150);
      this.context.stroke();
      this.context.closePath()
    }
  }

  writeCorrectLetter(index) {
    
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
