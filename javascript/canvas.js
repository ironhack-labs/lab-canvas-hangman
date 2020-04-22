class HangmanCanvas {
  constructor(_secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = _secretWord;
    this.baseX = 300;
    this.baseY = 500;
    this.XWrongLetter = this.baseX + 500;
    this.YWrongLetter = this.baseY - 300;
    this.imgGameOver = new Image();
    this.imgGameOver.src = '/images/gameover.png';
    this.imgWinner = new Image();
    this.imgWinner.src = '/images/awesome.png';

  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    let x = this.baseX;
    let y = this.baseY;
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 3;
    this.context.beginPath();
    this.context.setLineDash([30, 10]);
    this.context.moveTo(x, y);
    this.context.lineTo(x + ((10 * (this.secretWord.length - 1)) + 30 * this.secretWord.length), y);
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    this.context.fontStyle = 'black';
    this.context.font = '20px arial';
    this.context.fillText(this.secretWord[index].toUpperCase(), (this.baseX + (index * 40) + 10), this.baseY - 10, 100);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.fontStyle = 'black';
    this.context.font = '20px arial';
    this.context.fillText(letter.toUpperCase(), this.XWrongLetter, this.YWrongLetter);
    this.YWrongLetter += 30;
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    this.context.lineStyle = 'black';
    this.context.lineWidth = 3;
    this.context.setLineDash([]);
    switch (errorsLeft) {
      case 9:
        //Base
        this.context.beginPath();
        this.context.moveTo(this.baseX - 200, this.baseY);
        this.context.lineTo(this.baseX - 100, this.baseY);
        this.context.lineTo(this.baseX - 150, this.baseY - 50);
        this.context.closePath();
        this.context.stroke();
        break;
      case 8:
        //Principal branch
        this.context.beginPath();
        this.context.moveTo(this.baseX - 150, this.baseY - 50);
        this.context.lineTo(this.baseX - 150, this.baseY - 400);
        this.context.closePath();
        this.context.stroke();
        break;
      case 7:
        //Horizontal branch
        this.context.beginPath();
        this.context.moveTo(this.baseX - 150, this.baseY - 400);
        this.context.lineTo(this.baseX + 100, this.baseY - 400);
        this.context.closePath();
        this.context.stroke();
        break;
      case 6:
        //Little vertical branch
        this.context.beginPath();
        this.context.moveTo(this.baseX + 100, this.baseY - 400);
        this.context.lineTo(this.baseX + 100, this.baseY - 350);
        this.context.closePath();
        this.context.stroke();
        break;
      case 5:
        //head
        this.context.beginPath();
        this.context.arc(this.baseX + 100, this.baseY - 320, 30, 0, Math.PI * 2);
        this.context.closePath();
        this.context.stroke();
        break;
      case 4:
        //Body
        this.context.beginPath();
        this.context.moveTo(this.baseX + 100, this.baseY - 290);
        this.context.lineTo(this.baseX + 100, this.baseY - 175);
        this.context.closePath();
        this.context.stroke();
        break;
      case 3:
        //Left arm
        this.context.beginPath();
        this.context.moveTo(this.baseX + 100, this.baseY - 290);
        this.context.lineTo(this.baseX + 50, this.baseY - 250);
        this.context.closePath();
        this.context.stroke();
        break;
      case 2:
        //Rigth arm
        this.context.beginPath();
        this.context.moveTo(this.baseX + 100, this.baseY - 290);
        this.context.lineTo(this.baseX + 150, this.baseY - 250);
        this.context.closePath();
        this.context.stroke();
        break;
      case 1:
        //Left leg
        this.context.beginPath();
        this.context.moveTo(this.baseX + 100, this.baseY - 175);
        this.context.lineTo(this.baseX + 50, this.baseY - 135);
        this.context.closePath();
        this.context.stroke();
        break;
      case 0:
        //Rigth leg
        this.context.beginPath();
        this.context.moveTo(this.baseX + 100, this.baseY - 175);
        this.context.lineTo(this.baseX + 150, this.baseY - 135);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    this.context.drawImage(this.imgGameOver, this.baseX - 100, this.baseY - 500);
  }

  winner() {
    this.context.drawImage(this.imgWinner, this.baseX - 100, this.baseY - 500);
  }
}