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
    // ... your code goes here
    this.context.strokeStyle = 'black'
    this.context.lineWidth = 4;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(180 * i, 200);
      this.context.lineTo(190 * i, 200);
      this.context.stroke();   
    };
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
