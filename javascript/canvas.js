class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.imgGameOver = new Image();
    this.imgGameOver.src = './images/gameover.png';
    this.imgWinner = new Image();
    this.imgWinner.src = './images/awesome.png';
    this.context.font = "48px verdana";
    this.activeInterval = null;
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
        this.drawRect(500, 500, 100, 100);
        break;
      case 2:
        //PIERNA IZQUIERDA
        this.drawRect(500, 500, -100, 100);
        break;
      case 1:
        //BRAZO DERECHO
        this.drawRect(500, 350, 80, 80);
        break;
      case 0:
        //BRAZO IZQUIERDA
        this.drawRect(500, 350, -80, 80);
        break;
    }
  }

  drawRect(positionX, positionY, lengthLineX = 0, lengthLineY = 0){
    this.activeInterval = true;
    this.context.beginPath();
    this.context.moveTo(positionX, positionY);
    let lineX = 0;
    let lineY = 0;
    const intervalId = setInterval(() => {
      this.context.lineTo(positionX + lineX, positionY + lineY);
      if (lineX !== lengthLineX) {
        if (lengthLineX > 0) {
          lineX++;
        } else if (lengthLineX < 0) {
          lineX--;
        }
      }
      if (lineY !== lengthLineY) {
        if (lengthLineY > 0) {
          lineY++;
        } else if (lengthLineY < 0) {
          lineY--;
        }
      }
      
      this.context.stroke();
      if (lineX === lengthLineX && lineY === lengthLineY) {
        clearInterval(intervalId);
        this.activeInterval = false;
      }
    }, 1);
    this.context.closePath();
  }

  drawCircle(positionX, positionY, radius) {
    this.activeInterval = true;
    this.context.beginPath();
    let perimeter = 0.01;
    const intervalId = setInterval(() => {
      this.context.arc(positionX, positionY, radius, perimeter * Math.PI, perimeter * Math.PI);
      this.context.stroke();
      perimeter += 0.01;
      if (Math.floor(perimeter) === 2) {
        clearInterval(intervalId);
        this.activeInterval = false;
      }
    }, 1);
    this.context.closePath();
  }

  drawTriangle(positionX, positionY) {
    const intervalId1 = setInterval(() => {
      if (!this.activeInterval) {
        this.drawRect(positionX, positionY, 100, 0);
        clearInterval(intervalId1);
      }
    }, 10);
    const intervalId2 = setInterval(() => {
      if (!this.activeInterval) {
        this.drawRect(positionX + positionX, positionY, -50, -50);
        clearInterval(intervalId2);
      }
    }, 10);
    const intervalId3 = setInterval(() => {
      if (!this.activeInterval) {
        this.drawRect((positionX + positionX) - 50, positionY - 50, -50, 50);
        clearInterval(intervalId3);
      }
    }, 10);
  }

  gameOver() {
    this.context.drawImage(this.imgGameOver, 300, 200, this.context.canvas.width / 2, this.context.canvas.height / 2);
  }

  winner() {
    this.context.drawImage(this.imgWinner, 300, 200, this.context.canvas.width / 2, this.context.canvas.height / 2);
  }
}
