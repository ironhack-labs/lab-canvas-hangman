class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.ctx.strokeStyle = "black";
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines()
  }

  drawLines() {
    let xLine = 260 
    let yLine = 600
    this.secretWord.split().lenght.forEach(element => {
      this.ctx.beginPath();
      this.ctx.moveTo(xLine, yLine);
      this.ctx.lineTo(xLine + 60, yLine);
      this.ctx.stroke();
      xLine += 20
      this.ctx.closePath()
    });

  }

  writeCorrectLetter(i) {
    let theWord = hangman.guessedLetters.split("");
    let word = this.secretWord.split("");
    let array = Array(word.length);
    this.array.push(theWord);
    for (let i=0; i < word.length; i++)
    this.ctx.beginPath();
    this.ctx.moveTo(100 * i, 800);
    this.ctx.lineTo(100 * array + 60, 800)
  }

  writeWrongLetter(letter, errorsLeft) {
  this.ctx.clearRect(0,0,1200,200)
  if (errorsLeft >= 0) this.context.font[letter].toUpperCase
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
