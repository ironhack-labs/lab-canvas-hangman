class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.letterPositionX = [];
    this.wrongLettersPositionX = 600;
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.createBoard();
    this.drawLines(this.secretWord);

  }

  createBoard() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(50, 750);
    this.ctx.lineTo(200, 750);
    this.ctx.lineTo(125, 700);
    this.ctx.lineTo(50, 750);
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(125, 750);
    this.ctx.lineTo(125, 100);
    this.ctx.lineTo(400, 100);
    this.ctx.lineTo(400, 200);
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
    this.ctx.closePath();
  }
  drawLines(secretWord) {
    let xPosition = 250;
    let xPositionArray = [];

    secretWord.split('').forEach(element => {
      this.ctx.beginPath();
      this.ctx.moveTo(xPosition, 750);
      this.ctx.lineTo(xPosition + 40, 750);
      this.ctx.strokeStyle = 'black';
      this.ctx.stroke();
      this.ctx.closePath();

      // save the lines slots position x in a Array
      this.letterPositionX.push(xPosition);

      // create new line position
      xPosition += 50;
    });
    console.log(this.letterPositionX);

  }
  writeCorrectLetter(index) {

    console.log('writeCorrectLetter: ' + this.letterPositionX);

    this.ctx.lineWidth = 2;
    this.ctx.font = '35px Helvetica'
    this.ctx.strokeText(this.secretWord[index], this.letterPositionX[index], 700)
    this.ctx.fillStyle = 'black';

  }
  writeWrongLetter(letters, errorsLeft) {
    //this.ctx.clearRect(0, 0, 500, 500);
    this.ctx.font = '25px Arial'
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(letters, this.wrongLettersPositionX, 400)
    this.ctx.fillStyle = 'black';
    this.wrongLettersPositionX += 40;

    // this.ctx.font = '25px Helvetica'
    // this.ctx.strokeText(errorsLeft, 600, 450)
    // this.ctx.fillStyle = 'black';
    // this.wrongLettersPositionX += 40;


    this.drawHangman(errorsLeft);
  }

  drawHangman(shape) {

    switch (shape) {

      case 9:
        this.ctx.beginPath();
        this.ctx.arc(400, 240, 40, 0, Math.PI * 2);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();

        break;
      case 8:
          this.ctx.beginPath();
          this.ctx.lineWidth = 5;
          this.ctx.moveTo(400, 280);
          this.ctx.lineTo(400, 450);
          this.ctx.strokeStyle = 'black';
          this.ctx.stroke();
          this.ctx.closePath();

        break;

      case 7:
          this.ctx.beginPath();
          this.ctx.lineWidth = 5;
          this.ctx.moveTo(400, 450);
          this.ctx.lineTo(350, 600);
          this.ctx.strokeStyle = 'black';
          this.ctx.stroke();
          this.ctx.closePath();

        break;

      case 6:
          this.ctx.beginPath();
          this.ctx.lineWidth = 5;
          this.ctx.moveTo(400, 450);
          this.ctx.lineTo(450, 600);
          this.ctx.strokeStyle = 'black';
          this.ctx.stroke();
          this.ctx.closePath();

        break;

        case 5:
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.moveTo(350, 600);
            this.ctx.lineTo(320, 600);
            this.ctx.strokeStyle = 'black';
            this.ctx.stroke();
            this.ctx.closePath();

        break;

        case 4:
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.moveTo(450, 600);
            this.ctx.lineTo(480, 600);
            this.ctx.strokeStyle = 'black';
            this.ctx.stroke();
            this.ctx.closePath();

        break;

        case 3:
            this.ctx.beginPath();
            this.ctx.lineWidth = 5;
            this.ctx.moveTo(400, 300);
            this.ctx.lineTo(350, 400);
            this.ctx.strokeStyle = 'black';
            this.ctx.stroke();
            this.ctx.closePath();

        break;

        case 2:
            this.ctx.beginPath();
            this.ctx.lineWidth = 5;
            this.ctx.moveTo(400, 300);
            this.ctx.lineTo(450, 400);
            this.ctx.strokeStyle = 'black';
            this.ctx.stroke();
            this.ctx.closePath();

        break;

        case 1:
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.moveTo(350, 400);
            this.ctx.lineTo(320, 400);
            this.ctx.strokeStyle = 'black';
            this.ctx.stroke();
            this.ctx.closePath();

        break;

        case 0:
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.moveTo(450, 400);
            this.ctx.lineTo(480, 400);
            this.ctx.strokeStyle = 'black';
            this.ctx.stroke();
            this.ctx.closePath();

        break;

      default:
    }
  }
  gameOver() {
    const img = new Image();
    img.src = './images/gameover.png';
    img.onload = () => {
      this.ctx.drawImage(img, 300, 300);
    };

    //this.ctx.drawImage('./images/gameover.png', 300, 300);

   }
  winner() { 
    const img = new Image();
    img.src = './images/awesome.png';
    img.onload = () => {
      this.ctx.drawImage(img, 150, 100);
    };
  }
}