class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.context.textAlign = 'center';
    this.context.font = '40px Arial';
    
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.context.beginPath();
    this.context.moveTo(50,700);
    this.context.lineTo(100, 650);
    this.context.lineTo(150,700);
    this.context.lineTo(50,700);
    this.context.moveTo(100,650);
    this.context.lineTo(100, 150);
    this.context.lineTo(350,150);
    this.context.lineTo(350,200)
    this.context.stroke();
    this.context.closePath();
    
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      const x1 = 180 + i * 60;
      const x2 = 220 + i * 60;

      this.context.beginPath();
      this.context.moveTo(x1,700);
      this.context.lineTo(x2,700);
      this.context.stroke();
      this.context.closePath();
     
    }
    
  }

  writeCorrectLetter(index) {
    const correctLetter = this.secretWord[index];
    for (let i = 0; i < this.secretWord.length; i++) {
      if (correctLetter === this.secretWord[i]) {
        this.context.fillText(correctLetter.toUpperCase(), 200 + i *60, 690);
        
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    const letterOrder = 10 - errorsLeft;
    for (let i = 0; i < this.secretWord.length; i++) {
      if (letter !== this.secretWord[i]) {
        this.context.fillText(letter.toUpperCase(), 500 + letterOrder *30, 300)
      }
    }
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft){
      case 9:
      this.context.beginPath();
      this.context.arc(350,240,40,0, Math.PI*2);
      this.context.stroke();
      this.context.closePath();
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
