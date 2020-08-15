class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  // console.log(this.secretWord);

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let x=300;
    let y=100;
    // this.secretWord.split();
    // console.log(this.secretWord);
    for(let i = 0; i<this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(x+30, y); 
      // this.context.lineTo(120, y);
      this.context.closePath();
      this.context.stroke();
      // .stroke() executes the drawing
      x+=50;
    }
    
  }


  writeCorrectLetter(index) {

  } 













    // // ... your code goes here
    // for (let i=0; i<this.guessedLetters; i++) {
    //   if (this.secretWord===letter) {
    //     this.context.beginPath();
    //     this.context.fillText(letter)
      
    //   // this.context.lineTo(120, y);
    //   this.context.closePath();
    //   this.context.stroke();
    //   }
    // }
    // // if(checkClickedLetters(letter) === false && this.secretWord === index){
    // //   return this.secretWord
    
  

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
