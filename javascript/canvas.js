class HangmanCanvas {
  constructor(secretWord) {
    this.hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    this.context = document.getElementById('hangman').getContext('2d');
    this.secredWord = secretWord;
  }

  createBoard() {
    this.context.clearRect (0, 0, 1200, 800);
    drawLines();
  }

  drawLines() {
    let x = 0;
    let i = 0;
     while (i< this.secredWord.length){
      this.context.beginPath();
      this.context.moveTo(x, 650);
      this.context.lineTo(x+50, 650);
      this.context.stroke();
      x+=100;
      i++;
    }

  }

  writeCorrectLetter(index, letter) {
   console.log(index)
   if (this.secredWord){
      let x = 0;
      this.context.font = "30px Arial";
      this.context.fillText(letter, x + index *100 , 650);
  }
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
