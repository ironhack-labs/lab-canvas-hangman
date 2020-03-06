class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.initialProperties = {
      initialX: 300,
      initialY: 450,
      underline: 30,
      spacing: 50
    };
  }

  createBoard() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawLines();
  }

  drawLines() {
    let ctx = this.context;
    let { initialX, initialY, underline, spacing } = this.initialProperties; 

    for(let i = 0; i < this.secretWord.length; i++){
      ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(initialX + spacing * i, initialY);
        ctx.lineTo(initialX + underline + spacing*i, initialY);
        ctx.stroke();
    }
  }

  writeCorrectLetter(index) {
    let ctx = this.context;
    let { initialX, initialY, spacing } = this.initialProperties;
    ctx.font = '30px Arial';
    ctx.fillText(this.secretWord[index], initialX + spacing * index + 5, initialY - 10);
  }

  writeWrongLetter(letter, errorsLeft) {
    let ctx = this.context;
    let wrongInitialX = 440;
    let wrongInitialY = 180;
    let { spacing } = this.initialProperties;
    ctx.font = '30px Arial';
    ctx.fillText(letter, wrongInitialX + spacing * (10 - errorsLeft) + 5, wrongInitialY - 10);
  }

  drawHangman(errorsLeft) {
    let ctx = this.context;
    let hangInitialX = 150;
    let hangInitialY = 450;
    let radius = 30;
    switch(errorsLeft){
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
        ctx.moveTo(hangInitialX, hangInitialY - 75);
        ctx.lineTo(hangInitialX, hangInitialY - 400);
        ctx.stroke();
        break;
      case 7:
        ctx.beginPath();
        ctx.moveTo(hangInitialX, hangInitialY - 400);
        ctx.lineTo(hangInitialX + 250, hangInitialY - 400);
        ctx.stroke();
        break;
      case 6:
        ctx.beginPath();
        ctx.moveTo(hangInitialX + 250, hangInitialY - 400);
        ctx.lineTo(hangInitialX + 250, hangInitialY - 350);
        ctx.stroke();
        break;
      case 5:
        ctx.beginPath();
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
    let img = new Image();
    img.onload = function() {
      this.context.drawImage(img, 0, 0);
    }.bind(this);
    img.src = 'images/gameover.png';
  }

  winner() {
    let winnerImg = new Image();
    winnerImg.onload = function() {
      this.context.drawImage(winnerImg, 0, 0);
    }.bind(this);
    winnerImg.src = 'images/awesome.png';
  }
}
