class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines()
  }

  drawLines() {
    for (let i = 1; i < this.secretWord.length + 1; i++){
      let x = (i*1.2) * 50
      let y = 900
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(x + 50, 900);
      this.context.stroke();
      } 
  }

  writeCorrectLetter(index) {
    
  }

  writeWrongLetter(letter, errorsLeft) {

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
