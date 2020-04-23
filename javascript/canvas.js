class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.drawLines();
  }

  drawLines() {

    console.log(this.secretWord);
    console.log(this.secretWord.length);

    let initialx = 500;
    let y = 700;
    this.context.lineWidth = 3;
    this.context.beginPath();

    [...this.secretWord].forEach(line);

    function line(el) {
      console.log(el);
      document.getElementById('hangman').getContext('2d').moveTo(initialx, y);
      document.getElementById('hangman').getContext('2d').lineTo(initialx + 50, y);
      document.getElementById('hangman').getContext('2d').stroke();
    }
    /*
    for(let i = 0; i < this.secretWord.length; i++) {
   
      this.context.moveTo(initialx, y);
      this.context.lineTo(initialx + 50, y);
      this.context.moveTo(initialx + 100, y);
      this.context.lineTo(initialx + 150, y);
      this.context.stroke();
      console.log(i);
    }
    */

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
