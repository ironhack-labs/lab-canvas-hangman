
class HangmanCanvas {
  constructor(secretWord){
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
  }
  createBoard = () => {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
    
  }
  drawLines = (secretWord) => {
    let x= 400
    for(let i = 0; i<secretWord.length; i++){
        this.ctx.beginPath()
        this.ctx.moveTo(x, 400)
        x += 20
        this.ctx.lineTo(x,400)
        this.ctx.lineWidth=10
        x += 10
        this.ctx.stroke()
    }
  }
}

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
