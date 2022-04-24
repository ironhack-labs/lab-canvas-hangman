class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
   this.context.clearRect(0, 0, 1200, 800);
   this.drawLines();
  }

  drawLines() {
    let numberOfLine = this.secretWord.length;

     this.context.beginPath();

    for (let i =0; i < numberOfLine; i++)
    this.context.moveTo(i * 100) + 100, 100);
    this.context.lineTo(1 *100) + 200, 100); 
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    this.context.fillText(this.secretWord[index], (index + 75) + 50, 740, 75)
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
