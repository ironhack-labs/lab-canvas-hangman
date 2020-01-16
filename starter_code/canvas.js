class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    this.index = []
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 5;
  }

  drawLines() {
    let x = 300
    const y = 600
    const number = this.secretWord.length
    this.ctx.font = "20px Georgia"
    this.ctx.fillText(`Intentos Restantes: `, 900, 50)
    for(let i = 0; i < number; i++){
      this.ctx.fillRect(x,y,50,10)
      x = x + 80
      this.index.push(x-70)
    }
  }

  writeCorrectLetter(i, letter) {
    this.ctx.font = "20px Georgia" //estilo mamalon para que la letra se vea grande
    this.ctx.fillText(letter.toUpperCase(), this.index[i], 580)
  }

  writeWrongLetter(letter, intentos) {
    let y = 50
    this.ctx.font = "20px Georgia"
    this.ctx.clearRect(1080, 20, 50, 50)
    for(let i = 0; i < letter.length; i++){
      this.ctx.fillText(intentos, 1080, 50)
      y = y + 20
      this.ctx.fillText(letter[i].toUpperCase(), 1000, y) //ya imprime en la posicion correcta
    }
    this.drawHangman(intentos)
  }
  drawHangman(shape) {
    switch (shape) { 
      case 0: // brazo derecho
      this.ctx.fillRect(145, 395, 30, 5)
      break;
      case 1:// brazo izquierdo
      this.ctx.fillRect(175, 395, 30, 5)
      break;
      case 2:// pierna derecha
      this.ctx.fillRect(145, 445, 30, 5)
      break;
      case 3:// pierna izquierda
      this.ctx.fillRect(175, 445, 30, 5)
      break;
      case 4: // cuerpo
      this.ctx.fillRect(175, 365, 5, 80)
      break;
      case 5: // cabeza aka cubo
      this.ctx.strokeRect(155, 325, 40, 40)
      break;
      case 6: // corte hacia el ahorcado 
      this.ctx.fillRect(170, 300, 10, 25)
      break;
      case 7: // corte del triangulo 
      this.ctx.fillRect(70, 300, 100, 10)
      break;
      case 8:// palo del triangulo
      this.ctx.fillRect(70, 300, 10, 250)
      break;
      case 9:// cuadrado aka base
      this.ctx.fillRect(50, 550, 50,50)
      break;
    }
  }

  gameOver() {
    let img = new Image()
    img.src = './images/gameover.png'
    this.ctx.drawImage(img, 0, 0)
  }

  winner() {
    let img = new Image()
    img.src = "./images/awesome.png"
    this.ctx.drawImage(img, 0, 0)
  }

}