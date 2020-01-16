
const winner = new Image()
winner.src = "images/awesome.png"
const gameover = new Image()
    gameover.src = "./images/gameover.png"

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    this.times = 0
    this.createBoard()
  }
  
  createBoard() {
    this.ctx.clearRect(0,0, 1200, 800)
    this.ctx.font = '30px Arial'
    this.writeWrongLetter( hangman.letters.join(''), hangman.errorsLeft )
    this.writeCorrectLetter('')
    this.drawLines()
  }

  drawLines() {
    this.ctx.beginPath()
    this.ctx.moveTo(50, 300)
    this.ctx.lineTo(200, 300)
    this.ctx.closePath()
    this.ctx.stroke()


    if( this.times <= 9 ){
      this.ctx.beginPath()
      this.ctx.moveTo(50, 300)
      this.ctx.lineTo(125, 250)
      this.ctx.lineTo(200, 300)
      this.ctx.moveTo(50, 300)
      this.ctx.closePath()
      this.ctx.stroke()
    }
    if( this.times <= 8){
      this.ctx.beginPath()
      this.ctx.moveTo(125, 250)
      this.ctx.lineTo(125, 100)
      this.ctx.closePath()
      this.ctx.stroke()
    }
    if( this.times <= 7 ){
      this.ctx.beginPath()
      this.ctx.moveTo(125, 100)
      this.ctx.lineTo(200, 100)
      this.ctx.closePath()
      this.ctx.stroke()
    }
    if( this.times <= 6){
      this.ctx.beginPath()
      this.ctx.moveTo(200, 100)
      this.ctx.lineTo(200, 120)
      this.ctx.closePath()
      this.ctx.stroke()
    }
    this.drawHangman()

  }

  writeCorrectLetter(index) {
    index.split('')
    let writen = 0
    const y = 300
    let x = 300

    this.secretWord.split('').forEach( lette => {
      this.ctx.beginPath();
      this.ctx.moveTo(x-5, y+5);
      this.ctx.lineTo(x+40, y+5);
      this.ctx.stroke();

      if( index.includes(lette.toUpperCase())){
        this.ctx.fillText(lette, x, y, 50)
        writen++
      }
      x+= 50
    })
    if(this.secretWord.length == writen) this.winner()
  }

  writeWrongLetter(letter, errorsLeft) {
    this.times = errorsLeft
    this.ctx.fillText( letter, 600, 50, 500)
    this.drawLines()
    if( this.times <= 0) this.gameOver()
  }

  drawHangman(shape) {
    if( this.times <= 5){
    this.ctx.moveTo(220,140)
    this.ctx.arc(200, 140, 20,0, Math.PI * 2)
    this.ctx.stroke()}
    
    if( this.times <= 4){
    this.ctx.beginPath()
    this.ctx.moveTo(200,160)
    this.ctx.lineTo(200, 250)
    this.ctx.closePath()
    this.ctx.stroke()}

    if( this.times <= 3){
    this.ctx.beginPath()
    this.ctx.moveTo(200,250)
    this.ctx.lineTo(180, 270)
    this.ctx.closePath()
    this.ctx.stroke()}

    if( this.times <= 2){
    this.ctx.beginPath()
    this.ctx.moveTo(200,250)
    this.ctx.lineTo(220, 270)
    this.ctx.closePath()
    this.ctx.stroke()}

    if( this.times <= 1){
    this.ctx.beginPath()
    this.ctx.moveTo(200,200)
    this.ctx.lineTo(180, 220)
    this.ctx.closePath()
    this.ctx.stroke()}

    if( this.times <= 0){
    this.ctx.beginPath()
    this.ctx.moveTo(200,200)
    this.ctx.lineTo(220, 220)
    this.ctx.closePath()
    this.ctx.stroke()}

  }

  gameOver() {
    this.ctx.clearRect(0,0, 1200, 12000)
    this.ctx.drawImage(gameover, 50, 10, 600, 350)
  }

  winner() {
    this.ctx.clearRect(0,0, 1200, 900)
    this.ctx.drawImage(winner, 50, 10, 500, 500)

  }
}