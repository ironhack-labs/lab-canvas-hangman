class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.positionX = [];
    this.wrongPositionX = this.canvas.width - this.canvas.width / 2;
    this.wrongPositionY = 50;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    const wordLength = this.secretWord.length;
    let x = 50;
    let y = 100;
    for (let i = 0; i < wordLength; i++){
      x += 20;
      this.positionX.push(x);
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(x+50, y);
      this.context.stroke();
      x += 50;
    }
  }

  writeCorrectLetter(index) {
    this.context.font = "40px Calibri";
    this.context.textAlign = "center";
    this.context.fillStyle = "black";
    this.context.fillText(this.secretWord.charAt(index), this.positionX[index]+25, 90);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "20px Calibri";
    this.context.fillStyle = "red";
    this.context.fillText(letter, this.wrongPositionX, this.wrongPositionY);
    this.wrongPositionX+= 30;
    this.wrongPositionY = (this.wrongPositionX - 40 > this.canvas.width) ? this.wrongPositionY+=this.wrongPositionY + 30 : this.wrongPositionY;
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
