
class HangmanCanvas {
  constructor(secretWord) {
     var ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
this.ctx.clearRect(0,0,1500,1500);
this.drawLines();
  };

  drawLines() {
    for (var i = 0; i < hangman.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(500 + 50 * i,100);
      this.ctx.lineTo(525 + 50 * i,100);
      this.ctx.stroke();
      }
  };

  writeCorrectLetter(index, letter) {
    this.ctx.font = '20px Arial';
    this.ctx.fillText(letter, 507 + 50 * index,90);
  };

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = '20px Arial';
    this.ctx.fillText(letter, 507 + 50 * (9 - errorsLeft), 200);
  };

  drawHangman(shape) {
    
  }

  gameOver() {

  }

  winner() {

  }

};