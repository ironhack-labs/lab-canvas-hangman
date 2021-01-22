
class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    const ctx = this.context
    ctx.lineWidth = 10
    ctx.clearRect(0, 0, 1200, 800)
    ctx.beginPath()
    ctx.moveTo(50, 750)
    ctx.lineTo(200, 750)
    ctx.lineTo(130, 650)
    ctx.lineTo(50, 750)
    ctx.moveTo(130, 650)
    ctx.lineTo(130, 150)
    ctx.lineTo(500, 150)
    ctx.lineTo(500, 200)
    ctx.stroke()
    ctx.closePath()
  }

  creadoradelineas(iX,iY,fX,fY){
      const ctx = this.context
      ctx.beginPath()
      ctx.moveTo(iX,iY)
      ctx.lineTo(fX,fY)
      ctx.stroke()
      ctx.closePath()
  }

  drawLines(){
  let ix = 250
  let iy = 700
  const secretW =  this.secretWord.length
  for(let i = 0; i< secretW;i++){
      this.creadoradelineas(ix,iy,ix+60,iy)
      ix+=100
  }  
  }
  writeCorrectLetter(index) {
    let ix = 250
    let iy = 700
    const ctx = this.context
    ctx.font = "20px Roboto"
    ctx.fillText(this.secretWord[index], ix,iy)
    ix += 60
  }

  writeWrongLetter(letter, errorsLeft) {
    let ix = 600
    let iy = 100
    const ctx = this.context
    ctx.font = "20px Roboto"
    if(errorsLeft>0){
      ctx.fillText(letter, ix,iy)
      iy += 60
    }
  }

  drawHangman(errorsLeft) {
    
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
