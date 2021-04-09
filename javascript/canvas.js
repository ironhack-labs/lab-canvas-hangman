class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;// ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0,this.context.width, this.context.height);
    this.drawLines()
  }

  drawLines() {
    for(let i =0; i< this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(500 + (i * 50), 400);
      this.context.lineTo(530 + (i * 50), 400);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    const guessedLetter = this.secretWord[index];

    for(let i = 0; i < this.secretWord.length; i++) {
      if(this.secretWord[i] === guessedLetter) {
        this.context.font = "30px Arial"
        this.context.fillText(guessedLetter.toUpperCase(), 505 + (i * 50), 380);
      }
    }   
  }

  writeWrongLetter(letter, errorsLeft) {
    const wrLet = 10 - errorsLeft;
    
    if(!this.secretWord.includes(letter)){ 
      this.context.font = "30px Arial"
      this.context.fillText(letter.toUpperCase(), 500 + (wrLet * 50), 100)
    }
  }

  drawHangman(errorsLeft) {
    if(errorsLeft === 9) {
      this.context.beginPath()
      this.context.moveTo(100, 400);
      this.context.lineTo(150, 370);
      this.context.lineTo(200, 400);
      this.context.closePath()
    }
    
    if(errorsLeft === 8){
      this.context.moveTo(150,370);
      this.context.lineTo(150, 30);
      this.context.stroke()
    }
      
    if(errorsLeft === 7){
      this.context.lineTo(230, 30);
      this.context.lineTo(230, 60)
      this.context.stroke();
    }
    if(errorsLeft === 6) {
      this.context.beginPath()
      this.context.arc(230, 75, 15, 0, Math.PI * 2);
      this.context.stroke();
    }
    if(errorsLeft === 5) {
      this.context.moveTo(230, 90);
      this.context.lineTo(230, 200);
      this.context.stroke();
    }
    if(errorsLeft === 4) {
      this.context.moveTo(230, 100);
      this.context.lineTo(260, 90);
      this.context.stroke();
    }
    if(errorsLeft === 3) {
      this.context.moveTo(230, 100);
      this.context.lineTo(200, 90);
      this.context.stroke();
    }
    if(errorsLeft === 2) {
      this.context.moveTo(230, 200);
      this.context.lineTo(260, 230);
      this.context.stroke();
    }
    if(errorsLeft === 1) {
      this.context.moveTo(230, 200);
      this.context.lineTo(200, 230);
      this.context.stroke();
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
