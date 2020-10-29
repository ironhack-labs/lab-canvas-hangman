class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800);//x,y,width,height
    this.drawLines();
  }

  drawLines() {
    
    this.context.beginPath()
// despues hacemos el for loop
for (let i = 0; i < this.secretWord.length; i++) {
      this.context.lineTo(300 + 60 * i, 700);
      this.context.moveTo(300 + 60 * i + 10, 700);
    }
// despues pintamos
this.context.lineWidth = 4;
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
