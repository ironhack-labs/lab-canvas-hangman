class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }


  createBoard() {
    // ... your code goes here
    console.log("yo!");
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let y = 400;
    let x = 300;
    let xLine = 350;

    for(let i=0; i<this.secretWord.length; i+=1){
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(xLine, y);
      this.context.stroke();
      this.context.closePath();
      x += 100;
      xLine += 100;
    }
  } 

  writeCorrectLetter(index) {
    this.context = '200px serif'
    this.context.fillText(index, 300, 400);
    console.log(index);
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