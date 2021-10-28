class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0, 1200, 800)
    
  }

  drawLines() {
    // ... your code goes here
    //this.secretWord.split("").forEach((letter,i) => this.drawHangman()
    this.context.linewidth = 10;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(10 + (i * 50), 750);
      this.context.lineTo(50 + (i * 50), 750);
      this.context.stroke();
    }
    //link https://dirask.com/posts/JavaScript-draw-line-on-canvas-element-Z1A7ap
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.fillStyle = "black";
    this.context.font = '35px Arial'

   let letter =  this.secretWord[index].toUpperCase()
   //console.log(letter, "palabra screta:", this.secretWord)
   for(let i = 0; i < this.secretWord.length; i++){
     if(this.secretWord[i].toUpperCase() === letter){
       this.context.fillText(letter,260 + 50 * i + 10 * i , 680, 50)
     }
   }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    const wrongLetter = 10 - errorsLeft;
    this.context.fillStyle = "Red"
    this.context.font = "35px Arial"
    if (!this.secretWord.includes(letter)) {
      this.context.fillText(letter.toUpperCase(),500 + (60 * errorsLeft), 100)
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    //swich y 9 casos
  }

  gameOver() {
    // ... your code goes here
    this.context
    return(this.errorsLeft=0)? false:true
  }

  winner() {
    // ... your code goes here
    return (this.secretWord)
  }
}
