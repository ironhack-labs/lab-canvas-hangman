
//Let´s create a constructor HangmanCanvas and store in a variable our canvas. After storing it, we should get the context. Remember getContext('2d'). We also want to store in a variable the secret word.

let axisX = document.getElementById('hangman').width;
let axisY = document.getElementById('hangman').height;

console.log(axisY);

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d'); 
  }

  createBoard() {
    this.ctx.clearRect(0,0,axisX, axisY);
    this.ctx.fillStyle = 'light-blue';
    this.ctx.fillRect(0, 0, axisX, axisY); 
    console.log('fro')
  }

  drawLines() {
    let distLine = (600/secretWord.length);
    for(let i = 0; i <= secretWord.length; i += 1) {
      distLine = ((distLine-20) * i);
      this.ctx.beginPath();
      this.ctx.moveTo(500 + distLine, 680);
      this.ctx.lineTo(520 + distLine, 680);
      this.ctx.stroke();
    }
  }



  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {
    
    //BASE
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'black';
    this.ctx.moveTo(180, 680);
    this.ctx.lineTo(300, 600);
    this.ctx.lineTo(420, 680);
    this.ctx.fill();
    this.ctx.stroke();

    //LINHA VERTICAL
    this.ctx.beginPath();
    this.ctx.moveTo(300, 600);
    this.ctx.lineTo(300, 200);
    this.ctx.stroke();

    //LINHA HORIZONTAL
    this.ctx.beginPath();
    this.ctx.moveTo(300, 200);
    this.ctx.lineTo(600, 200);
    this.ctx.stroke();

    //VERTICAL MENOR
    this.ctx.beginPath();
    this.ctx.moveTo(600, 200);
    this.ctx.lineTo(600, 280);
    this.ctx.stroke();

    //CABEÇA
    this.ctx.beginPath();
    this.ctx.arc(600, 360, 40, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.closePath();

    //CORPO
    this.ctx.beginPath();
    this.ctx.moveTo(600, 400);
    this.ctx.lineTo(600, 560);
    this.ctx.stroke();

    // PERNA ESQUERDA 
    this.ctx.beginPath();
    this.ctx.moveTo(600, 560);
    this.ctx.lineTo(480, 640);
    this.ctx.stroke();

    //PERNA DIREITA 
    this.ctx.beginPath();
    this.ctx.moveTo(600, 560);
    this.ctx.lineTo(720, 640);
    this.ctx.stroke();

    //BRAÇO ESQUERDO 
    this.ctx.beginPath();
    this.ctx.moveTo(600, 440);
    this.ctx.lineTo(480, 520);
    this.ctx.stroke();

    //BRAÇO DIREITO 
    this.ctx.beginPath();
    this.ctx.moveTo(600, 440);
    this.ctx.lineTo(720, 520);
    this.ctx.stroke();
  }

  gameOver() {

  }

  winner() {

  }

}

