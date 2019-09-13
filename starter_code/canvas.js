class HangmanCanvas {
constructor(secretWord) {
  this.secretWord = secretWord;
  this.ctx = document.getElementById('hangman').getContext('2d');
}

createBoard() {
  this.ctx.beginPath();
  this.ctx.moveTo(50, 50);
  this.ctx.lineTo(250, 50);
  this.ctx.stroke();
  this.ctx.moveTo(250, 50);
  this.ctx.lineTo(250, 100);
  this.ctx.stroke();
  this.ctx.closePath();  
};

drawLines() {

};

writeCorrectLetter(index) {

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
