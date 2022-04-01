class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
    // ... your code goes here
  }

  drawLines() {
    let numberOfLines = this.secretWord.length;

    this.context.beginPath();

    for(let i = 0; i < numberOfLines; i++) {
      this.context.beginParth();
      this.context.strokeStyle = `black`

      this.context.moveTo((i * 75) + 50, 750);
      this.context.lineTo((i * 75) + 100, 750);
      this.context.stroke();
    }
    // ... your code goes here
  }

  writeCorrectLetter(letter) {
    this.context.font = '72px sans-serif';
    this.context.fillText(this.secretWord[indexed], (index * 75) + 50, 740, 75);
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '36px sans-serif';
    this.context.fillText(letter, ((10 - errorsLeft) * 75) + 50, 100, 75);

    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    //draw the stand for the hangman, within the draw lines. 
    //This will be drawn one time, when the game starts.
    //then make a switch statement based on errors left that will draw each body part
    //based on error lest.
    
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
