class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.cWidth = this.canvas.width;
    this.cHeight = this.canvas.height;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.cWidth, this.cHeight);
    this.drawLines();
    this.drawHangman();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(300 + (i * 75), this.cHeight - 50);
      this.context.lineTo(350 + (i * 75), this.cHeight - 50);
      this.context.stroke();
      this.context.closePath();
    }

  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    //triangle base
    this.context.beginPath();
    this.context.moveTo(50, this.cHeight - 50);
    this.context.lineTo(250, this.cHeight - 50);
    this.context.lineTo(150, this.cHeight - 150);
    this.context.fill();

    //pole
    this.context.beginPath();
    this.context.moveTo(150, this.cHeight - 100);
    this.context.lineTo(150, this.cHeight - 750);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //overhang
    this.context.beginPath();
    this.context.moveTo(148, this.cHeight - 750);
    this.context.lineTo(500, this.cHeight - 750);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //rope
    this.context.beginPath();
    this.context.moveTo(498, this.cHeight - 750);
    this.context.lineTo(500, this.cHeight - 650);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //head
    this.context.beginPath();
    this.context.arc(500, this.cHeight - 600, 50, 0, Math.PI * 2);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //body
    this.context.beginPath();
    this.context.moveTo(500, this.cHeight - 550);
    this.context.lineTo(500, this.cHeight - 400);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //left leg
    this.context.beginPath();
    this.context.moveTo(500, this.cHeight - 400);
    this.context.lineTo(450, this.cHeight - 300);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //right leg
    this.context.beginPath();
    this.context.moveTo(500, this.cHeight - 400);
    this.context.lineTo(550, this.cHeight - 300);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //left arm
    this.context.beginPath();
    this.context.moveTo(500, this.cHeight - 500);
    this.context.lineTo(450, this.cHeight - 400);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();

    //right arm
    this.context.beginPath();
    this.context.moveTo(500, this.cHeight - 500);
    this.context.lineTo(550, this.cHeight - 400);
    this.context.lineWidth = 5;
    this.context.stroke();
    this.context.closePath();
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}