const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


class HangmanCanvas {
  constructor(secretWord, errorsLeft) {
    this.secretWord = secretWord;
    this.errorsLeft = errorsLeft;

    //Limpiar el rec
    //recibir la secretword
    //empzar en 0
    
  }

  createBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  }

  drawLines() {
    let numLines = this.secretWord.length;
    let x = 200; 

    for(let i = 0; i < numLines; i++) {
      //PathLetra
      ctx.fillStyle = 'black';
      ctx.lineWidth = '1.5';
      ctx.strokeStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(x, 700);
      ctx.lineTo(x + 100, 700);
      ctx.stroke();
      ctx.closePath();
      x += 120;
    }
    //for para dibujar las lineas
    
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman() {
    if(this.errorsLeft <= 9) {
      //Cabeza
      ctx.beginPath();
      ctx.arc(400, 250, 50, 0, 2 * Math.PI, true);
      ctx.stroke();
      ctx.closePath();
    }

    if(this.errorsLeft <= 8) {
      //Cuerpo
      ctx.beginPath();
      ctx.moveTo(400, 300);
      ctx.lineTo(400, 500);
      ctx.stroke();
      ctx.closePath();
    }

    if(this.errorsLeft <= 7) {
      //PataIzq
      ctx.beginPath();
      ctx.moveTo(400, 500);
      ctx.lineTo(320, 580);
      ctx.stroke();
      ctx.closePath();
    }

    if(this.errorsLeft <= 6) {
      //PataDer
      ctx.beginPath();
      ctx.moveTo(400, 500);
      ctx.lineTo(480, 580);
      ctx.stroke();
      ctx.closePath();
    }

    if(this.errorsLeft <= 5) {
      //ManoDer
      ctx.beginPath();
      ctx.moveTo(400, 370);
      ctx.lineTo(480, 370);
      ctx.stroke();
      ctx.closePath();
    }

    if(this.errorsLeft <= 4) {
      //ManoIzq
      ctx.beginPath();
      ctx.moveTo(400, 370);
      ctx.lineTo(320, 370);
      ctx.stroke();
      ctx.closePath();
    }

  }

  gameOver() {

  }

  winner() {

  }

}


/*

let ctx = document.getElementById('hangman').getContext('2d');

ctx.fillStyle = 'black';

ctx.beginPath();
ctx.lineWidth = '1.5';
ctx.strokeStyle = 'black';







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

*/