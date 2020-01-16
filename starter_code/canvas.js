
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {

  }

  drawLines() {

  }

  writeCorrectLetter(index) {

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

const ctx = document.getElementById('hangman').getContext('2d');
//horca
ctx.beginPath();
ctx.moveTo(300,700)
ctx.lineTo(300,200)
ctx.stroke()
ctx.closePath()
//horca2
ctx.beginPath();
ctx.beginPath();
ctx.moveTo(300,200)
ctx.lineTo(650,200)
ctx.stroke()
ctx.closePath()
//horca3
ctx.beginPath();
ctx.beginPath();
ctx.moveTo(300,200)
ctx.lineTo(650,200)
ctx.stroke()
ctx.closePath()









//izquierdo
ctx.beginPath();

ctx.fill()
//derecho
ctx.beginPath();

ctx.fill()
//pIz
ctx.beginPath();

ctx.fill()
//pDr
ctx.beginPath();

ctx.fill()