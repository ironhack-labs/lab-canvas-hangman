class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.cWidth = this.canvas.width;
    this.cHeight = this.canvas.height;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.cWidth, this.cHeight);
    this.drawLines();
  }

  drawLines() {
    for(let i = 0; i < this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(300 + (i * 75), this.cHeight - 50);
      this.context.lineTo(350 + (i * 75), this.cHeight - 50);
      this.context.stroke();
      this.context.closePath();
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
