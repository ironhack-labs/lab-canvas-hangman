
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d'); 
  }
  createBoard() {
    this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawLines() {
    let i = 500;
    setInterval(() => {
      this.ctx.fillRect(i, 200, 100, 5);
      this.ctx.
      if (i === 1000) {
        clearInterval(this);
      } else {
        i += 100;
      }
    }, 1000);
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {
    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(50, 477);
    this.ctx.lineTo(131, 477);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(53, 476);
    this.ctx.lineTo(98, 439);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(98, 441);
    this.ctx.lineTo(130, 478);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(97, 441);
    this.ctx.lineTo(100, 170);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(100, 170);
    this.ctx.lineTo(100, 110);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(101, 114);
    this.ctx.lineTo(234, 114);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(233, 114);
    this.ctx.lineTo(233, 147);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(184, 187);

    this.ctx.strokeStyle = '#000000';
    this.ctx.save();
    this.ctx.translate(231.5, 185.5);
    this.ctx.scale(1, 1);
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 38, 0, 6.283185307179586, false);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(234, 226);
    this.ctx.lineTo(234, 339);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(234, 337);
    this.ctx.lineTo(194, 404);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.moveTo(235, 339);
    this.ctx.lineTo(264, 401);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  gameOver() {

  }

  winner() {

  }

}

hangman.createBoard
