class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = hangman.secretWord
  }

  createBoard() {
    const width = this.context.width;    
    const height = this.context.height;    
    this.context.clearRect(0,0,width,height);
    this.drawLines()
  }

  drawLines() {
    let x =200
    let y = 500
    for (let i=0 ; i<this.secretWord.length ; i++){  
      x += 45;
      this.context.beginPath();
      this.context.lineWidth = 3;
      this.context.moveTo(x,y);
      this.context.lineTo(x+30,y);
      this.context.stroke();
      this.context.closePath();
    }
    this.context.beginPath();
    this.context.lineWidth = 3;
    this.context.moveTo(50,500);
    this.context.lineTo(110,470);
    this.context.lineTo(170,500);
    this.context.lineTo(50,500);
    this.context.stroke();
    this.context.closePath();
    this.context.beginPath();
    this.context.lineWidth = 3;
    this.context.moveTo(110,470);
    this.context.lineTo(110,70);
    this.context.lineTo(380,70);
    this.context.lineTo(380,110);
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    this.context.font = '20px monospace';
    this.context.fillText(index, 500, 500)
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '25px monospace';
    this.context.fillText(letter, 500, 250);
    this.context.font = '25px monospace';
    this.context.fillText(`ERRORS LEFT: ${errorsLeft}`, 500, 200)
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
