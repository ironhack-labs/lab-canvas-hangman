class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here


  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,800,1200)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    let x = 300
    let y = 700
    for (let i = 0; i < hangman.secretWord.length; i++) {
      this.context.strokeStyle = 'red'  
      this.context.beginPath()
      this.context.moveTo(x,y)
      this.context.lineTo(x += 50,y)
      this.context.stroke()
      this.context.strokeStyle = 'white'
      this.context.lineTo(x += 15,y)
      this.context.closePath()
  }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let startingPoint = (hangman.secretWord.indexOf(index) * 65)+320

    // writing the correct letter down
    this.context.fillStyle = "green";
    this.context.font = "30px Roboto";
    this.context.fillText(index, startingPoint, 700);
  }

  writeWrongLetter(letter, errorsLeft) {

    // ... your code goes here
    //for (let i = 0; i < Hangman.errorsLeft; i++) {

    //writing the letter down - oops up
    let yText = (errorsLeft * 40)
    this.context.fillStyle = "orange";
    this.context.font = "30px Roboto";
    this.context.fillText(letter, 1000, yText);
    yText += 20
    //}
 
    
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
