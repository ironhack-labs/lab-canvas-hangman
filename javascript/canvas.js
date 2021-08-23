class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;

    this.wrongWordPositionX = 500;
    this.wrongWordPositionY = 500;
  }

  createBoard() {
    // Used this solution https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing?rq=1 //
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let startingX = 450;
    let startingY = 400;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(startingX + (i * 75), startingY);
      this.context.lineTo(startingX + 50 + (i * 75), startingY);

      this.context.strokeStyle = "black";
      this.context.lineWidth = 5;
       
      this.context.stroke();
       
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here

    drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {



  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
