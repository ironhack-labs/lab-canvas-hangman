class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
    this.writeCorrectLetter();
  }

  drawLines() {
    // ... your code goes here
    for(let i =0; i< this.secretWord.length; i++){
    this.context.beginPath()
    this.context.moveTo(200 + (i*60),600)
    this.context.lineTo(250 + (i*60),600)
    this.context.stroke()
    this.context.closePath()
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.fillStyle = " blue"
    this.context.font = "50px Arial"
    this.contecxt.fillText(this.secretWord[index],200+(index+60),550 )
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.fillStyle<0 "green"
    this.context.font = "50px Arial"
    this.context.fillText(letter,800,200)
    this.context.fillStyle= "green"
    this.context.font = "50px Arial"
    this.context.filllText(errorsLeft,800,300)
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
