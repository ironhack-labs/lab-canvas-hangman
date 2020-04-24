class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1000, 1000);
    this.drawLines()

  }

  drawLines() {
    this.ctx.lineWidth = 3;
    let xInicial = 300
    let yFija = 650
    //Iteramos la secretWord parar dibujar una linea para cada caracter
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.moveTo(xInicial, yFija);
      this.ctx.lineTo(xInicial + 40, yFija)
      this.ctx.moveTo(xInicial + 70, yFija)
      xInicial = xInicial + 75;
    }
    this.ctx.stroke()

  }
  writeCorrectLetter(index) {

    let posicionX = 310 + index * 75;
    this.ctx.font = '48px serif';
    this.ctx.fillText(this.secretWord[index], posicionX, 640, 50);
  }
  writeWrongLetter(letter, errorsLeft) {
    let posicionX = 500 + (10 - errorsLeft) * 50;
    this.ctx.font = '48px serif';
    this.ctx.fillText(letter, posicionX, 180, 50);

  }



  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.ctx.beginPath()
        this.ctx.moveTo(200, 600)
        this.ctx.lineTo(250, 650)
        this.ctx.stroke()
        break;
      case 8:
        this.ctx.lineTo(150, 650)
        this.ctx.stroke()
        break;
      case 7:
        this.ctx.closePath()
        this.ctx.stroke()
        break;
      case 6:
        this.ctx.lineTo(200, 100)
        this.ctx.stroke()
        break;
      case 5:
        this.ctx.lineTo(450, 100)
        this.ctx.stroke()
        break;
      case 4:
        this.ctx.lineTo(450, 150)
        this.ctx.stroke()
        break;
      case 3:
        this.ctx.moveTo(450, 200)
        this.ctx.stroke()
        this.ctx.beginPath()
        this.ctx.arc(450, 200, 50, 0, 2 * Math.PI)
        this.ctx.stroke()
        break;
      case 2:
        this.ctx.moveTo(450, 250)
        this.ctx.lineTo(450, 450)
        this.ctx.stroke()
        break;
      case 1:
        this.ctx.lineTo(400, 550)
        this.ctx.stroke()
        break;
      case 0:
        this.ctx.moveTo(450, 450)
        this.ctx.lineTo(500, 550)
        this.ctx.closePath()
        this.ctx.stroke()
        break;
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}