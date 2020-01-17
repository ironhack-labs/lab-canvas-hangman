
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord
    this.ctx = document.getElementById('canvasHang').getContext('2d')
    this.linesx = 500
    this.linesy = 600
    this.wordArr = this.secretWord.split("")
  }

  createBoard(){
    this.drawLines()
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

  writeCorrectLetter(index){

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}
