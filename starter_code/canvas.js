
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d'); 
    this.secretWord = secretWord;
    this.errorPosition = {x:600, y=150};
    this.correctPosition 
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.lineWidth = 4;
  }
  

  drawLines() {
    let x = 350;
    let y = 600;

    this.ctx.beginPath();
    this.ctx.moveTo(x,y);
    for (i=0; i<this.secretWord.length; i++){
      
    }
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