class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    console.log(this.secretWord)
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.drawLines();
    this.writeCorrectLetter();
  }

  drawLines() {
    // ... your code goes here
    for(let i = 1; i <= this.secretWord.length; i++) {
      this.context.fillStyle = "black";
      this.context.fillRect(400 + i * 80, 700, 50, 5);
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
