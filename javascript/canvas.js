class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    console.log(this.secretWord)
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.drawLines();
    this.writeCorrectLetter();
  }

  drawLines() {
    for(let i = 1; i <= this.secretWord.length; i++) {
      this.context.fillStyle = "black"
      this.context.fillRect(400 + i * 80, 700, 50, 5)
    }
  }

  writeCorrectLetter(index) {
    this.context.fillStyle = "green"
    this.context.font = "50px Century Gothic";
    this.context.fillText(this.secretWord.charAt(index), 490, 680)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
