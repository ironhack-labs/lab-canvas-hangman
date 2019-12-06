// console.log('heyyyooou');

// let canvas = document.getElementById('hangman');

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.wordToGuess = secretWord;
    // console.log(wordToGuess);
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    // this.ctx.fillRect(0, 0, 1200, 800);
    // console.log('oioioi');
    this.drawLines();
  }

  drawLines() {
    let x = 400;
    let y = 700;


    for (let i = 0; i < this.wordToGuess.length; i += 1) {
      this.ctx.beginPath();
      x = x + 20;
      this.ctx.moveTo(x, y);
      x = x + 40;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }

  writeCorrectLetter(index) {
    // write text
    let positionX = 372;
    let positionY = 680;
    for (let i = 0; i < this.wordToGuess.length; i += 1) {
      positionX += 58;
      if (i === index) {
        this.ctx.font = '46px serif';
        this.ctx.fillText(this.wordToGuess[index], positionX, positionY);
      }
    }

    // call winner
    // this.winner();
  }

  writeWrongLetter(string, errorsLeft) {
    // write text
    this.ctx.font = '48px serif';
    this.ctx.fillText(string, 600, 400);

    // establish the shape to draw -> starts from 1 to 10 and each represents one element
    let shape = 10 - errorsLeft;
    this.drawHangman(shape);
  }

  drawHangman(shape) {

    switch (shape) {
      case 1:
        // drawing base
        this.ctx.beginPath();
        this.ctx.moveTo(250, 650);
        this.ctx.lineTo(200, 700);
        this.ctx.lineTo(300, 700);
        this.ctx.lineTo(250, 650);
        this.ctx.stroke();
        break;
      case 2:
        // drawing hanger height
        this.ctx.beginPath();
        this.ctx.moveTo(250, 650);
        this.ctx.lineTo(250, 300);
        this.ctx.stroke();
        break;
      case 3:
        // drawing hanger top
        this.ctx.beginPath();
        this.ctx.moveTo(250, 300);
        this.ctx.lineTo(420, 300);
        this.ctx.lineTo(420, 350);
        this.ctx.stroke();
        break;
      case 4:
        // drawing head
        this.ctx.beginPath();
        this.ctx.arc(420, 380, 30, 0, Math.PI * 2);
        this.ctx.stroke();
        break;
      case 5:
        // drawing stick body
        this.ctx.beginPath();
        this.ctx.moveTo(420, 410);
        this.ctx.lineTo(420, 520);
        this.ctx.stroke();
        break;
      case 6:
        // drawing left leg
        this.ctx.beginPath();
        this.ctx.moveTo(420, 520);
        this.ctx.lineTo(380, 560);
        this.ctx.stroke();
        break;
      case 7:
        // drawing right leg
        this.ctx.beginPath();
        this.ctx.moveTo(420, 520);
        this.ctx.lineTo(460, 560);
        this.ctx.stroke();
        break;
      case 8:
        // drawing left arm
        this.ctx.beginPath();
        this.ctx.moveTo(420, 430);
        this.ctx.lineTo(380, 490);
        this.ctx.stroke();
        break;
      case 9:
        // drawing right arm
        this.ctx.beginPath();
        this.ctx.moveTo(420, 430);
        this.ctx.lineTo(460, 490);
        this.ctx.stroke();
        break;
      case 10:
        // getting hanged
        this.ctx.beginPath();
        this.ctx.moveTo(420, 300);
        this.ctx.lineTo(420, 340);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(420, 390, 50, Math.PI, 1.5 * Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(400, 390, 30, 0.5 * Math.PI, Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(400, 420);
        this.ctx.lineTo(430, 420);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(420, 420, 8, 1.5 * Math.PI, 2 * Math.PI);
        this.ctx.arc(420, 420, 5, Math.PI, 1.5 * Math.PI);
        this.ctx.stroke();
        this.gameOver();
        break;
      default:
        console.log('nothing to add');
    }
  }

  gameOver() {
    // error with this solved
    let self = this;

    // add image of game over
    let gameOverImage = new Image();
    gameOverImage.src = './images/gameover.png';
    gameOverImage.onload = function () {
      self.ctx.drawImage(gameOverImage, 350, 300);
    };
  }

  winner() {
    // error with this solved
    let self = this;

    // add image of winner
    let winnerImage = new Image();
    winnerImage.src = './images/awesome.png';
    winnerImage.onload = function () {
      self.ctx.drawImage(winnerImage, 100, 100);
    };
  }
}