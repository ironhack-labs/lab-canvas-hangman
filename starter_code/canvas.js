class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.img = new Image();
  }
  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800)
    this.ctx.lineWidth = 4;
  }
  drawLines() {
    let lines = this.secretWord.length * 100 + 300
    for (let i = 300; i < lines; i += 100) {
      this.ctx.beginPath()
      this.ctx.moveTo(i, 750);
      this.ctx.lineTo(i + 70, 750)
      this.ctx.stroke()
    }

    this.ctx.beginPath()
    this.ctx.moveTo(150, 750);
    this.ctx.lineTo(250, 750);
    this.ctx.lineTo(200, 700);
    this.ctx.lineTo(150, 750);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(200, 700)
    this.ctx.lineTo(200, 150)
    this.ctx.lineTo(400, 150)
    this.ctx.lineTo(400, 200)
    this.ctx.stroke();


  }
  writeCorrectLetter(index) {
    let loop = this.secretWord.length;
    for (let i = 0; i < loop; i += 1) {
      if (this.secretWord[i] === index.key.toUpperCase()) {
        let drawLetter = this.secretWord[i]
        this.ctx.font = "60px Georgia";
        this.ctx.fillText(drawLetter, 310 + i * 100, 740);
      }
    }
  }
  writeWrongLetter(letter, errorsleft) {
    let x = letter.join(' - ').toUpperCase()
    this.ctx.font = "50px Georgia";
    this.ctx.fillText(x, 450, 180);
    this.ctx.fillText('Pressed Letters', 550, 100);

    this.ctx.font = "50px Georgia";
    this.ctx.fillText('Errors Left:', 800, 300);
    this.ctx.clearRect(900, 250, 400, 200);
    this.ctx.fillText(errorsleft, 1000, 300);
  }

  drawHangman(shape) {
    switch(shape){
    case 'head':
    this.ctx.beginPath();
    this.ctx.arc(400, 250, 50, 0, 7);
    this.ctx.stroke();
    break;

    case 'body':
    this.ctx.beginPath();
    this.ctx.moveTo(400,300)
    this.ctx.lineTo(400,500)
    this.ctx.stroke();
    break;

    case 'legLeft':
    this.ctx.beginPath();
    this.ctx.moveTo(400,500);
    this.ctx.lineTo(330,570);
    this.ctx.stroke();
    break;

    case 'legRigth':
    this.ctx.beginPath();
    this.ctx.moveTo(400,500);
    this.ctx.lineTo(470,570);
    this.ctx.stroke();
    break;

    case 'rigthArm':
    this.ctx.beginPath();
    this.ctx.moveTo(400,380);
    this.ctx.lineTo(480,330);
    this.ctx.stroke();
    break;

    case 'leftArm':
    this.ctx.beginPath();
    this.ctx.moveTo(400,380);
    this.ctx.lineTo(320,330);
    this.ctx.stroke();   
    break;
    default:
    } 
  }

  gameOver(isLoser) {
    if(isLoser === true){
      this.img.src = 'images/gameover.png';
      this.img.onload = () => {
        this.ctx.drawImage(this.img, 300, 300);
      };
    }
  }


  winner(isWinner) {
    if(isWinner === false){
      this.img.src = 'images/awesome.png';
      this.img.onload = () => {
        this.ctx.drawImage(this.img, 150, 80);
      };
    }
  }
}
