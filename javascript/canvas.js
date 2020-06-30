class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.width = 800;
    this.height = 800;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawLines();
  }

  drawLines() {
    console.log(this.width + "" + this.height);
    this.context.lineWidth = 2;
    this.context.strokeStyle = "blue";
    this.context.strokeRect(0, 0, this.width - 10, this.height - 10);
    // draw traingle 
    this.context.beginPath();
    this.context.moveTo(50, this.height - 50);
    this.context.lineTo(100, this.height - 50);
    this.context.lineTo(75, this.height - 75);
    this.context.closePath(); // this takes the line to the starting coordinates.

    // draw vertical line
    this.context.moveTo(75, this.height - 75);
    this.context.lineTo(75, 400);

    // draw horizantal line
    this.context.lineTo(300, 400);

    // draw another small vertical line above hangman
    this.context.lineTo(300, 450);

    // draw hangman head [ circle]
    let centerX = 300;
    let centerY = 450;
    this.context.moveTo(centerX + 20, centerY + 20);
    this.context.arc(centerX, centerY + 20, 20, 0, Math.PI * 2, true);

    // draw the vertical line [bosy of hangman)
    centerY += 40;
    this.context.moveTo(centerX, centerY);
    centerY += 110;
    this.context.lineTo(centerX, centerY);

    // draw hang man legs

    this.context.lineTo(centerX + 50, centerY + 75);
    this.context.moveTo(centerX, centerY);
    this.context.lineTo(centerX - 50, centerY + 75);
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}