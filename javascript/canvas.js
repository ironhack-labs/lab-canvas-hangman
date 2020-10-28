class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord=secretWord;
    this.createBoard();
  }

  createBoard() {
    // ... your code goes here
    //this.context.fillRect(0,0, 100,100);
    //console.log(this.secretWord);
    this.context.clearRect(0,0,1200,800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for(let i=1;i<=this.secretWord.length;i++){ //líneas correspondientes a las letras
      this.context.beginPath();
      this.context.lineWidth =6;
      this.context.moveTo((300+(70*i)),350);
      this.context.lineTo((350+(70*i)),350);

      this.context.closePath();
      this.context.stroke();
    }

    
  }

  writeCorrectLetter(index) {
    // ... your code goes here
   // console.log(index);
    let x = 305+(70*(index+1));
    this.context.font = '60px serif';
    this.context.fillText(this.secretWord[index], x, 340);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    console.log(letter);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
    console.log("perdiste");
  }

  winner() {
    // ... your code goes here
    console.log("ganaste");
  }
  
}
