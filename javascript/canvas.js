class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
  }

  drawLines() {

  let lengthWord = this.secretWord.length
  
  console.log(lengthWord)

    this.context.beginPath();
    this.context.lineWidth = 5
    this.context.moveTo(60, 500);
    this.context.lineTo(120, 500);
    this.context.stroke();

  
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
