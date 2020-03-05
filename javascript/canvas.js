class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let numLines = this.secretWord.length;
    let x = 250;
    let y = 700;
    let x2 = 300;

    for (let i = 1; i <= numLines; i++) {
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(x2, y);
      this.context.stroke();
      x += 80;
      x2 += 80;
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let letter = this.secretWord[index];
    let x = 260;
    let y = 690;

    this.context.font = '40px serif';
    this.context.fillText(letter, x + (index * 80) , y)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let x = 700;
    let y = 200;

    this.context.font = '30px serif';
    this.context.fillText(letter, x + ((10 - errorsLeft) * 30) , y)
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft) {

      case 9: 
        this.context.beginPath();
        this.context.moveTo(150, 650);
        this.context.lineTo(100, 700);
        this.context.stroke(); 
        break;
  
      case 8:
        this.context.moveTo(100, 700);
        this.context.lineTo(200, 700);
        this.context.stroke(); 
        break;
  
      case 7:
        this.context.moveTo(200, 700);
        this.context.lineTo(150, 650);
        this.context.stroke(); 
        break;
  
      case 6:
        this.context.moveTo(150, 650);
        this.context.lineTo(150, 250);
        this.context.stroke(); 
        break;
  
      case 5:
        this.context.moveTo(150, 250);
        this.context.lineTo(400, 250);
        this.context.stroke(); 
        break;
      
      case 4:
        this.context.moveTo(400, 250);
        this.context.lineTo(400, 300);
        this.context.stroke(); 
        break;
  
      case 3:
        this.context.beginPath();
        this.context.arc(400, 340, 40, 0, Math.PI * 2);
        this.context.stroke(); 
        this.context.closePath();
        break;
  
      case 2:
        this.context.beginPath();
        this.context.moveTo(400, 380);
        this.context.lineTo(400, 500);
        this.context.stroke(); 
        break;
  
      case 1:
        this.context.moveTo(400, 500);
        this.context.lineTo(350, 550);
        this.context.stroke();
        this.context.closePath();
        break;
  
      case 0:
        this.context.moveTo(400, 500);
        this.context.lineTo(450, 550);
        this.context.stroke(); 
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


