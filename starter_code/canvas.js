
//height="400px" width="600px"
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(0, 0, 600, 400);
  }

  drawLines() {
    let startPositionLine = 100;
    let endPositionLine = 150;
    if (this.secretWord.length > 6){
      alert(`Random Secret with ${this.secretWord.length} Characters is too long for this playfield\nPlease restart the Game!`)
      return;
    }
    for (let i=0; i<this.secretWord.length; i++){
      startPositionLine = startPositionLine + 60
      endPositionLine = endPositionLine + 60
    this.ctx.beginPath();
    this.ctx.moveTo(startPositionLine, 350);
    this.ctx.lineTo(endPositionLine, 350);
    this.ctx.closePath();
    this.ctx.stroke();
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
