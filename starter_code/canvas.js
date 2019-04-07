
function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById('hangman')
  this.ctx = this.canvas.getContext('2d')
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, canvas.width, canvas.height)

  // base
  this.ctx.beginPath();
  this.ctx.moveTo(150, this.canvas.height - 50);
  this.ctx.lineTo(220, this.canvas.height - 50);
  this.ctx.lineTo(185, this.canvas.height - 80);
  this.ctx.fill();
  this.ctx.closePath();

}

HangmanCanvas.prototype.drawLines = function () {
  
  for(let i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath()
    this.ctx.moveTo(400 + i * 30 + 10, 700)
    this.ctx.lineTo(400 + i * 30 + 30, 700)
    this.ctx.stroke()
    this.ctx.closePath()
  }
}

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  letters.forEach((letter, positionX) => {
    this.ctx.font = '3rem Arial';
    this.ctx.fillText(letter, 550 + positionX * 50 + 25, 300);
  })
}

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  
}

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch(stroke) {
    case 'line1':
      this.ctx.beginPath();
      this.ctx.moveTo(185, this.canvas.height - 80);
      this.ctx.lineTo(185, 200);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 'line2':
      this.ctx.beginPath();
      this.ctx.moveTo(185, 200);
      this.ctx.lineTo(450, 200);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 'line3':
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(450, 250);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 'head':
      this.ctx.beginPath();
      this.ctx.arc(450, 300, 50, 0, Math.PI * 2, true);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 'body':
      this.ctx.beginPath();
      this.ctx.moveTo(450, 350);
      this.ctx.lineTo(450, 520);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 'left-arm':
      this.ctx.beginPath();
      this.ctx.moveTo(450, 350);
      this.ctx.lineTo(400, 420);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 'right-arm':
      this.ctx.beginPath();
      this.ctx.moveTo(450, 350);
      this.ctx.lineTo(500, 420);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 'left-leg':
      this.ctx.beginPath();
      this.ctx.moveTo(450, 520);
      this.ctx.lineTo(400, 590);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 'right-leg':
      this.ctx.beginPath();
      this.ctx.moveTo(450, 520);
      this.ctx.lineTo(500, 590);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 'face':
      this.ctx.font = '15px Arial';
      this.ctx.strokeText('X          X', 420, 300);
      this.ctx.beginPath();
      this.ctx.moveTo(420, 320);
      this.ctx.lineTo(480, 320);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
  }
}

HangmanCanvas.prototype.gameOver = function () {
  const img = new Image();
  img.src = 'images/gameover.png';
  img.onload = () => {
    this.ctx.drawImage(img, 300, 300);
  }
}

HangmanCanvas.prototype.winner = function () {
  const img = new Image();
  img.src = 'images/awesome.png';
  img.onload = () => {
    this.ctx.drawImage(img, 200, 100);
  }
}

const hag = new HangmanCanvas()
hag.createBoard()

