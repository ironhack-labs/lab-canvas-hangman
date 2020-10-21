class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let line = 400;

    this.context.beginPath()
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(line, 600);
      this.context.font = '30px Arial';
      this.context.fillText(this.secretWord[i], line, 590);
      line += 20;
      this.context.lineTo(line, 600);
      this.context.stroke();
      line += 20;
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
