class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.error = 0;
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1400, 1400);
    this.drawLines();
  }

  drawLines() {
    this.context.lineWidth = 4;
    this.context.beginPath();
    let previousX = 220;
    const y = 720;
    for (let i=1; i < this.secretWord.length+1; i++) {
      this.context.moveTo(previousX + 20, y);
      this.context.lineTo(previousX + 60, y);
      previousX = previousX + 60;
      this.context.font = '40px Times New Romnan';
      this.context.fillStyle = 'black';
      this.context.fillText('Wrong Letters:', 650, 230);
    }
    this.context.stroke();
  }

  writeCorrectLetter(letter, index) {
    this.context.font = '40px Times New Romnan';
    this.context.fillStyle = 'black';
    this.context.fillText(letter.toUpperCase(), 242 + 60*index, 710);
  }

  writeWrongLetter(letter, errors) {
    this.drawHangman(errors);
    this.context.font = '40px Times New Romnan';
    this.context.fillStyle = 'black';
    if (this.error <= 9) {
      this.context.fillText(letter.toUpperCase(), 650 + 50*this.error, 300);
    } else {
      this.context.fillText(letter.toUpperCase(), 650 + 50*(this.error - 10), 360);
    }
    this.error++;    
  }

  drawHangman(errors) {
    this.context.lineWidth = 4;
    this.context.beginPath();
    if (errors <= 9) {
      this.context.moveTo(100, 680);
      this.context.lineTo(30, 720);
      this.context.lineTo(170, 720);
      this.context.closePath();
      this.context.stroke();
    }
    if (errors <= 8) {
      this.context.beginPath();
      this.context.moveTo(100, 680);
      this.context.lineTo(100, 80);
      this.context.stroke();
    }
    if (errors <= 7) {
      this.context.beginPath();
      this.context.moveTo(100, 80);
      this.context.lineTo(450, 80);
      this.context.stroke();
    }
    if (errors <= 6) {
      this.context.beginPath();
      this.context.moveTo(450, 80);
      this.context.lineTo(450, 160);
      this.context.stroke();
    }
    if (errors <= 5) {
      this.context.beginPath();
      this.context.arc(450, 210, 50, 0, Math.PI * 2);
      this.context.stroke();
    }
    if (errors <= 4) {
      this.context.beginPath();
      this.context.moveTo(450, 260);
      this.context.lineTo(450, 460);
      this.context.stroke();
    }
    if (errors <= 3) {
      this.context.beginPath();
      this.context.moveTo(450, 460);
      this.context.lineTo(390, 550);
      this.context.stroke();
    }
    if (errors <= 2) {
      this.context.beginPath();
      this.context.moveTo(450, 460);
      this.context.lineTo(510, 550);
      this.context.stroke();
    }
    if (errors <= 1) {
      this.context.beginPath();
      this.context.moveTo(450, 340);
      this.context.lineTo(390, 380);
      this.context.stroke();
    }
    if (errors <= 0) {
      this.context.beginPath();
      this.context.moveTo(450, 340);
      this.context.lineTo(510, 380);
      this.context.stroke();
    }
  }

  gameOverer() {
    const gameOver = new Image();
    gameOver.src = 'images/gameOverer.png';
    gameOver.addEventListener('load', i => { this.context.drawImage(gameOverer, 320, 200); })
  }

  winner() {
    const awesome = new Image();
    awesome.src = 'images/awesome.png';
    awesome.addEventListener('load', i => { this.context.drawImage(awesome, 150, 10); });
  }
}