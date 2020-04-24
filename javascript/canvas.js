class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    // ... your code goes here
    this.wordToDraw = secretWord;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.x = 0;
    this.y = 0;
    this.startingPointAhorcado = [50, 700];
    this.startingPointRayas = [200,700];
    this.separacionLetras = 70; //Esto hace que cada letra tenga una separacion de 20px
    this.longitudRayas = 50;
    this.posicionRayas = {
      posX: [],
      posY: this.startingPointRayas[1]
    };
    this.wrongLetter = {
      posX: [],
      posY: 0,
    };
    this.nextFromAhorcado = [];
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,this.width,this.height);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    this.x = this.startingPointRayas[0];
    this.y = this.startingPointRayas[1];
    this.context.fillStyle = 'black';
    this.context.lineWidth = 5;
    this.context.moveTo(this.x,this.y);
    [...this.wordToDraw].forEach(letter => {
      this.context.lineTo(this.x + this.longitudRayas,this.y);
      this.context.stroke();
      this.posicionRayas.posX.push(this.x);
      this.x += this.separacionLetras;
      this.context.moveTo(this.x, this.y);
    });
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.x = this.startingPointRayas[0];
    this.y = this.startingPointRayas[1] - 20;
    this.context.font = "36px Arial";
    this.context.moveTo(this.posicionRayas.posX[index], this.posicionRayas.posY);
    this.context.fillText(this.wordToDraw[index].toUpperCase(), this.posicionRayas.posX[index] + (this.longitudRayas / 4), this.posicionRayas.posY - 10, this.longitudRayas);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = "24px Arial";
    this.context.fillText(letter.toUpperCase(), 700 + (50 * errorsLeft), 200);
  }

  drawFirstError(){
    this.x = this.startingPointAhorcado[0];
    this.y = this.startingPointAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x + 70, this.y);
    this.x += 70;
    this.context.lineTo(this.x - 35, this.y - 35);
    this.x -= 35;
    this.y -= 35;
    this.context.closePath()
    this.context.stroke();
    this.nextFromAhorcado = [this.x,this.y];
  }

  drawSecondError(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x,this.y);
    this.context.lineTo(this.x, this.y - 500);
    this.y -= 500;
    this.context.closePath();
    this.context.stroke();
    this.nextFromAhorcado = [this.x,this.y];
  }

  drawThirdError()
  {
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x + 250, this.y);
    this.x += 250;
    this.context.closePath();
    this.context.stroke();
    this.nextFromAhorcado = [this.x, this.y];
  }

  drawFourthError(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x, this.y + 50);
    this.y += 50;
    this.context.closePath();
    this.context.stroke();
    this.nextFromAhorcado = [this.x, this.y];
  }

  drawCabeza(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.arc(this.x, this.y + 50, 50, 0, Math.PI * 2);
    this.y += 100;
    this.context.closePath();
    this.context.stroke();
    this.nextFromAhorcado = [this.x, this.y];
  }

  drawCuerpo(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x, this.y + 100);
    this.y += 100;
    this.context.closePath();
    this.context.stroke();
    this.nextFromAhorcado = [this.x, this.y];
  }

  drawBrazoUno(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y - 70);
    this.context.lineTo(this.x + 30, this.y + 30);
    this.context.closePath();
    this.context.stroke();
  }

  drawBrazoDos(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y - 70);
    this.context.lineTo(this.x - 30, this.y + 30);
    this.context.closePath();
    this.context.stroke();
  }

  drawPiernaUno(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x + 40, this.y + 70);
    this.context.closePath();
    this.context.stroke();
  }

  drawPiernaDos(){
    this.x = this.nextFromAhorcado[0];
    this.y = this.nextFromAhorcado[1];
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x - 40, this.y + 70);
    this.context.closePath();
    this.context.stroke();
  }



  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 9:
        this.drawFirstError();
        break;
      case 8:
        this.drawSecondError();
        break;
      case 7:
        this.drawThirdError();
        break;
      case 6:
        this.drawFourthError();
        break;
      case 5:
        this.drawCabeza();
        break;
      case 4:
        this.drawCuerpo();
        break;
      case 3:
        this.drawBrazoUno();
        break;
      case 2:
        this.drawBrazoDos();
        break;
      case 1:
        this.drawPiernaUno();
        break;
      case 0:
        this.drawPiernaDos();
      default:
        break;
    }
  }

  gameOver() {
    // ... your code goes here
    const gOverImg = new Image();
    gOverImg.src = 'images/gameover.png';
    gOverImg.onload = () => {
      this.context.drawImage(gOverImg, 200,200);
    }
  }

  

  winner() {
    // ... your code goes here
    const winImg = new Image();
    winImg.src = 'images/awesome.png';
    winImg.onload = () => {
      this.context.drawImage(winImg, 0, 0);
    }

  }
}
