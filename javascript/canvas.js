class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {

    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines()
  }

  drawLines() {
    console.log(hangman.secretWord);

    let begin = 20
    let end = 80
    for (let i = 0; i < hangman.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(end, 120);
      this.context.lineTo(begin, 120);
      this.context.stroke();
      begin += 100
      end += 100
    }
    // console.log(hangman.secretWord)


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