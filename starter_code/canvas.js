
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = hangman.getWord()
    
  }

  createBoard() {
    
    this.ctx.clearRect(0, 0, 800, 1200);
    hangman.getWord()
    this.drawLines(hangman.secretWord)
    
  }

  drawLines(e) {

    e.length
    this.ctx.beginPath
    
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}