
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord
    this.createBoard()
    this.drawLines()
    console.log('hola')
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    for(let i = 0; i < this.secretWord.length; i++){
      this.ctx.beginPath();      
      this.ctx.moveTo(300 + 50 * (i*2), 700);    
      this.ctx.lineTo(300 + 50 * ((i*2) + 1), 700);  
      this.ctx.stroke();  
      this.ctx.closePath() 
    }      
  }

  writeCorrectLetter(index) {
    this.ctx.font = '50px Avenir'
    this.ctx.fillStyle = 'black'
    this.ctx.fillText(this.secretWord.charAt(index).toUpperCase(), 310 + 50 * index * 2, 650)
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = '50px Avenir'
    this.ctx.fillStyle = 'black'
    this.ctx.fillText(letter.toUpperCase(), 800 + 50 * (10 - errorsLeft), 300)        
  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}