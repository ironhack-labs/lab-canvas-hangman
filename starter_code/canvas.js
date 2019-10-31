
let ctx  = document.getElementById('hangman').getContext('2d');

let hangman = new Hangman();

class HangmanCanvas {
  constructor(secretWord) {
    //this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawLines() { 

    ctx.beginPath();
    for (var y = 0; y < Hangman.addCorrectLetter(i); y += 1) {
        addLineSubPath(ctx, y);
    }
    ctx.stroke();

function addLineSubPath(ctx, y) {
    ctx.moveTo(y*30, 0);
    ctx.lineTo(y*30+25, 0);
}
    
  }

  writeCorrectLetter(index) {
    
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {
       //base triangulo
ctx.beginPath();
ctx.moveTo(290, 650);
ctx.lineTo(400, 750);
ctx.lineTo(180, 750);
ctx.lineTo(290, 650);
ctx.stroke();
ctx.closePath();

//linea 
ctx.beginPath();
ctx.moveTo(290, 650);
ctx.lineTo(290, 200);
ctx.stroke();
ctx.closePath();

//linea horizontal 
ctx.beginPath();
ctx.moveTo(290, 200);
ctx.lineTo(500, 200);
ctx.stroke();
ctx.closePath();

///vertical
ctx.beginPath();
ctx.moveTo(500, 200);
ctx.lineTo(500, 250);
ctx.stroke();
ctx.closePath();

//cabeza
ctx.beginPath();
ctx.arc(500, 300, 50, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.closePath();
//cuerpo
ctx.beginPath();
ctx.moveTo(500, 350);
ctx.lineTo(500, 550);
ctx.stroke();
ctx.closePath();
//brazoIzq
ctx.beginPath();
ctx.moveTo(500, 380);
ctx.lineTo(450, 480);
ctx.stroke();
ctx.closePath();
//brazoDer
ctx.beginPath();
ctx.moveTo(500, 380);
ctx.lineTo(550, 480);
ctx.stroke();
ctx.closePath();
//piernaIzq
ctx.beginPath();
ctx.moveTo(500, 550);
ctx.lineTo(450, 680);
ctx.stroke();
ctx.closePath();
//piernaDer
ctx.beginPath();
ctx.moveTo(500, 550);
ctx.lineTo(550, 680);
ctx.stroke();
ctx.closePath();
  }

  gameOver() {

  }

  winner() {

  }

}




