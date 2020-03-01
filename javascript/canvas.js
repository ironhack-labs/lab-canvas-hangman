class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.guessedLetters = "";
  }
 
  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines()
  }

  drawLines() {
  
    let numberOfLines = this.secretWord.length
    let x = 100
    let y = 100
    let a = 120
    let b = 100
    for ( let i = 0; i < numberOfLines; i++ ) {
    this.context.strokeStyle = "red";
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(a, b);
    this.context.stroke();
    console.log("drawn")
    x += 50
    a = x+20
    console.log(x, a)
    }
  }
  
  writeCorrectLetter(index) {
    for(let i=0; i<this.guessedLetters.length; i++)
    this.context.fillStyle = "black";
    this.context.font = "30px Arial";
    this.context.fillText(this.guessedLetters, 100, 100);
    console.log(this.guessedLetters)
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
