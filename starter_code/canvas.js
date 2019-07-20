class HangmanCanvas {
  constructor(abc) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.hangman = abc;
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
  }
  drawLines() {
    let x = 200;
    let y = 800;
    for(let i=0; i < this.hangman.secretWord.length; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      x += 50
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
      x += 50
 
    }
  }
  
  writeCorrectLetter(index) {
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.hangman.guessedLetter, 10, 50);
  }
  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.hangman.letters, 100, 100);
  }
  drawHangman(shape) {

  }
  gameOver() {

  }
  winner() {

  }
}
