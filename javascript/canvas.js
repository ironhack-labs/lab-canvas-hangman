class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    this.context.strokeStyle = "black";
    this.context.lineWidth = 4;
    
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(400 + 70 * i, 700);
      this.context.lineTo(450 + 70 * i, 700);
      this.context.stroke();   
    }
  }
  
  writeCorrectLetter(index) {
    this.context.font = "50 px Arial";
    for (let i = 0; i < this.secretWord.length; i++) {
      if (index === this.secretWord[i]) {
        this.context.fillText(this.secretWord[i], 400, 700);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "50 px Arial";

  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(300, 1100);
        this.context.lineTo(200, 1100);
        this.context.lineTo(250, 1050);
        this.context.lineTo(300, 1100);
        this.context.stroke();
    break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(250, 1050);
        this.context.lineTo(250, 700);
        this.context.stroke();
    break;
      case 7:  
        this.context.beginPath();
        this.context.moveTo(250, 700);
        this.context.lineTo(450, 700);
        this.context.stroke();
    break;
      case 6:      
        this.context.beginPath();
        this.context.moveTo(450, 700);
        this.context.lineTo(450, 725);
        this.context.stroke();
   break;
      case 5:       
        this.context.beginPath();
        this.context.arc(450, 755, 30, 0, Math.PI * 2);
        this.context.moveTo(450, 700);
        this.context.lineTo(450, 725);
        this.context.stroke();
    break;
      case 4:     
        this.context.beginPath();
        this.context.moveTo(450, 785);
        this.context.lineTo(450, 900);
        this.context.stroke();
  break;
      case 3:        
        this.context.beginPath();
        this.context.moveTo(450, 900);
        this.context.lineTo(410, 955);
        this.context.stroke();
    break;
      case 2:      
        this.context.beginPath();
        this.context.moveTo(450, 900);
        this.context.lineTo(490, 955);
        this.context.stroke();
     break;
      case 1:     
        this.context.beginPath();
        this.context.moveTo(450, 820);
        this.context.lineTo(500, 800);
        this.context.stroke();
      break;
      case 0:    
        this.context.beginPath();
        this.context.moveTo(450, 820);
        this.context.lineTo(400, 800);
        this.context.stroke();
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}