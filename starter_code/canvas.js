
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  drawLines() {
    let numLines = getWord().length;
    
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

let ctx = document.getElementById('hangman').getContext('2d');

ctx.fillStyle = 'black';

ctx.beginPath();
ctx.lineWidth = '1.5';
ctx.strokeStyle = 'black';

//Cuerda
ctx.beginPath();
ctx.moveTo(400, 200);
ctx.lineTo(400, 100);
ctx.lineTo(100, 100);
ctx.lineTo(100, 600);
ctx.lineTo(20, 700);
ctx.lineTo(180, 700);
ctx.lineTo(100, 600);
ctx.stroke();
ctx.closePath();
//Cabeza
ctx.beginPath();
ctx.arc(400, 250, 50, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.closePath();
//Cuerpo
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(400, 500);
ctx.stroke();
ctx.closePath();
//PataIzq
ctx.beginPath();
ctx.moveTo(400, 500);
ctx.lineTo(320, 580);
ctx.stroke();
ctx.closePath();
//PataDer
ctx.beginPath();
ctx.moveTo(400, 500);
ctx.lineTo(480, 580);
ctx.stroke();
ctx.closePath();

//PathLetra
ctx.beginPath();
ctx.moveTo(300, 700);
ctx.lineTo(400, 700);
ctx.stroke();
ctx.closePath();

//Dibujar Letras malas
ctx.font = '40px Arial';
ctx.fillText('Aquí van las malas', 700, 300);

//Dibujar Buenas
ctx.font = '60px Arial';
ctx.fillText('A', 330, 680);

