class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.canvas = document.getElementById('hangman');
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.length);
    this.drawLines();
  }

  drawLines() {
    let x = 300;
    let y = 600;

    this.context.beginPath();
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(x, y);
      this.context.lineTo(x + 50, y);
      x += 70;
    }
      this.context.strokeStyle = 'black';
      this.context.lineWidth = 2;
      this.context.stroke();
  }

  writeCorrectLetter(index) {
    this.context.font = '20px arial';
    this.context.beginPath();
    this.context.fillText(this.secretWord[index].toUpperCase(), 315 + (70 * index), 585);
  }

  writeWrongLetter(letter, errorsLeft) {
      if (errorsLeft > 0) {
      this.context.font = '20px arial';
      this.context.beginPath();
      this.context.fillText(letter.toUpperCase(), 700 + (50 * errorsLeft), 100);
      }
  }

  drawHangman(errorsLeft) {
    this.context.strokeStyle = 'black';
    switch(errorsLeft) {
      case 9: 
      // first part triangle
      this.context.beginPath();
      this.context.moveTo(100, 600);
      this.context.lineTo(200, 600);
      this.context.stroke();
      break;
    case 8:
      // second part triangle
      this.context.moveTo(200, 600);
      this.context.lineTo(150, 570);
      this.context.stroke();
      break;
    case 7:
      // third part triangle
      this.context.moveTo(150, 570);
      this.context.lineTo(100, 600);
      this.context.stroke();
      break;
    case 6:
      // vertical line
      this.context.moveTo(150, 570);
      this.context.lineTo(150, 100);
      this.context.stroke();
      break;
    case 5:
      // horizontal line
      this.context.moveTo(150, 100);
      this.context.lineTo(450, 100);
      this.context.stroke();
      break;
    case 4:
      // small vertical line
      this.context.moveTo(450, 100);
      this.context.lineTo(450, 150);
      this.context.stroke();
      break;
    case 3:
      // head
      this.context.beginPath();
      this.context.arc(450, 190, 40, 0, 2 * Math.PI);
      this.context.stroke();
      this.context.closePath();
      break;
    case 2:
      // body
      this.context.beginPath();
      this.context.moveTo(450, 230);
      this.context.lineTo(450, 400);
      this.context.stroke();
      break;
    case 1:
      // left leg
      this.context.moveTo(450, 400);
      this.context.lineTo(400, 450);
      this.context.stroke();
      break;
    case 0:
      // right leg
      this.context.moveTo(450, 400);
      this.context.lineTo(500, 450);
      this.context.stroke();
      break;
    }
  }

  gameOver() {
    const imageGameOver = new Image();
    imageGameOver.src = '/images/gameover.png';
    imageGameOver.onload = function() {
      this.context = document.getElementById('hangman').getContext('2d');
      this.context.drawImage(imageGameOver, 400, 200);
    };
  }

  winner() {
    const imageWinner = new Image();
    imageWinner.src = '/images/awesome.png';
    imageWinner.onload = function() {
      this.context = document.getElementById('hangman').getContext('2d');
      this.context.drawImage(imageWinner, 200, 50);
    };
  }

}