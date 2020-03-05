class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.context.beginPath();
      this.context.lineTo(200 + 80*i, 700);
      this.context.lineTo(250 + 80*i, 700);
      this.context.lineWidth = 3;
      this.context.stroke();
    }
    this.context.font = '50px Arial'
    this.context.fillText(this.secretWord, 800, 200)
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.fillText(this.secretWord[index], 210 + 80 * index, 680)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.fillText(letter, 500, 400)
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
