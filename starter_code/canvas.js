
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }
  createBoard() {
    ctx.clearRect(0, 0, 1200, 800);
    console.log("Hello")
  }
  drawLines() {
    let x = 200;
    let y = 600;
    for(let i=0; i < this.secretWord.length; i++){
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




