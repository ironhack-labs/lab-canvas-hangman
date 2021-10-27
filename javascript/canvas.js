class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // javascript/hangman.js
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0,window.innerHeight,window.innerWidth);
    this.drawLines();
    // ... your code goes here
  }

  drawLines() {
    for(let i = 0; i < this.secretWord.length; i++){
      beginPath()
      
    }
    // ... your code goes here
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
