class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0,0,1200,800);
    this.drawLines();
  }

  drawLines() {
    let x = 300;
    let y = 700;
    let lineWidth = 50;
    let spaceBetween = 10;
    this.context.lineWidth = 3;
    this.context.strokeStyle = "black"
    for (let i = 0; i < this.secretWord.length; i++){
    this.context.beginPath();
    this.context.moveTo(x,y);
    this.context.lineTo(x+lineWidth, y);
    this.context.stroke();
    this.context.closePath();
    x += lineWidth + spaceBetween;
    }
  }

  writeCorrectLetter(index) {
    let x = 300;
    let spaceBetween = 60;

    this.context.font = "60px serif"
    for (let i = 0; i < this.secretWord.length; i++){
      if (index === this.secretWord[i].toUpperCase()){
        this.context.fillText(index, x + i * spaceBetween, 690);
      } 
  }
}
  writeWrongLetter(letter) {
        this.context.fillText(letter, 550, 200);
      }
    
    

  drawHangman(errorsLeft) {
    this.context.lineWidth = 3;
    this.context.strokeStyle = "black"
    switch (errorsLeft){
      case 9:
        this.context.beginPath();
        this.context.moveTo(110, 660);
        this.context.lineTo(10, 700);
        this.context.lineTo(210, 700);
        this.context.lineTo(110, 660);
        this.context.stroke();
        this.context.closePath();
        break;
      
      case 8:
        this.context.beginPath();
        this.context.moveTo(110, 660);
        this.context.lineTo(110, 100);
        this.context.stroke();
        this.context.closePath();
        break;
      
      case 7:
        this.context.beginPath();
        this.context.moveTo(110, 100);
        this.context.lineTo(450, 100);
        this.context.stroke();
        this.context.closePath();
        break;

      case 6:
        this.context.beginPath();
        this.context.moveTo(450, 100);
        this.context.lineTo(450, 175);
        this.context.stroke();
        this.context.closePath();
        break;
      
      case 5:
        this.context.beginPath();
        this.context.arc(450, 225, 50, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
        break;

      case 4:
        this.context.beginPath();
        this.context.moveTo(450, 275);
        this.context.lineTo(450, 500);
        this.context.stroke();
        this.context.closePath();
        break;
      
      case 3:
        this.context.beginPath();
        this.context.moveTo(450, 500);
        this.context.lineTo(425, 560);
        this.context.stroke();
        this.context.closePath();
        break;

      case 2:
        this.context.beginPath();
        this.context.moveTo(450, 500);
        this.context.lineTo(475, 560);
        this.context.stroke();
        this.context.closePath();
        break;

      case 1:
        this.context.beginPath();
        this.context.moveTo(450, 350);
        this.context.lineTo(425, 350);
        this.context.stroke();
        this.context.closePath();
        break;
      
      case 0:
        this.context.beginPath();
        this.context.moveTo(450, 350);
        this.context.lineTo(475, 350);
        this.context.stroke();
        this.context.closePath();
        break;

    }
  }

  gameOver() {
    const img = new Image();
    img.src = '../images/gameover.png'
    this.context.drawImage(img,0, 0);
  }

  winner() {
    const img = new Image();
    img.src = '../images/awesome.png'
    this.context.drawImage(img,0, 0);  }
}
