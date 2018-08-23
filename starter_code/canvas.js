
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }
  createBoard() {
    const c = this.ctx,
    can = this.canvas;
    c.clearRect(0, 0, can.width, can.height);
    c.lineWidth = 3;
  }
  drawLines() {
    const length = this.secretWord.length,
    c = this.ctx;
    let x = 500, y = 550, width = 50, space = 10;
    for (var i = 0; i < length; i++) {
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x + width, y);
      c.stroke();
      x += width + space;
    }
  }
  writeCorrectLetter(index) {
    const c = this.ctx;
    c.font = '50px sans-serif';
    switch (index) {
      case 0: 
      c.fillText(this.secretWord[index], 500, 540);
      break;
      case 1: 
      c.fillText(this.secretWord[index], 560, 540);
      break;
      case 2: 
      c.fillText(this.secretWord[index], 620, 540);
      break;
      case 3: 
      c.fillText(this.secretWord[index], 680, 540);
      break;
      case 4: 
      c.fillText(this.secretWord[index], 740, 540);
      break;
      case 5: 
      c.fillText(this.secretWord[index], 800, 540);
      break;
      case 6: 
      c.fillText(this.secretWord[index], 860, 540);
      break;
      case 7: 
      c.fillText(this.secretWord[index], 920, 540);
      break;
      default:
    }
  }
  writeWrongLetter(letter, errorsLeft) {
    letter = String.fromCharCode(letter);
    const c = this.ctx;
    let x = 1150, y = 150, width = 50, space = 10;
    c.font = '50px sans-serif';
    c.clearRect(750, 150, 50, 50);
    for (var i = 0; i < errorsLeft; i++) {
      x -= width + space;
    }
    c.fillText(letter, x, y);
    c.fillText(errorsLeft, x, 250);
  }
  drawHangman(shape) {
    const c = this.ctx;
    // base
    c.moveTo(100, 550);
    c.lineTo(300, 550);
    c.lineTo(200, 500);
    c.lineTo(100, 550);
    // pole
    c.moveTo(200, 500);
    c.lineTo(200, 50);
    // crossbar
    c.lineTo(500, 50);
    // rope
    c.lineTo(500, 110);
    // head
    c.moveTo(540, 150)
    c.arc(500, 150, 40, Math.PI * 0, Math.PI * 2);
    // body
    c.moveTo(500,190)
    c.lineTo(500, 340);
    // left arm
    c.moveTo(500, 240);
    c.lineTo(450, 315);
    // right arm
    c.moveTo(500, 240);
    c.lineTo(550, 315)
    // left leg
    c.moveTo(500, 340)
    c.lineTo(450, 440);
    // right leg
    c.moveTo(500, 340)
    c.lineTo(550, 440);
    // make lines
    c.stroke();

    c.font = '30px sans-serif';
    c.fillText('Errors left: 10', 600, 200);
  }
  gameOver() {
    const loser = new Image(),
    c = this.ctx;
    loser.src = "images/gameover.png";
    loser.onload = () => {c.drawImage(loser, 315, 180);}
  }
  winner() {
    const winner = new Image(),
    c = this.ctx;
    winner.src = "images/awesome.png";
    winner.onload = () => {c.drawImage(winner, 164, 0);}
  }
}


/*******************
*** VERIFICATION ***
*******************/
// canvas = new HangmanCanvas(hangman.secretWord);
// canvas.createBoard();
// canvas.drawLines();
// setTimeout(function() {canvas.winner()}, 1000)