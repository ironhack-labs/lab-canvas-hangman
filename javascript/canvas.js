class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.hangmanParts = ['head', 'body', 'rightArm', 'rightHand', 'leftArm', 'leftHand', 'rightLeg', 'rightFoot', 'leftLeg', 'leftFoot' ]
    this.context.strokeStyle = 'black';
    this.context.textAlign = 'center';
    this.context.font = '48px Arial'    
}

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
   
   
    this.drawLines( 150, 600, 225, 650);
    this.drawLines( 225, 650, 75, 650);
    this.drawLines( 75, 650, 150, 600);
    
    this.drawLines(150, 600, 150, 200);
    this.drawLines(150, 200, 400, 200);
    this.drawLines(400, 200, 400, 300);


    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.drawLines(400 + i * 75, 650, 450 + i * 75, 650);
    }   
  }

  drawLines(x1, y1, x2, y2 ) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.closePath();
  }

  writeInvalidKeyMessage() {
    this.context.font = '30px Arial'
    this.context.fillText('SOMENTE LETRAS É PERMITIDO!', 600, 100);

    setTimeout(() => {
      this.context.clearRect(0, 0, this.canvas.width, 110);
    }, 1500);

  }

  writeCorrectLetter(index) {
    const guessedLetter = this.secretWord[index];

    for (let i = 0; i < this.secretWord.length; i ++) {
      if (this.secretWord[i] === guessedLetter) {
        this.context.fillText(guessedLetter.toUpperCase(), 425 + i * 75, 645);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    const letterOrder = 10 - errorsLeft;
    this.context.fillText(letter.toUpperCase(), 450 + letterOrder * 50, 250);    
  }

  drawHangman(errorsLeft) { 
    const errorOrder = 10 - errorsLeft;
    const hangmanParts = this.hangmanParts[errorOrder -1];

    switch (hangmanParts) {
      case 'head':
        this.context.beginPath();
        this.context.arc(400, 330, 30, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
        this.drawLines(385, 315, 390, 320);
        this.drawLines(390, 315, 385, 320);
        this.drawLines(415, 315, 410, 320);
        this.drawLines(410, 315, 415, 320);
        this.drawLines(390, 340, 410, 340);
        break;
      case 'body':
         this.drawLines(400, 360, 400, 480);
        break;
      case 'rightArm':
        this.drawLines(400, 390, 430, 440);
        break;
      case 'leftArm':
        this.drawLines(400, 390, 370, 440);
        break;
      case 'rightLeg':
        this.drawLines(400, 480, 430, 550);
        break;
      case 'leftLeg':
        this.drawLines(400, 480, 370, 550);
        break;
      case 'rightHand':
        this.drawLines(430, 440, 440, 435);
        break;
      case 'leftHand':
        this.drawLines(370, 440, 360, 435);
        break;
      case 'rightFoot':
        this.drawLines(430, 550, 445, 540);
        break;
      case 'leftFoot':
        this.drawLines(370, 550, 355, 540);
        break;
      default:
        console.log('Part does not exist')
    }
  }

  gameOver() {
    
    const gameOverImg = new Image();
    gameOverImg.src = '../images/gameover.png';

    gameOverImg.onload = () => {
      setTimeout(() => { 
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(gameOverImg, 315, 150);
      }, 1000);
    };
  }

  winner() {
   
    const winnerImg = new Image();
    winnerImg.src = './images/awesome.png';

    winnerImg.onload = () => {
      setTimeout(() => { 
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(winnerImg, 164, 50);
      }, 1000);
    };
}
}
