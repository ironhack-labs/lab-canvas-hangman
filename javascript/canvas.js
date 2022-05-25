class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.imgGameOver = new Image();
    this.imgGameOver.src = './images/gameover.png';
    this.imgWinner = new Image();
    this.imgWinner.src = './images/awesome.png';
    this.context.font = "48px verdana";
  }

  createBoard() {
    const prevStyle = this.context.fillStyle;
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.context.fillStyle = prevStyle;
    this.drawLines();
  }

  drawLines() {
    let startLines = 250;
    const widthLines = 50;
    const spaceBetweenLines = 25;
    for(let i = 0; i < this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(startLines, this.context.canvas.height - 50);
      this.context.lineTo(startLines + widthLines, this.context.canvas.height - 50);
      this.context.stroke();
      this.context.closePath();
      startLines += widthLines + spaceBetweenLines;
    }
  }

  writeCorrectLetter(index) {
    let startLetters = 260;
    const widthLetters = 50;
    const spaceBetweenLetters = 25;
    for(let i = 0; i < this.secretWord.length; i++){
      if (index === hangman.secretWord[i]) {
        this.context.fillText(index.toUpperCase(), startLetters, this.context.canvas.height - 70);
      }
      startLetters += widthLetters + spaceBetweenLetters;
    }
  }

  writeWrongLetter() {
    let positionX = 850;
    let positionY = 250;
    const widthLetters = 50;
    const spaceBetweenLetters = 15;
    for(let i = 0; i < hangman.letters.length; i++){
      this.context.fillText(hangman.letters[i].toUpperCase(), positionX, positionY);
      if ((positionX + widthLetters + spaceBetweenLetters) > this.context.canvas.width - widthLetters) {
        positionX = 850;
        positionY += 50;
      } else {
        positionX += widthLetters + spaceBetweenLetters;
      }
    }
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft) {
      case 9:
        //BASE
        this.drawTriangle(100, 750);
        break;
      case 8:
        //PRIMERA VIGA
        this.drawRect(150, 700, 0, -550);
        break;
      case 7:
        //SEGUNDA VIGA
        this.drawRect(150, 150, 350, 0);
        break;
      case 6:
        //TERCERA VIGA
        this.drawRect(500, 150, 0, 50);
        break;
      case 5:
        //CABEZA
        this.drawCircle(500, 250, 50);
        break;
      case 4:
        //CUERPO
        this.drawRect(500, 300, 0, 200);
        break;
      case 3:
        //PIERNA DERECHA
        this.drawRect(500, 500, 80, 100);
        break;
      case 2:
        //PIERNA IZQUIERDA
        this.drawRect(500, 500, -80, 100);
        break;
      case 1:
        //BRAZO DERECHO
        this.drawRect(500, 350, 80, 50);
        break;
      case 0:
        //BRAZO IZQUIERDA
        this.drawRect(500, 350, -80, 50);
        break;
    }
  }

  drawRect(positionX, positionY, lengthLineX = 0, lengthLineY = 0){
    this.context.beginPath();
    this.context.moveTo(positionX, positionY);
    this.context.lineTo(positionX + lengthLineX, positionY + lengthLineY);
    this.context.stroke();
    this.context.closePath();
  }

  drawCircle(positionX, positionY, radius) {
    this.context.beginPath();
    this.context.arc(positionX, positionY, radius, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
  }

  drawTriangle(positionX, positionY) {
    this.context.beginPath();
    this.context.moveTo(positionX, positionY);
    this.context.lineTo(positionX + positionX, positionY);
    this.context.stroke();
    this.context.lineTo((positionX + positionX) - 50, positionY - 50);
    this.context.stroke();
    this.context.lineTo(positionX, positionY);
    this.context.stroke();
    this.context.closePath();
  }

  gameOver() {
    this.context.drawImage(this.imgGameOver, 300, 200, this.context.canvas.width / 2, this.context.canvas.height / 2);
  }

  winner() {
    this.context.drawImage(this.imgWinner, 300, 200, this.context.canvas.width / 2, this.context.canvas.height / 2);
  }
}
