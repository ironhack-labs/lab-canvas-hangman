class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, this.width, this.height);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    this.context.fillStyle = 'black';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 3;

    this.context.beginPath();
    let letterPosX = 200;
    this.context.moveTo(letterPosX, 775);
    for (let index = 0; index < this.secretWord.length; index++) {
      this.context.lineTo(letterPosX + 35, 775);
      letterPosX += 50;
      this.context.moveTo(letterPosX, 775);      
    }
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    // console.log(index);
    this.context.font = '30px Arial';
    this.context.textAlign = 'center';
    this.context.fillText(this.secretWord[index].toUpperCase(), 200 + 35/2 + (index*50), 770);
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
