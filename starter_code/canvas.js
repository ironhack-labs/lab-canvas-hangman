
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    
  }

  createBoard() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, 1000, 700);
  }

  drawLines() {

    for(let i=0; i<this.secretWord.length; i++){
      this.ctx.fillStyle="black";
    this.ctx.font="25px Arial";

this.ctx.fillText(`${this.secretWord}`, 10, 50);
    }


    this.ctx.beginPath();
    this.ctx.moveTo(20,650);
    this.ctx.lineTo(220, 650);
    this.ctx.lineTo(110, 550);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(110,550);
    this.ctx.lineTo(110, 100);
    this.ctx.moveTo(110, 100);
    this.ctx.lineTo(300, 100);
    this.ctx.closePath();
    this.ctx.stroke();
    
//text
this.ctx.fillStyle="black";
this.ctx.font="25px Arial";

this.ctx.fillText(`${this.secretWord}`, 10, 50);

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


