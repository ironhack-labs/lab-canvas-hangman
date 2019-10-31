
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
  }

  createBoard() {
    /*this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)*/
    this.ctx.beginPath()
    this.ctx.rect(220, 100, 750, 500)
    this.ctx.fillStyle = '#FFFFFF'
    this.ctx.fill();
    this.ctx.closePath()
  }

  drawLines() {
    let lines = Hangman.secretWord.length;
    let counter = 0;
    let x = 320;
    for(i=0; i<lines; i++){
      this.ctx.strokeStyle = '#000000'
      this.ctx.beginPath();
      this.ctx.moveTo(x+counter, 250);
      this.ctx.lineTo(x+counter+20,250);
      this.ctx.stroke();
      this.ctx.closePath();
      counter += 30;
    }
  }

  writeCorrectLetter(index) {
    

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {
    this.ctx.strokeStyle = '#000000';
    this.ctx.save();
    this.ctx.translate(300.5, 144.5);
    this.ctx.scale(1, 0.9428571428571428);
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 48, 0, 6.283185307179586, false);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(302, 190);
    this.ctx.lineTo(303, 338);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(302, 335);
    this.ctx.lineTo(240, 401);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(304, 336);
    this.ctx.lineTo(373, 404);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(301, 234);
    this.ctx.lineTo(396, 212);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(303, 232);
    this.ctx.lineTo(220, 217);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(299, 96);
    this.ctx.lineTo(300, 37);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(300, 37);
    this.ctx.lineTo(93, 39);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(94, 39);
    this.ctx.lineTo(93, 361);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.strokeStyle = '#000000';
    this.ctx.strokeRect(33, 360, 130, 105);
  }

  gameOver() {

  }

  winner() {

  }

}