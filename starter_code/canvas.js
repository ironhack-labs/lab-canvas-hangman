
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.error = 100;
  }

createBoard () {
  this.ctx.beginPath();
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(0, 0, 1200, 800);
  this.ctx.lineWidth = 5;
  this.ctx.closePath();
};

drawLines () {
  let wordLength = this.secretWord.length;
  let x = 800;
    for (let i = 0; i < wordLength; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, 600);
    this.ctx.lineTo(x + 20, 600);
    x += 40;
    this.ctx.stroke();
    this.ctx.closePath();
  }
};

writeCorrectLetter (index) {


};

// writeWrongLetter (letter, errorsLeft) {
//   this.ctx.beginPath();
//   this.ctx.strokeText(letter, 800, 300);
//   this.ctx.strokeText(errorsLeft, 800, 100);
// };

writeWrongLetter (letter, errorsLeft) {
  this.ctx.beginPath();
  this.ctx.font = '30px Arial'
  this.ctx.strokeText(letter, 800, this.error);
  this.error += 50;
  this.ctx.strokeText(errorsLeft, 800, 100);
};

drawHangman (shape) {

};

gameOver () {

};

winner () {

}
}

