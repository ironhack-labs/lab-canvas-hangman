class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.width = document.getElementById('hangman').width;
    this.height = document.getElementById('hangman').height;
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.lineWidth = 2.5;    

    this.context.beginPath();

    this.context.moveTo(300, 500);
    this.context.lineTo(420, 500);
    this.context.lineTo(360, 450)
    this.context.lineTo(300, 500)
    this.context.moveTo(360, 450)
    this.context.lineTo(360, 100)
    this.context.lineTo(600, 100)
    this.context.lineTo(600, 150)
    this.context.stroke()

    this.context.closePath();

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.lineWidth = 1;    
      let spaceBetweenLetters = i * 50;
      this.drawLines(460 + spaceBetweenLetters, 500, 490 + spaceBetweenLetters, 500)
    }

  }

  drawLines(x1, y1, x2, y2 ) {
      this.context.beginPath();
      this.context.moveTo(x1, y1);
      this.context.lineTo(x2, y2);
      this.context.stroke();
      this.context.closePath();    
  }

  drawArc(x, y, radius, startAngle, endAngle) {
    this.context.beginPath()
    this.context.arc(x, y, radius, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle);
    this.context.stroke()
    this.context.closePath();
  }

  writeCorrectLetter(letter) {
    for (let i = 0; i < this.secretWord.length; i++) {
      const coordinates =  i * 50 + 15;
      this.context.textAlign = 'center';
      this.context.font = '40px serif';

      if (letter === this.secretWord[i]) {
        this.context.fillText(letter.toUpperCase(), (460 + coordinates), 490);        
      }
    }

    if (hangman.checkWinner()) {
      this.winner();
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    let coordinates = 35 * (10 - errorsLeft);

    letter = letter.toUpperCase();

    this.context.textAlign = 'center';
    this.context.font = '40px serif';

    if (errorsLeft > 0) {
      this.context.fillText(letter, 700 + coordinates, 250);
      this.drawHangman(errorsLeft);
    } else {
      this.gameOver();
    }    
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft) {
      case 9:
        this.drawArc(600, 180, 30, 0, 360);
        break;
      case 8:
        this.drawLines(600, 210, 600, 300);
        break;
        case 7:
          this.drawLines(600, 250, 540, 230);
          break;
        case 6:
          this.drawLines(600, 250, 660, 230);
          break;
        case 5:
          this.drawLines(600, 300, 560, 350);
          break;
        case 4:
          this.drawLines(600, 300, 640, 350);
          break;
        case 3:
          this.drawArc(612, 175, 2, 0, 360);          
          this.context.fill();
          break;
        case 2:
          this.drawArc(588, 175, 2, 0, 360);          
          this.context.fill();
          break;
        case 1:
          this.drawLines(590, 193, 610, 190)
          break;
        default:
          this.gameOver();
    }
    
  }

  gameOver() {    
    let defeatMessage = new Image();
    defeatMessage.src = './images/gameover.png';

    defeatMessage.onload = () => {
      this.context.clearRect(0, 0, 1200, 449)
      this.context.drawImage(defeatMessage, 330, 30, 550, 400)
    }    
  }

  winner() {
    let victoryMessage = new Image();
    victoryMessage.src = './images/awesome.png';

    victoryMessage.onload = () => {
      this.context.clearRect(0, 0, 1000, 449)
      this.context.drawImage(victoryMessage, 300, 30, 550, 400)
    }    
  }
}
