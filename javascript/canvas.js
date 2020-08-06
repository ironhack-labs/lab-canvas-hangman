class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clear();

  }

  drawLines() {

    this.context.beginPath();
    this.context.lineWidth = 3;
    this.context.moveTo(200, 500);
    this.context.lineTo(320, 500);
    this.context.stroke();    

    this.context.moveTo(200, 500);
    this.context.lineTo(260, 450);

    this.context.moveTo(260, 450);
    this.context.lineTo(320, 500);

    this.context.moveTo(260, 450);
    this.context.lineTo(260, 50);    

    this.context.moveTo(260, 50);
    this.context.lineTo(500, 50);        

    this.context.moveTo(500, 50);
    this.context.lineTo(500, 100);   

    this.context.stroke();    
    this.context.closePath();
    // ... your code goes here
    let lnPosAnterior = 300;

    for(let i=0;i<this.secretWord.length;i++){
      let posX = lnPosAnterior + ((i + 1) * 50) ;

      this.context.beginPath();
      this.context.moveTo(posX, 500);
      this.context.lineTo(posX+40, 500);
      this.context.stroke();
    }
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
