class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.imgWin = new Image();
    this.imgLose = new Image();
    this.imgWin.src = '../images/awesome.png';
    this.imgLose.src = '../images/gameover.png';
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.drawLines();
  }

  initImages() {
  }

  drawLines() {
    const lineLength = 35;
    const lineHeight = this.context.canvas.height-35;
    const spaceBetween = 15
    let lineStart = 200;
    [...this.secretWord].forEach(() => {
      this.context.beginPath();
      this.context.moveTo(lineStart, lineHeight);
      this.context.lineTo(lineStart+lineLength, lineHeight);
      this.context.lineWidth = 4;
      this.context.stroke();
      lineStart += lineLength+spaceBetween;
      this.context.closePath();
    })
  }

  writeCorrectLetter(index, guessed) {
    const letterToWrite = this.secretWord.charAt(index);
    const y = this.context.canvas.height-69;
    let startX = 200;
    const fontHeight = 48;
    const maxWidth = 35;
    const spaceBetween = 15;
    let letterOffset = 0;
    if(letterToWrite === 'I') letterOffset += 10;
    [...this.secretWord].forEach((letter, i) => {
      if(letter === letterToWrite) {
        guessed ? this.context.fillStyle = '#000000' : this.context.fillStyle = '#bf0000';
        this.context.font = `${fontHeight}px Arial`;
        this.context.fillText(letter, startX + letterOffset + (maxWidth*i) + (spaceBetween*i), y, maxWidth);
      }
    });
  }

  writeWrongLetter(letter, errorsLeft) {
    const index = 10-errorsLeft-1;
    const y = 420;
    let startX = 500;
    const fontHeight = 48;
    const maxWidth = 35;
    const spaceBetween = 15;
    this.context.fillStyle = '#bf0000';
    let letterOffset = 0;
    if(letter === 'I') letterOffset += 10;
    this.context.font = `${fontHeight}px Arial`;
    this.context.fillText(letter, startX + letterOffset + (maxWidth*index) + (spaceBetween*index), y, maxWidth);
  }

  drawHangman(errorsLeft) {
    this.context.lineWidth = 3;
    this.context.beginPath();
    this.context.strokeStyle = '#000000';

    switch(errorsLeft) {
      case 9: // base
        this.drawBase();
        break;
      case 8: // pole
        this.context.moveTo(120, 740);
        this.drawStraightLine(120, 340);
        break;
      case 7: // bar
        this.context.moveTo(120, 340);
        this.drawStraightLine(370, 340);
        break;
      case 6: // rope
        this.context.moveTo(370, 340);
        this.drawStraightLine(370, 375);
        break;
      case 5: // head
        // this.context.moveTo(370, 405);
        this.drawCircle(370, 405);
        break;
      case 4: // torso
        this.context.moveTo(370, 435);
        this.drawStraightLine(370, 595);
        break;
      case 3: // right leg
        this.context.moveTo(370, 595);
        this.drawStraightLine(425, 660);
        break;
      case 2: // left leg
        this.context.moveTo(370, 595);
        this.drawStraightLine(315, 660);
        break;
      case 1: // right arm
        this.context.moveTo(370, 495);
        this.drawStraightLine(425, 430);
        break;
      case 0: // left arm
        this.context.moveTo(370, 495);
        this.drawStraightLine(315, 430);
        break;
    }

    this.context.closePath();
  }

  drawBase() {
    let x = 120;
    let y = 740;
    this.context.moveTo(x, y);
    x += 50;
    y += 35;
    this.drawStraightLine(x, y);
    this.context.moveTo(x, y);
    x -= 100;
    this.drawStraightLine(x, y);
    this.context.moveTo(x, y);
    x += 50;
    y -= 35;
    this.drawStraightLine(x, y);
  }

  drawStraightLine(x, y) {
    this.context.lineTo(x, y);
    this.context.stroke();
  }

  drawCircle(x, y) {
    this.context.arc(x, y, 30, 0, Math.PI * 2);
    this.context.stroke();
  }

  gameOver() {
    const x = this.context.canvas.width/2 - this.imgLose.naturalWidth/2;
    this.context.drawImage(this.imgLose, x, 20, this.imgLose.naturalWidth, this.imgLose.naturalHeight);
  }

  winner() {
    const x = this.context.canvas.width/2 - this.imgWin.naturalWidth/4;
    this.context.drawImage(this.imgWin, x, 20, this.imgWin.naturalWidth / 2, this.imgWin.naturalHeight / 2);
  }
}
