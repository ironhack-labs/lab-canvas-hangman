class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let startX = (1200 - this.secretWord.length * 70) / 2;
    let startY = 300; // verificando
    this.secretWord.split('').forEach((el) => {
      this.ctx.beginPath();
      this.ctx.moveTo(startX, 200);
      this.ctx.lineTo(startX + 50, 200);
      this.ctx.moveTo(startX, 700);
      this.ctx.lineTo(startX + 50, 700);
      this.ctx.stroke();
      this.ctx.closePath();
      startX += 70;
    });


  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let startX = (1200 - this.secretWord.length * 70) / 2;
    let startY = 300; //Verificando
    this.ctx.font = '30px Indie Flower';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(this.secretWord[index], startX + index * 70 + 20, 190);
    this.ctx.fillText(
      this.secretWord[index].toUpperCase(),
      startX + index * 70 + 20,
      690
    );
  }

  writeWrongLetter(letter, errorsLeft) {

    // ... your code goes here
    let startX = 800;
    this.ctx.font = '30px Indie Flower';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(letter, startX + (10 - errorsLeft) * 30 + 10, 300);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    const hangmanDrawing = [
      { moveToX: 10, moveToY: 700, lineToX: 250, lineToY: 700 },
      { moveToX: 10, moveToY: 700, lineToX: 130, lineToY: 600 },
      { moveToX: 130, moveToY: 600, lineToX: 250, lineToY: 700 },
      { moveToX: 130, moveToY: 600, lineToX: 130, lineToY: 100 },
      { moveToX: 130, moveToY: 100, lineToX: 500, lineToY: 100 },
      { moveToX: 500, moveToY: 100, lineToX: 500, lineToY: 200 },
      {},
      { moveToX: 500, moveToY: 300, lineToX: 500, lineToY: 500 },
      { moveToX: 500, moveToY: 400, lineToX: 400, lineToY: 300 },
      { moveToX: 500, moveToY: 400, lineToX: 600, lineToY: 300 },
      { moveToX: 500, moveToY: 500, lineToX: 400, lineToY: 600 },
      { moveToX: 500, moveToY: 500, lineToX: 600, lineToY: 600 },
    ];
    let index = 9 - errorsLeft;
    // console.log(hangmanDrawing[index].moveToY);
    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = 'black';
    if (index === 6) {
      this.ctx.arc(500, 250, 50, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.closePath();
    }

    this.ctx.moveTo(
      hangmanDrawing[index].moveToX,
      hangmanDrawing[index].moveToY
    );
    this.ctx.lineTo(
      hangmanDrawing[index].lineToX,
      hangmanDrawing[index].lineToY
    );
    this.ctx.stroke();
    this.ctx.closePath();

  }

  gameOver() {
    // ... your code goes here
    this.ctx.clearRect(0, 0, 1200, 800);
    const img = new Image();
    img.addEventListener('load', () => {
      this.ctx.drawImage(img, 315, 100, 570, 240);
    });
    img.src = '../images/gameover.png';

  }

  winner() {
    // ... your code goes here
    this.ctx.clearRect(0, 0, 1200, 800);
    const img = new Image();
    img.addEventListener('load', () => {
      this.ctx.drawImage(img, 100, 100, 872, 618);
    });
    img.src = '../images/awesome.png';
  }
}
