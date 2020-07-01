class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord

    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0,800,1200);
    this.drawLines()
  }

  drawLines() {
       var x = 100;
       var y = 600;
    this.context.beginPath();
     for (let i=0; i<this.secretWord.length; i++) {
       this.context.moveTo(x,y);
       this.context.lineTo(x+30,y);
       x+=45;
     }
     this.context.stroke();
  }

  writeCorrectLetter(index) {
    this.context.fillRect(10, 10, 280, 280);
    var x = 100;
    var y = 600;
    let letter = this.secretWord[index];
    for (let i=0; i<this.secretWord.length; i++) {
      if (letter===this.secretWord[i]) {
        this.context.fillText(letter,x+(i*45),y-20)
      } else {
        console.log ("error")
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.fillRect(10, 10, 280, 280);
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
