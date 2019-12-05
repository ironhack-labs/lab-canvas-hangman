// const canvas = document.getElementById('hangman');
// const ctx = canvas.getContext('2d');


// //Middle Circle
// ctx.beginPath();
// ctx.arc(500, 300, 75, 0, Math.PI * 2);
// ctx.fillStyle = "peru";
// ctx.fill();
// ctx.closePath();

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {
    // this.ctx.beginPath();
    // this.ctx.arc(600, 400, 75, 0, Math.PI * 2);
    // this.ctx.fillStyle = "peru";
    // this.ctx.fill();
    // this.ctx.closePath();
    this.ctx.strokeRect(0, 0, 1200, 800);
    // this.ctx.fillRect = 'ligth-blue';
    // this.ctx.closePath()

    // this.ctx.beginPath()
    // this.ctx.moveTo(360,600)
    // this.ctx.lineTo(360,200)
    // this.ctx.stroke()
    // this.ctx.fillStyle('black')
    // this.ctx.closePath()
    
  }

  drawLines() {
    //FORCA
    this.ctx.beginPath()
    this.ctx.moveTo(240,600)
    this.ctx.lineTo(240,200)
    this.ctx.lineTo(540,200)
    this.ctx.lineTo(540,270)
    this.ctx.moveTo(240,600)
    this.ctx.lineTo(170,690)
    this.ctx.moveTo(240,600)
    this.ctx.lineTo(310,690)
    this.ctx.lineTo(170,690)

    //LINHAS ABAIXO DA FORCA
    this.ctx.moveTo(360, 690)
    this.ctx.lineTo(460, 690)
    this.ctx.moveTo(510, 690)
    this.ctx.lineTo(610, 690)
    this.ctx.moveTo(660, 690)
    this.ctx.lineTo(760, 690)
    this.ctx.moveTo(810, 690)
    this.ctx.lineTo(910, 690)
    this.ctx.moveTo(960, 690)
    this.ctx.lineTo(1060, 690)
    this.ctx.stroke()
    this.ctx.closePath()

    //HANGMAN
    this.ctx.beginPath();
    // this.ctx.moveTo(540,270) //ponto inicial forca
    this.ctx.arc(540, 340, 70, 0, Math.PI * 2);
    this.ctx.fillStyle = "black";
    this.ctx.fill()
    this.ctx.closePath();



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

