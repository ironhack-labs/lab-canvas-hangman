class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let numberOfLines = this.secretWord.length;

    this.context.lineWidth = 5;

    for(let i = 0; i < numberOfLines; i++){
      this.context.beginPath();
      this.context.strokeStyle = `black`;
      
      this.context.moveTo((i * 75) + 50, 750);
      this.context.lineTo((i * 75) + 100, 750);
      this.context.stroke(); 
    }
    
    //Draw gallows:
    /*
    this.context.beginPath();
    this.context.lineWidth = 8;
    this.context.lineCap = 'round';
    this.context.moveTo(800, 250);
    this.context.lineTo(800, 200);
    this.context.lineTo(1000, 200);
    this.context.lineTo(1000, 500);
    this.context.lineTo(1100, 600);
    this.context.lineTo(900, 600);
    this.context.lineTo(1000, 500);
    this.context.stroke();
    this.context.closePath();
    */
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = '72px sans-serif';
    this.context.fillText(this.secretWord[index], (index * 75) + 50, 740, 75)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '72px sans-serif';
    this.context.fillText(letter, ((10 - errorsLeft) * 75) + 50, 100, 75);
  }

  drawHangman(errorsLeft) {
       
    switch (errorsLeft){
      case 9: 
        this.context.beginPath();
        this.context.lineWidth = 8;
        this.context.lineCap = 'round';
        this.context.moveTo(800, 250);
        this.context.lineTo(800, 200);
        this.context.lineTo(1000, 200);
        this.context.stroke();
        break;
      case 8:
        this.context.lineTo(1000, 500);
        this.context.stroke();
        break;
      case 7:
        this.context.lineTo(1000, 500);
        this.context.lineTo(1100, 600);
        this.context.lineTo(900, 600);
        this.context.stroke();
        break;
      case 6:
        this.context.lineTo(1000, 500);
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.lineWidth = 7;
        this.context.strokeStyle = 'blue'; 
        this.context.arc(800, 280, 30, 0, Math.PI * 2);
        this.context.stroke();
        break;
      case 4:
        this.context.moveTo(800, 310);
        this.context.lineTo(800, 400);
        this.context.stroke();
        break;
      case 3:
        this.context.moveTo(800, 320);
        this.context.lineTo(830, 360);
        this.context.stroke();
        break;
      case 2:
        this.context.moveTo(800, 320);
        this.context.lineTo(770, 360);
        this.context.stroke();
        break;
      case 1:
        this.context.moveTo(800, 400);
        this.context.lineTo(770, 430);
        this.context.stroke();
        break;
      case 0:
        this.context.moveTo(800, 400);
        this.context.lineTo(830, 430);
        this.context.stroke();
        this.context.closePath();
        break;
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
