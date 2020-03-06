class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
    this.context.fillText('Letras Erradas:', 600, 400);
    this.context.fillText('Vidas:', 600, 300);
    this.context.fillText('10', 800, 300);
  }

  drawLines() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.context.beginPath();
      this.context.lineTo(400 + 80 * i, 700);
      this.context.lineTo(450 + 80 * i, 700);
      this.context.lineWidth = 5;
      this.context.stroke();
    }
    this.context.font = '50px Arial';
    // this.context.fillText(this.secretWord, 800, 200)
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.fillText(this.secretWord[index], 410 + 80 * index, 680);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.clearRect(750, 250, 200, 100);
    this.context.fillText(letter, 600, 500);
    this.context.fillText(errorsLeft, 800, 300);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    let ctx = this.context;
    let hangInitialX = 150;
    let hangInitialY = 650;
    let radius = 30;

    switch (errorsLeft) {
      case 9:
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(hangInitialX, hangInitialY);
        ctx.lineTo(hangInitialX - 75, hangInitialY);
        ctx.stroke();
        ctx.lineTo(hangInitialX, hangInitialY - 75);
        ctx.stroke();
        ctx.lineTo(hangInitialX + 75, hangInitialY);
        ctx.stroke();
        ctx.lineTo(hangInitialX, hangInitialY);
        ctx.stroke();
        break;
      case 8:
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(hangInitialX, hangInitialY - 75);
        ctx.lineTo(hangInitialX, hangInitialY - 400);
        ctx.stroke();
        break;
      case 7:
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(hangInitialX, hangInitialY - 400);
        ctx.lineTo(hangInitialX + 250, hangInitialY - 400);
        ctx.stroke();
        break;
      case 6:
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(hangInitialX + 250, hangInitialY - 400);
        ctx.lineTo(hangInitialX + 250, hangInitialY - 350);
        ctx.stroke();
        break;
      case 5:
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.arc(hangInitialX + 250, hangInitialY + radius - 350, radius, 0, Math.PI * 2, true);
        ctx.stroke();
        break;
      case 4:
        ctx.beginPath();
        ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 350);
        ctx.lineTo(hangInitialX + 250, hangInitialY + 2 * radius - 250);
        ctx.stroke();
        break;
      case 3:
        ctx.beginPath();
        ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 250);
        ctx.lineTo(hangInitialX + 200, hangInitialY + 2 * radius - 200);
        ctx.stroke();
        break;
      case 2:
        ctx.beginPath();
        ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 250);
        ctx.lineTo(hangInitialX + 300, hangInitialY + 2 * radius - 200);
        ctx.stroke();
        break;
      case 1:
        ctx.beginPath();
        ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 325);
        ctx.lineTo(hangInitialX + 200, hangInitialY + 2 * radius - 275);
        ctx.stroke();
        break;
      case 0:
        ctx.beginPath();
        ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 325);
        ctx.lineTo(hangInitialX + 300, hangInitialY + 2 * radius - 275);
        ctx.stroke();
        break;
    }

  }

  gameOver() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    let img = new Image();
    img.onload = function () {
      this.context.drawImage(img, 330, 280);
    }.bind(this);
    img.src = 'images/gameover.png';
  }


  winner() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    let img = new Image();
    img.onload = function () {
      this.context.drawImage(img, 150, 100);
    }.bind(this);
    img.src = 'images/awesome.png';
  }
}