class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.wrongNum = 0;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // initialization of the path
    this.context.lineWidth = 4;
    this.context.beginPath();
    // initial values
    let previousX = 220;
    const y = 720;
    // draw a line for each letter of the secret word 
    for (let i=1; i < this.secretWord.length+1; i++) {
      this.context.moveTo(previousX + 20, y);
      this.context.lineTo(previousX + 60, y);
      previousX = previousX + 60;
      // Print 'Wrong Letters'
      this.context.font = '48px sans-serif';
      this.context.fillStyle = 'black';
      this.context.fillText('Wrong Letters:', 650, 230);
    }
    this.context.stroke();
  }

  writeCorrectLetter(letter, index) {
    this.context.font = '48px sans-serif';
    this.context.fillStyle = 'green';
    this.context.fillText(letter.toUpperCase(), 242 + 60*index, 710);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.drawHangman(errorsLeft);
    this.context.font = '48px sans-serif';
    this.context.fillStyle = 'red';
    if (this.wrongNum <= 9) {
      this.context.fillText(letter.toUpperCase(), 650 + 50*this.wrongNum, 300);
    } else {
      this.context.fillText(letter.toUpperCase(), 650 + 50*(this.wrongNum - 10), 360);
    }
    this.wrongNum++;    
  }

  drawHangman(errorsLeft) {
    this.context.lineWidth = 4;
    this.context.beginPath();
    if (errorsLeft <= 9) {
      this.context.moveTo(100, 680);
      this.context.lineTo(30, 720);
      this.context.lineTo(170, 720);
      this.context.closePath();
      this.context.stroke();
    }
    if (errorsLeft <= 8) {
      this.context.beginPath();
      this.context.moveTo(100, 680);
      this.context.lineTo(100, 80);
      this.context.stroke();
    }
    if (errorsLeft <= 7) {
      this.context.beginPath();
      this.context.moveTo(100, 80);
      this.context.lineTo(450, 80);
      this.context.stroke();
    }
    if (errorsLeft <= 6) {
      this.context.beginPath();
      this.context.moveTo(450, 80);
      this.context.lineTo(450, 160);
      this.context.stroke();
    }
    if (errorsLeft <= 5) {
      this.context.beginPath();
      this.context.arc(450, 210, 50, 0, Math.PI * 2);
      this.context.stroke();
    }
    if (errorsLeft <= 4) {
      this.context.beginPath();
      this.context.moveTo(450, 260);
      this.context.lineTo(450, 460);
      this.context.stroke();
    }
    if (errorsLeft <= 3) {
      this.context.beginPath();
      this.context.moveTo(450, 460);
      this.context.lineTo(390, 550);
      this.context.stroke();
    }
    if (errorsLeft <= 2) {
      this.context.beginPath();
      this.context.moveTo(450, 460);
      this.context.lineTo(510, 550);
      this.context.stroke();
    }
    if (errorsLeft <= 1) {
      this.context.beginPath();
      this.context.moveTo(450, 340);
      this.context.lineTo(390, 380);
      this.context.stroke();
    }
    if (errorsLeft <= 0) {
      this.context.beginPath();
      this.context.moveTo(450, 340);
      this.context.lineTo(510, 380);
      this.context.stroke();
    }
  }

  gameOver() {
    const gameOv = new Image();
    gameOv.src = 'images/gameover.png';
    gameOv.addEventListener('load', e => {
      this.context.drawImage(gameOv, 320, 200);
    })
  }

  winner() {
    const awesome = new Image();
    awesome.src = 'images/awesome.png';
    awesome.addEventListener('load', e => {
      this.context.drawImage(awesome, 150, 10);
    });
  }
}
