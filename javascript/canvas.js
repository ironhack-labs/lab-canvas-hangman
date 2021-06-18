class HangmanCanvas {
  constructor(secretWord) {
    this.board = document.getElementById('hangman');
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawBoard();
    this.drawLines();
  }

  drawBoard() {
    //triangulo
    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.moveTo(50, 700);   
    this.context.lineTo(150, 700); 
    this.context.stroke();
    this.context.moveTo(150, 700);  
    this.context.lineTo(100, 670);  
    this.context.stroke();
    this.context.moveTo(100, 670);  
    this.context.lineTo(50, 700); 
    this.context.stroke();
    this.context.moveTo(50, 700);   
    this.context.lineTo(150, 700); 
    //Linha vertical
    this.context.stroke();
    this.context.moveTo(100, 670);  
    this.context.lineTo(100, 150);  
    this.context.stroke();
    //Linha horizontal
    this.context.moveTo(100, 150);  
    this.context.lineTo(350, 150);  
    this.context.stroke();
    //Linha corda
    this.context.moveTo(350, 150);  
    this.context.lineTo(350, 200);  
    this.context.stroke();
    this.context.closePath();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.context.fillRect(250 + i * 60, 700, 50, 4);
    }
  }

  writeCorrectLetter(letter) {
    let correctLetter = [];
    let letterIndex = this.secretWord.indexOf(letter);
    while(letterIndex != -1) {
      correctLetter.push(letterIndex);
      letterIndex = this.secretWord.indexOf(letter, letterIndex+1);
    }
    for (let i = 0; i <= correctLetter.length; i++) {
      this.context.font='30px Arial'
      this.context.fillText(letter.toUpperCase(), 260 + (correctLetter[i] * 60), 695);
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    if (errorsLeft > 0) {
    this.context.font='30px Arial'
    this.context.fillText(letter.toUpperCase(), 400 + (errorsLeft * 30), 200);
    }
}

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      //Head
      case 9:
        this.context.beginPath();
        this.context.arc(350, 245, 45, 0, Math.PI * 2);
        this.context.lineWidth = 3;
        this.context.strokeStyle = 'black';
        this.context.stroke();
        this.context.closePath();
        break;
      //Body
      case 8:
        this.context.beginPath();
        this.context.moveTo(350, 290);
        this.context.lineTo(350, 450);  
        this.context.stroke();
        this.context.closePath();
        break;
      //Right arm
      case 7:
        this.context.beginPath();
        this.context.moveTo(350, 350);
        this.context.lineTo(440, 280);  
        this.context.stroke();
        this.context.closePath();
        break;
      //Left arm
        case 6:
        this.context.beginPath();
        this.context.moveTo(350, 350);
        this.context.lineTo(260, 280);  
        this.context.stroke();
        this.context.closePath();
        break;
      //Right leg
      case 5:
        this.context.beginPath();
        this.context.moveTo(350, 450);
        this.context.lineTo(440, 550);  
        this.context.stroke();
        this.context.closePath();
        break;
      //Left leg
      case 4:
        this.context.beginPath();
        this.context.moveTo(350, 450);
        this.context.lineTo(260, 550);  
        this.context.stroke();
        this.context.closePath();
        break;
      //Eyes
      case 3:
        this.context.beginPath();
        this.context.arc(335, 232, 5, 0, Math.PI * 2);
        this.context.arc(365, 232, 5, 0, Math.PI * 2);
        this.context.lineWidth = 1;
        this.context.fillStyle = 'black';
        this.context.fill();
        this.context.closePath();
        break;
      //Nose
      case 2:
        this.context.beginPath();
        this.context.arc(350, 270, 8, 0, Math.PI * 2);
        this.context.lineWidth = 1;
        this.context.strokeStyle = 'black';
        this.context.stroke();
        this.context.closePath();
        break;
      //Death
      case 1:
        this.context.beginPath();
        this.context.stroke();
        this.context.moveTo(300, 290);
        this.context.lineTo(400, 290);  
        this.context.moveTo(325, 222); //Left eye
        this.context.lineTo(345, 242);  
        this.context.moveTo(345, 222); 
        this.context.lineTo(325, 242);  
        this.context.moveTo(355, 222); //Right eye
        this.context.lineTo(375, 242);  
        this.context.moveTo(375, 222); 
        this.context.lineTo(355, 242); 
        this.context.lineWidth = 3;
        this.context.strokeStyle = 'red';
        this.context.stroke();
        this.context.closePath();
        this.gameOver();
        break;
    }   
  }

  gameOver() {
    const gameOverImg = new Image();
    gameOverImg.src = './images/gameover.png';
    gameOverImg.onload = () => {
      this.context.drawImage(gameOverImg, 300, 250);
    };
  }

  winner() {
    const winnerGameImg = new Image();
    winnerGameImg.src = './images/awesome.png';
    winnerGameImg.onload = () => {
      this.context.drawImage(winnerGameImg, 200, 80);
    };
  }
}
