class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }
  
  createBoard() {
    // ... your code goes here
    ctx.fillStyle="blue";
    ctx.fillRect(260, 260, 30, 30);
  }

  drawLines() {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, 50);
    ctx.stroke();
    ctx.closePath();
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
