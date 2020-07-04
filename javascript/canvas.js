class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    this.drawLines();
    
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0,canvas.width, canvas.height);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    //Draw draw one line for each letter of the secret word
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(400 , canvas.height - 50);
      this.context.lineTo(500 , canvas.height - 50);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) {
        this.context.fillText(this.secretWord[i], 450, canvas.height - 75);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.fillText(letter,700, 100);
    this.context.fillText(errorsLeft,200, 100);

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
