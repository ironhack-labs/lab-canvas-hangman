class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementsByTagName("canvas")[0];
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // base
    this.ctx.beginPath();
    this.ctx.moveTo(150, this.canvas.height - 50);
    this.ctx.lineTo(220, this.canvas.height - 50);
    this.ctx.lineTo(185, this.canvas.height - 80);
    this.ctx.fill();
    this.ctx.closePath();
  }
  drawLines() {
    // Lines for letters
    for (let x = 0; x < this.secretWord.length; x++) {
      this.ctx.beginPath();
      this.ctx.moveTo(300 + x * 50 + 15, this.canvas.height - 50);
      this.ctx.lineTo(300 + x * 50 + 50, this.canvas.height - 50);
      this.ctx.stroke();

      this.ctx.closePath();
    }
  }


  writeCorrectLetter(guessedLetter) {
    // Print correct letters above lines

    const guessedWord = arrayWithGuessesLetters(this.secretWord, guessedLetter);

    guessedWord.forEach((letter, positionX) => {
      this.ctx.font = '3rem Arial';
      this.ctx.fillText(letter, 300 + positionX * 50 + 25, this.canvas.height - 60);
    });
  }


  writeWrongLetter(letters) {
    // Print wrong letters

    letters.forEach((letter, positionX) => {
      this.ctx.font = '3rem Arial';
      this.ctx.fillText(letter, 550 + positionX * 50 + 25, 300);
    });
  }


  drawHangman(stroke) {
    switch (stroke) {

      case 'line1':
        this.ctx.beginPath();
        this.ctx.moveTo(185, this.canvas.height - 80);
        this.ctx.lineTo(185, 200);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'line2':
        this.ctx.beginPath();
        this.ctx.moveTo(185, 200);
        this.ctx.lineTo(450, 200);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'line3':
        this.ctx.beginPath();
        this.ctx.moveTo(450, 200);
        this.ctx.lineTo(450, 250);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'head':
        this.ctx.beginPath();
        this.ctx.arc(450, 300, 50, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'body':
        this.ctx.beginPath();
        this.ctx.moveTo(450, 350);
        this.ctx.lineTo(450, 520);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'left-arm':
        this.ctx.beginPath();
        this.ctx.moveTo(450, 350);
        this.ctx.lineTo(400, 420);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'right-arm':
        this.ctx.beginPath();
        this.ctx.moveTo(450, 350);
        this.ctx.lineTo(500, 420);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'left-leg':
        this.ctx.beginPath();
        this.ctx.moveTo(450, 520);
        this.ctx.lineTo(400, 590);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'right-leg':
        this.ctx.beginPath();
        this.ctx.moveTo(450, 520);
        this.ctx.lineTo(500, 590);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'face':
        this.ctx.font = '15px Arial';
        this.ctx.strokeText('X          X', 420, 300);
        this.ctx.beginPath();
        this.ctx.moveTo(420, 320);
        this.ctx.lineTo(480, 320);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
    }
  }
  gameOver() {
    const img = new Image();
    img.src = 'images/gameover.png';
    img.onload = () => {
      this.ctx.drawImage(img, 300, 300);
    };
  }
  winner() {
    const img = new Image();
    img.src = 'images/awesome.png';
    img.onload = () => {
      this.ctx.drawImage(img, 200, 100);
    };
  }
}

function arrayWithGuessesLetters(word, letters) {
  return word.split('').map(letter => {
    return letters.indexOf(letter) !== -1 ? letter : '';
  });
}