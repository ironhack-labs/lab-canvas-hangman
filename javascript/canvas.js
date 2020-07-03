class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = hangman.secretWord
  }

  createBoard() {
    const width = this.context.width;    
    const height = this.context.height;    
    this.context.clearRect(0,0,width,height);
    this.drawLines()
  }

  drawLines() {
    this.context.clearRect(0,0, 800, 1200);
    let x =222
    let y = 500
    for (let i=0 ; i<this.secretWord.length ; i++){  
      x += 40;
      this.context.beginPath();
      this.context.lineWidth = 3;
      this.context.moveTo(x,y);
      this.context.lineTo(x+25,y);
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

  writeCorrectLetter(index, x) {
    this.context.fillStyle = 'black';
    this.context.font = '35px monospace';
    this.context.fillText(index, x, 495)
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.fillStyle = 'black';
    this.context.font = '25px monospace';
    this.context.clearRect(450,180,300,150);
    this.context.fillText(letter, 500, 250);
    this.context.fillText(`ERRORS LEFT: ${errorsLeft}`, 500, 200)
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft){
      case 9:
        this.context.beginPath();
        this.context.arc(380, 128, 20, 0, Math.PI *2);
        this.context.lineWidth = 3;
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(380,148);
        this.context.lineTo(380, 300);
        this.context.stroke();
        this.context.closePath();
        break;
      case 7:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(380,300);
        this.context.lineTo(410, 370);
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(380,300);
        this.context.lineTo(350, 370);
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(380,148);
        this.context.lineTo(410, 220);
        this.context.stroke();
        this.context.closePath();
        break;
      case 4:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(380,148);
        this.context.lineTo(350, 220);
        this.context.stroke();
        this.context.closePath();
        break;
      case 3:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(350,370);
        this.context.lineTo(335, 370);
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(410,370);
        this.context.lineTo(425, 370);
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(368,120);
        this.context.lineTo(378, 130);
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(378,120);
        this.context.lineTo(368, 130);
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(386,120);
        this.context.lineTo(396, 130);
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(396,120);
        this.context.lineTo(386, 130);
        this.context.stroke();
        this.context.closePath();
        break;
      default:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(320,148);
        this.context.lineTo(440, 148);
        this.context.stroke();
        this.context.closePath();
        this.context.fillStyle = 'white';
        this.context.fillRect(490,170,250,40);
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    this.context.fillStyle = 'green';
    this.context.fillRect(350,170,400,350);
    this.context.fillStyle = 'white';
    this.context.font = '25px monospace';
    this.context.fillText(`YOU WON!!!`, 500, 345)    
  }
}
