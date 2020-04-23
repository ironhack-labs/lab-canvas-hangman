class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    this.imgGo = new Image();
    this.imgGo.src = './images/gameover.png';
    this.imgEnd = new Image();
    this.imgEnd.src = './images/awesome.png';
  }

  

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1000, 1000);
  }

  drawLines() {
    // ... your code goes here
    let xPos;
    for (let i = 0; i < this.secretWord.length; i++) {
      xPos = 300 + i * 80;
      this.context.fillRect(xPos, 700, 50, 3);
    }

  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let xPos;
    xPos = 315 + index * 80;
    this.context.font = '48px serif';
    this.context.fillText(this.secretWord[index], xPos, 680, 50);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let xPos;
    xPos = 500 + (10 - errorsLeft) * 50;
    this.context.font = '48px serif';
    this.context.fillText(letter, xPos, 180, 50);
    this.context.fillText(letter, xPos, 180, 50);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 9:
      this.context.beginPath();
      this.context.moveTo(20, 400);
      this.context.lineTo(100, 400);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(100, 400);
      this.context.lineTo(60, 380);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(60, 380);
      this.context.lineTo(20, 400);
      this.context.stroke();
      this.context.closePath();

      break;

      case 8:
      this.context.beginPath();
      this.context.moveTo(60, 380);
      this.context.lineTo(60, 150);
      this.context.stroke();
      this.context.closePath();
        
      break;
      case 7:
      this.context.beginPath();
      this.context.moveTo(60, 150);
      this.context.lineTo(260, 150);
      this.context.stroke();
      this.context.closePath();
       
      break;
      case 6:
      this.context.beginPath();
      this.context.moveTo(260, 150);
      this.context.lineTo(260, 180);
      this.context.stroke();
      this.context.closePath();
      break;
      case 5:
      this.context.beginPath();
      this.context.arc(260, 210, 30, 0, Math.PI * 2);
      this.context.stroke();
      this.context.closePath();
        
      break;
      case 4:
      this.context.beginPath();
      this.context.moveTo(260, 240);
      this.context.lineTo(260, 340);
      this.context.stroke();
      this.context.closePath();
        
      break;

      case 3:
      this.context.beginPath();
      this.context.moveTo(260, 340);
      this.context.lineTo(200, 380);
      this.context.stroke();
      this.context.closePath();
        
      break;
      case 2:
      this.context.beginPath();
      this.context.moveTo(260, 340);
      this.context.lineTo(320, 380);
      this.context.stroke();
      this.context.closePath();
        
      break;
      case 1:
      this.context.beginPath();
      this.context.moveTo(260, 240);
      this.context.lineTo(200, 280);
      this.context.stroke();
      this.context.closePath();  
      break;
      case 0:
      this.context.beginPath();
      this.context.moveTo(260, 240);
      this.context.lineTo(200, 280);
      this.context.stroke();
      this.context.closePath();   
        
      break;
    }
  }

  gameOver() {
    // ... your code goes here
    
    this.context.drawImage(this.imgGo, 0, 0);
    
  }

  winner() {

    // ... your code goes here
    
    this.context.drawImage(this.imgEnd, 0, 0);
    }
  
}
