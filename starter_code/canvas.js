
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {
    let ctx = this.ctx
ctx.clearRect(0,0,1200,800)
ctx.fillStyle ="white"
//horca1
ctx.beginPath();
ctx.moveTo(300,700)
ctx.lineTo(200,750)
ctx.lineTo(400,750)
ctx.lineTo(300,700)
ctx.stroke()
ctx.closePath()
  }

  drawLines(i) { //hacer una linea para una letra
  for(let j = 0 ; j < i ; j++){
    ctx.moveTo(500+(60*j),750)
    ctx.lineTo(550+(60*j),750)
  }
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

  drawHangman(errorHorc) {
if (errorHorc===9) {
   //horca2
   ctx.beginPath();
   ctx.moveTo(300,700)
   ctx.lineTo(300,200)
   ctx.stroke()
   ctx.closePath()
}
if (errorHorc===8){
//horca3
ctx.beginPath();
ctx.moveTo(300,200)
ctx.lineTo(650,200)
ctx.stroke()
ctx.closePath()
}
if (errorHorc===7){
//horca4
ctx.beginPath();
ctx.moveTo(650,200)
ctx.lineTo(650,300)
ctx.stroke()
ctx.closePath()
}
if (errorHorc===6){
//cabeza
ctx.beginPath();
ctx.arc(650, 335, 35, 0, Math.PI * 2)
ctx.stroke()
ctx.closePath()
}
if (errorHorc===5){
//cuerpo
ctx.beginPath();
ctx.moveTo(650,550)
ctx.lineTo(650,370)
ctx.stroke()
ctx.closePath()
}
if (errorHorc===4){
//mizquierdo
ctx.beginPath();
ctx.moveTo(600,350)
ctx.lineTo(650,430)
ctx.stroke()
ctx.closePath()

}
if (errorHorc===3){
//mderecho
ctx.beginPath();
ctx.moveTo(700,350)
ctx.lineTo(650,430)
ctx.stroke()
ctx.closePath()

}
if (errorHorc===2){
//pIz
ctx.beginPath();
ctx.moveTo(650,550)
ctx.lineTo(550,600)//(650,550)
ctx.stroke()
ctx.closePath()

}
if (errorHorc===1){
//pDr
ctx.beginPath();
ctx.moveTo(650,550)
ctx.lineTo(750,600)
ctx.stroke()
ctx.closePath()
}
  }

gameOver() {

  }

winner() {

  }

}

const ctx = document.getElementById('hangman').getContext('2d');


ctx.moveTo(300,700)
ctx.lineTo(300,200)