class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.lineOriginalX = 500;
    this.lineOriginalY = 500;
    this.lineLength = 30;
    this.lineSpace = 10;
    this.platformOriginalX = 100;
    this.platformOriginalY = 500;
    this.platformLineLength = 100;
  }

  createBoard() {
    this.context.clearRect(0,0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    const lineLength = this.lineLength;
    const space = this.lineSpace;
    const originalX = this.lineOriginalX;
    const originalY = this.lineOriginalY;
    this.context.beginPath();
    this.context.setLineDash([lineLength, space]);
    this.context.moveTo(originalX, originalY);
    this.context.lineTo(originalX + lineLength * this.secretWord.length + space * (this.secretWord.length - 1), originalY);
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    this.context.font = `${this.lineLength * 1.5}px sans-serif`;
    this.context.fillText(this.secretWord[index], this.lineOriginalX + (this.lineLength + this.lineSpace) * index, this.lineOriginalY);
  }

  writeWrongLetter(letter, errorsLeft) {
    const position = 10 - errorsLeft;
    const originalX = 1200 - this.lineLength - this.lineSpace;
    this.context.font = `${this.lineLength * 1.5}px sans-serif`;
    this.context.fillText(letter, originalX - (this.lineLength + this.lineSpace) * position, this.lineLength * 1.5);
  }

  drawHangman(errorsLeft) {
    const ctx = this.context;
    const originalX = this.platformOriginalX;
    const originalY = this.platformOriginalY;
    const length = this.platformLineLength;
    
    //ctx.clearRect(0, 0, 500, 800);

    ctx.beginPath();
    ctx.setLineDash([]);
    //vertical line
    if (errorsLeft === 9) { 
      ctx.moveTo(originalX, originalY);
      ctx.lineTo(originalX, originalY - length * 3);
    }
    //horizontal line
    if (errorsLeft === 8) {
      ctx.moveTo(originalX, originalY - length * 3);
      ctx.lineTo(originalX + length * 2, originalY - length * 3);
    }
    //hanging line
    if (errorsLeft === 7) {
      ctx.moveTo(originalX + length * 2, originalY - length * 3);
      ctx.lineTo(originalX + length * 2, originalY - length * 2.5);
    }
    //triangle
    if (errorsLeft === 6) {
      ctx.moveTo(originalX, originalY - 2.5 * length);
      ctx.lineTo(originalX + 0.5 * length, originalY - length * 3);
    }
    //head
    if (errorsLeft === 5) {
      ctx.moveTo(originalX + length * 2, originalY - length * 2.5);
      ctx.arc(originalX + length * 2, originalY - length * 2.25, 0.25 * length, 1.5 * Math.PI, 3.5 * Math.PI);
    }
    //body
    if (errorsLeft === 4) {
      ctx.moveTo(originalX + length * 2, originalY - length * 2);
      ctx.lineTo(originalX + length * 2, originalY - length * 1.5);
    }
    //left leg
    if (errorsLeft === 3) {
      ctx.moveTo(originalX + length * 2, originalY - length * 1.5);
      ctx.lineTo(originalX + length * 1.75, originalY - length * 1.25);
    }
    //right leg
    if (errorsLeft === 2) {
      ctx.moveTo(originalX + length * 2, originalY - length * 1.5);
      ctx.lineTo(originalX + length * 2.25, originalY - length * 1.25);
    }
    //left hand
    if (errorsLeft === 1) {
      ctx.moveTo(originalX + length * 2, originalY - length * 1.75);
      ctx.lineTo(originalX + length * 1.75, originalY - length * 2);
    }
    //right hand
    if (errorsLeft === 0) {
      ctx.moveTo(originalX + length * 2, originalY - length * 1.75);
      ctx.lineTo(originalX + length * 2.25, originalY - length * 2);
    }
    ctx.stroke();
    ctx.closePath();
  }

  gameOver() {
    const img = new Image();
    img.src = './images/gameover.png';
    img.onload = () => this.context.drawImage(img, 0, 200);
  }

  winner() {
    const img = new Image();
    img.src = './images/awesome.png';
    img.onload = () => this.context.drawImage(img, 0, 200);
  }
}