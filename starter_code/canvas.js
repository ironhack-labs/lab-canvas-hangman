
class HangmanCanvas{
  constructor(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  }
  
  createBoard() {
    
  };
  
  drawLines() {
    // close the path
    this.ctx.beginPath();
 
    // BOTTOM TRIANGLE
    this.ctx.moveTo(200, 400);
    this.ctx.lineTo(400, 400);
    this.ctx.stroke();
    this.ctx.lineTo(300, 350);
    this.ctx.stroke();
    this.ctx.lineTo(200, 400);
    this.ctx.stroke();
    
    this.ctx.moveTo(350, 400);
    this.ctx.lineTo(350, 0);
    this.ctx.stroke();
  
    // close the path
    this.ctx.closePath();
    
  };

writeCorrectLetter(guessedLetter) {

};

writeWrongLetter(letter, errorsLeft) {

};

drawHangman(shape) {

};

gameOver() {

};

winner() {

};

}
