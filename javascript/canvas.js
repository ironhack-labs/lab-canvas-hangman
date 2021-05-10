class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
this.context.clearRect(0,0,this.canvas.width, this.canvas.height);

this.context.beginPath();
this.context.moveTo(50,700);
this.context.lineTo(250,700);

this.context.moveTo(50,700);
this.context.lineTo(150,550);

this.context.moveTo(250,700);
this.context.lineTo(150,550);

this.context.moveTo(150,550);
this.context.lineTo(150,100);

this.context.moveTo(150,100);
this.context.lineTo(450,100);

this.context.moveTo(450,100);
this.context.lineTo(450,150);

this.context.moveTo(450,150);
this.context.arc(425,200,25,0,Math.PI*2)

this.context.stroke();



this.drawLines();


  }

  drawLines() {

    
    // ... your code goes here
   
    
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
