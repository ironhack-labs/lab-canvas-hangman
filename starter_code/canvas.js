
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {
    let ctx = this.ctx
this.ctx.clearRect(0,0,1200,800)
this.ctx.fillStyle ="white"
//horca1
ctx.beginPath();
ctx.moveTo(300,700)
ctx.lineTo(200,750)
ctx.lineTo(400,750)
ctx.lineTo(300,700)
ctx.stroke()
ctx.closePath()
  }

  drawLines() {

  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {
    if(letter===errorsLeft){
      this.drawLines
      if(errorsLeft>0){
        this.drawLines
      }
    }

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}

const ctx = document.getElementById('hangman').getContext('2d');
//horca2
ctx.beginPath();
ctx.moveTo(300,700)
ctx.lineTo(300,200)
ctx.stroke()
ctx.closePath()
//horca3
ctx.beginPath();
ctx.moveTo(300,200)
ctx.lineTo(650,200)
ctx.stroke()
ctx.closePath()
//horca4
ctx.beginPath();
ctx.moveTo(650,200)
ctx.lineTo(650,300)
ctx.stroke()
ctx.closePath()


//cabeza
ctx.beginPath();
ctx.arc(650, 335, 35, 0, Math.PI * 2)
ctx.stroke()
ctx.closePath()

//cuerpo
ctx.beginPath();
ctx.moveTo(650,550)
ctx.lineTo(650,370)
ctx.stroke()
ctx.closePath()

//mizquierdo
ctx.beginPath();
ctx.moveTo(600,350)
ctx.lineTo(650,430)
ctx.stroke()
ctx.closePath()

ctx.fill()
//mderecho
ctx.beginPath();
ctx.moveTo(700,350)
ctx.lineTo(650,430)
ctx.stroke()
ctx.closePath()

ctx.fill()
//pIz
ctx.beginPath();
ctx.moveTo(650,550)
ctx.lineTo(550,600)//(650,550)
ctx.stroke()
ctx.closePath()

ctx.fill()
//pDr
ctx.beginPath();
ctx.moveTo(650,550)
ctx.lineTo(750,600)
ctx.stroke()
ctx.closePath()