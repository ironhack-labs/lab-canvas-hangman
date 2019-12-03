
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    
    this.ctx.clearRect(0, 0, 1200, 800) ;
    this.drawLines();
  }

  drawLines() {
    console.log("Secret word is", this.secretWord);
    var x = 250;
    var y = 600;
    for(var i = 0; i < this.secretWord.length; i++) {
      console.log("drawing line");
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + 50, y);
      this.ctx.stroke();
      this.ctx.closePath();
      x += 70;
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