class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.canvas = document.getElementById("hangman");
  }

  createBoard() {
    hangmanCanvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    this.context.lineWidth = 5;
    let posX = this.canvas.width / 3;
    let posY = this.canvas.height - 100;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.lineTo(posX, posY);
      posX += 50;
      this.context.lineTo(posX, posY);
      posX += 30;
      this.context.moveTo(posX, posY)
      }
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    this.context.font = '60px serif';
    let posX = (this.canvas.width / 3) + (80*index);
    let posY = this.canvas.height - 110;
    this.context.fillText(this.secretWord[index], posX, posY);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '60px serif';
    let posX = (this.canvas.width / 2) + 200;
    let posY = 100;
    for (let i = 10; i > errorsLeft; i--) {
      posX += 40;
    }
    this.context.fillText(letter, posX, posY);
  }

  drawHangman(errorsLeft) {
    let hposX = this.canvas.width / 6;
    let hposY = this.canvas.height - 100;
    
   switch (errorsLeft) {
      case 9: 
        this.context.beginPath();
        this.context.lineTo(hposX, hposY);
        this.context.lineTo(hposX + 120, hposY);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8: 
        this.context.beginPath();
        this.context.lineTo(hposX, hposY);
        this.context.lineTo(hposX + 60, hposY - 45);
        this.context.stroke();
        this.context.closePath();
        break;
      case 7:
        this.context.beginPath();
        this.context.lineTo(hposX + 120, hposY);
        this.context.lineTo(hposX + 60, hposY - 45);
        this.context.stroke();
        this.context.closePath();   
        break;
      case 6:
        this.context.beginPath();
        hposX += 60; hposY -=45;
        this.context.lineTo(hposX, hposY);
        hposY -=600;
        this.context.lineTo(hposX, hposY);
        this.context.stroke();
        this.context.closePath();   
        break;
      case 5:
        this.context.beginPath();
        this.context.lineTo(hposX, hposY);
        hposX +=400;
        this.context.lineTo(hposX, hposY);
        this.context.stroke();
        this.context.closePath();   
        break;
      case 4:
        this.context.beginPath();
        this.context.lineTo(hposX, hposY);
        hposY +=100;
        this.context.lineTo(hposX, hposY);
        this.context.stroke();
        this.context.closePath();   
        break;
      case 3: 
        this.context.beginPath();
        this.context.lineTo(hposX, hposY);
        hposY += 40;
        this.context.moveTo(hposX, hposY);
        this.context.arc(hposX, hposY, 40, 0, 360);
        this.context.stroke();
        this.context.closePath();   
        break;
      case 2: 
        this.context.beginPath();
        hposY += 40;
        this.context.moveTo(hposX, hposY);
        this.context.lineTo(hposX, hposY);
        hposY += 150;
        this.context.lineTo(hposX, hposY);
        this.context.stroke();
        this.context.closePath();      
        break;
      case 1: 
        this.context.beginPath();
        hposY += 40;
        this.context.moveTo(hposX, hposY);
        this.context.lineTo(hposX, hposY);
        hposY += 150;
        this.context.lineTo(hposX, hposY);
        this.context.stroke();
        this.context.closePath();   
        break;
      case 0:
        this.context.beginPath();
        this.context.lineTo(hposX, hposY);
        hposY +=100;
        this.context.lineTo(hposX, hposY);
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
