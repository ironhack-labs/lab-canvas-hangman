class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
    // ... your code goes here
  }

  drawLines() {
    let x = 200;
    let y = 700;
    const secretWordSize = this.secretWord.length;
    //function drawDashedLine (pattern) {
      this.context.fillStyle = "red";
      this.context.fillRect(100, 100, 50, 50 );
      for(let i = 0; i < secretWordSize; i++){
      this.context.beginPath();
      //this.context.setLineDash([1,2]);
      this.context.moveTo(x, y);
      this.context.lineTo(x += 40, y);
      this.context.stroke();
      x += 50;
      this.context.closePath();
      }
    //}

    //drawDashedLine ([1,2])
    // ... your code goes here
  }

  writeCorrectLetter(index) {
    let letter = hangman.secretWord[index];
    this.context.font = "25pt Arial";
    let indexValue = (index * 50) +10;
     this.context.fillText(letter, indexValue , 550);

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
