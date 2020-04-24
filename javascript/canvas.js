class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.letterPositions = [];
    this.letters = [...this.secretWord]
  }

  createBoard() {
    //We clean the board with clearRect and call drawLines for a new game.
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawLines();
  }
  drawLines() {
    //We declarate the margin and line for each letter
    let margin = 250;
    let letterSpace = 75;
    //Iterate for each letter of secretWord destructuring with spread operator.
    //And we use .forEach for create a line for everyone
    this.letters.forEach(e => {
      this.ctx.beginPath()
      this.ctx.moveTo(margin, (this.height - 200))
      this.ctx.lineTo((letterSpace + margin), (this.height - 200));
      this.ctx.stroke();
      this.letterPositions.push(margin)
      console.log(this.letterPositions);
      margin += 100
    })
  }
  writeCorrectLetter(index) {
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] === index) {
        let position = this.letterPositions[i] + 75 / 2.5;
        this.ctx.font = '30px Arial';
        this.ctx.fillText(index, position, this.height - 220);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(errorsLeft) {

  }

  gameOver() {

  }

  winner() {

  }
}
