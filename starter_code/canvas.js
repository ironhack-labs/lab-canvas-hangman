
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d')
    this.img = new Image()
    this.img.src = "./images/gameover.png"
       this.img2 = new Image()
    this.img2.src = "./images/awesome.png"
    
  }

  createBoard() {
    let ctx = this.ctx
ctx.clearRect(0,0,1200,800)
this.ctx.font = "48px serif"
//ctx.fillStyle ="white"
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
    this.ctx.beginPath();
  for(let j = 0 ; j < i ; j++){
    this.ctx.moveTo(500+(60*j),750)
    this.ctx.lineTo(550+(60*j),750)
  }
this.ctx.stroke()
this.ctx.closePath()
  }

  writeCorrectLetter(letra,i) {
    this.ctx.fillText(letra,500+(60*i),690,50)   //

  }

  writeWrongLetter(letra,errorLeft) {
  this.ctx.fillText(letra,800+(60*(10-errorLeft)),350,50) //parametros para restar los errores
  }

  drawHangman(errorHorc) {
if (errorHorc===9) {
//horca2
this.ctx.beginPath();
this.ctx.moveTo(300,700)
this.ctx.lineTo(300,200)
this.ctx.stroke()
this.ctx.closePath()
}
if (errorHorc===8){
//horca3
this.ctx.beginPath();
this.ctx.moveTo(300,200)
this.ctx.lineTo(650,200)
this.ctx.stroke()
this.ctx.closePath()
}
if (errorHorc===7){
//horca4
this.ctx.beginPath();
this.ctx.moveTo(650,200)
this.ctx.lineTo(650,300)
this.ctx.stroke()
this.ctx.closePath()
}
if (errorHorc===6){
//cabeza
this.ctx.beginPath();
this.ctx.arc(650, 335, 35, 0, Math.PI * 2)
this.ctx.stroke()
this.ctx.closePath()
}
if (errorHorc===5){
//cuerpo
this.ctx.beginPath();
this.ctx.moveTo(650,550)
this.ctx.lineTo(650,370)
this.ctx.stroke()
this.ctx.closePath()
}
if (errorHorc===4){
//mizquierdo
this.ctx.beginPath();
this.ctx.moveTo(600,350)
this.ctx.lineTo(650,430)
this.ctx.stroke()
this.ctx.closePath()

}
if (errorHorc===3){
//mderecho
this.ctx.beginPath();
this.ctx.moveTo(700,350)
this.ctx.lineTo(650,430)
this.ctx.stroke()
this.ctx.closePath()

}
if (errorHorc===2){
//pIz
this.ctx.beginPath();
this.ctx.moveTo(650,550)
this.ctx.lineTo(550,600)//(650,550)
this.ctx.stroke()
this.ctx.closePath()

}
if (errorHorc===1){
//pDr
this.ctx.beginPath();
this.ctx.moveTo(650,550)
this.ctx.lineTo(750,600)
this.ctx.stroke()
this.ctx.closePath()
}
  }


gameOver() {
  this.ctx.drawImage(this.img,650,400,400,250)
  }

winner() {
  this.ctx.drawImage(this.img2,650,300,650,500)

  }

}
