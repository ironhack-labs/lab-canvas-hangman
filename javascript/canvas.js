class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    // ... your code goes here
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.x = 0;
    this.y = 0;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,this.width,this.height);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    this.context.fillStyle = 'red';
    this.context.fillRect(50,50, 20,20);
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
