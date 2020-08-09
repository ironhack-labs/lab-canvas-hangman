class HangmanCanvas {
  constructor(secretWord) {

    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord;

    this.SPACE_WIDTH = 10;
    this.LINE_WIDTH = 60;
    this.TOP_MARGIN = 700;
    this.LEFT_MARGIN = 60;

    this.lettersX = [];

  }

  createBoard() {

    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    this.drawLines();
    
  }

  drawLines() {

    const secretLength = this.secretWord.length;
    const spaceLength = secretLength - 1;

    const width = (secretLength * this.LINE_WIDTH) + (spaceLength * this.SPACE_WIDTH);
    const startingPoint = (this.canvas.width / 2) - (width / 2);

    for (let i = 0; i < secretLength; i++) {
      
      this.ctx.beginPath();

      this.ctx.moveTo(startingPoint + (i * this.LINE_WIDTH) + (i * this.SPACE_WIDTH), this.TOP_MARGIN);

      this.lettersX.push(startingPoint + (i * this.LINE_WIDTH) + (i * this.SPACE_WIDTH));

      this.ctx.lineTo(startingPoint + (i * this.LINE_WIDTH) + (i * this.SPACE_WIDTH) + this.LINE_WIDTH, this.TOP_MARGIN);

      this.ctx.stroke();
      this.ctx.closePath();

    }

  }
  
  writeCorrectLetter(letter) {

    this.ctx.font = `${this.LINE_WIDTH}px Monaco`;
    var indexes = [], i;

    for (i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) indexes.push(i);
    }

    for (let index of indexes) {
      this.ctx.fillText(`${letter}`, this.lettersX[index], this.TOP_MARGIN - 10);
    }

  }

  writeWrongLetter(letter, errors) {

    console.log(errors);
    this.ctx.font = "20px Monaco";

    let height = errors * this.LINE_WIDTH + this.LEFT_MARGIN;

    this.ctx.fillText(`${letter}`, this.LEFT_MARGIN, height);

  }

  drawHangman(errors) {
    if (errors === 0) {
      this.ctx.beginPath();
      this.ctx.moveTo(422, 600);
      this.ctx.lineTo(572, 600);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(497, 600);
      this.ctx.lineTo(497, 200);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 2) {
      this.ctx.beginPath();
      this.ctx.moveTo(497, 200);
      this.ctx.lineTo(697, 200);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 3) {
      this.ctx.beginPath();
      this.ctx.moveTo(697, 200);
      this.ctx.lineTo(697, 300);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 4) {
      this.ctx.beginPath();
      this.ctx.arc(697, 324, 40, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 5) {
      this.ctx.beginPath();
      this.ctx.moveTo(697, 364);
      this.ctx.lineTo(697, 464);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 6) {
      this.ctx.beginPath();
      this.ctx.moveTo(697, 375);
      this.ctx.lineTo(778, 432);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 7) {
      this.ctx.beginPath();
      this.ctx.moveTo(697, 464);
      this.ctx.lineTo(747, 549);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 8) {
      this.ctx.beginPath();
      this.ctx.moveTo(697, 464);
      this.ctx.lineTo(646, 549);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    } else if (errors === 9) {
      this.ctx.beginPath();
      this.ctx.moveTo(697, 375);
      this.ctx.lineTo(615, 432);
      this.ctx.stroke();
      this.ctx.closePath();
      return errors;
    }
  }

  gameOver() {

    const width = 570;
    const height = 240;

    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    var loseImg = new Image();
    loseImg.src = '../images/gameover.png';
    let centerX = this.canvas.width / 2 - width / 2
    let centerY = this.canvas.height / 2 - height / 2

    loseImg.onload = () => {
      this.ctx.drawImage(loseImg, centerX, centerY, width, height);
    };
  }

  winner() {
    const width = 872;
    const height = 618;

    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    var goalImg = new Image();

    goalImg.onload = () => {
      this.ctx.drawImage(goalImg, centerX, centerY, width, height);
    };

    goalImg.src = '../images/awesome.png';

    let centerX = this.canvas.width / 2 - width / 2
    let centerY = this.canvas.height / 2 - height / 2
    
  }
}
