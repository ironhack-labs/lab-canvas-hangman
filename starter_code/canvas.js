
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord
    this.ctx = document.getElementById('canvasHang').getContext('2d')
    this.linesx = 500
    this.linesy = 600
    this.wordArr = this.secretWord.split("") //marca error por alguna razon
  }

  createBoard(){
    this.drawLines() //pone base de hangman y lineas palabra.
  }

  drawLines(){
    this.ctx.beginPath()
    this.ctx.moveTo(100, 700) //triangulo
    this.ctx.lineTo(200, 600)
    this.ctx.lineTo(300, 700)
    this.ctx.fill();
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.moveTo(200, 600) //linea arriba triangulo
    this.ctx.lineTo(200, 300)
    this.ctx.stroke()
    this.ctx.closePath()

    //convertir el secretWord a array y pintar por cada iteracion. LIJTO
    this.wordArr.forEach(letter => {
      this.ctx.beginPath()
      this.ctx.moveTo(this.linesx, this.linesy)
      this.ctx.lineTo(this.linesx+50, this.linesy)
      this.ctx.stroke()
      this.ctx.closePath()
      this.linesx += 60
    });
  }

  writeCorrectLetter(index){ //se le pasa e.key = index
    //let rightLetter = index[3].toLowerCase() //saca la letra que pico
    let i = this.wordArr.indexOf(index) // checa el index de esa letra en la palabrasecreta
    this.ctx.fillText(this.secretWord[i], this.linesx, this.linesy, 40); //lo pinta, usando indexNotation, si exsite eso
    this.ctx.closePath()
  }

  writeWrongLetter(letter, errorsLeft) {
    let le = index[3] //saca la letra que pico
    let i = this.wordArr.indexOf(rightLetter) // checa el index de esa letra en la palabrasecreta
    this.ctx.fillText(this.secretWord[i], 10, 30); //lo pinta, usando indexNotation, si exsite eso
    this.ctx.closePath()
  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}
