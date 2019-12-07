
let newBoard;

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.sWord = secretWord
    this.x = 900
    this.y = 200
    
  }

  createBoard() {
    
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines()
    
  }

  drawLines() {
  
  let lines = this.sWord.length;
  let originX = 400;
  let originY = 600;
  console.log(this.sWord, 2)
  
  this.ctx.beginPath();
  for(let i = 0; i < lines; i++){
    this.ctx.moveTo(originX, originY)
    console.log(originX, originY)
    this.ctx.lineTo(originX+40, originY)
    console.log(originX, originY)
    originX += 75
  }
  this.ctx.lineWidth = 3;
  this.ctx.stroke()
  this.ctx.closePath();
    
  }

  writeCorrectLetter(index, letter) {
    console.log(index)
    console.log(letter)
    let originX = 410 + (index * 75);
    let originY = 580;
    this.ctx.font = "30px Arial"
    this.ctx.fillText(`${letter}`, originX, originY)
    

  }

  writeWrongLetter(letter, errorsLeft) {
  this.ctx.font = "20px Arial"
  this.ctx.fillText(` ${letter}`, this.x, this.y)
  this.x += 18;
  this.drawHangman(errorsLeft)
  }

  drawHangman(shape) {
    switch(shape){
    case 9: 
    this.ctx.beginPath()
    this.ctx.moveTo(100, 600)
    this.ctx.lineTo(300, 600)
    this.ctx.lineTo(200, 550)
    this.ctx.lineTo(100, 600)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 8: 
    this.ctx.beginPath()
    this.ctx.moveTo(200, 550)
    this.ctx.lineTo(200, 200)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 7: 
    this.ctx.beginPath()
    this.ctx.moveTo(200, 200)
    this.ctx.lineTo(350, 200)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 6: 
    this.ctx.beginPath()
    this.ctx.moveTo(350, 200)
    this.ctx.lineTo(350, 250)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 5: 
    this.ctx.beginPath()
    this.ctx.moveTo(350, 250)
    this.ctx.arc(350, 280, 30, 0, 2 * Math.PI);
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 4: 
    this.ctx.beginPath()
    this.ctx.moveTo(350, 310)
    this.ctx.lineTo(350, 400)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 3: 
    this.ctx.beginPath()
    this.ctx.moveTo(350, 310)
    this.ctx.lineTo(290, 325)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 2: 
    this.ctx.beginPath()
    this.ctx.moveTo(350, 310)
    this.ctx.lineTo(410, 325)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 1: 
    this.ctx.beginPath()
    this.ctx.moveTo(350, 400)
    this.ctx.lineTo(290, 470)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    case 0: 
    this.ctx.beginPath()
    this.ctx.moveTo(350, 400)
    this.ctx.lineTo(410, 470)
    this.ctx.lineWidth = 3;
    this.ctx.stroke()
    this.ctx.closePath()
    break;
    }
    
  }

  gameOver() {

  }

  winner() {

  }

}