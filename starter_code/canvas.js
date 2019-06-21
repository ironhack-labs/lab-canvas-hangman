

class HangmanCanvas {
  constructor(){
    this.ctx = document.getElementById('hangman').getContext('2d');
  }


  // createBoard () {

  

  // };




  drawLines() {

    this.ctx.beginPath();

    this.x = //300?
    this.y = //700?

    //this.secretWord.split('').forEach((eachLetter)=>{ do the code below}
    
    this.ctx.moveTo(x,y);
    this.ctx.moveTo(x + 50,y);
    this.ctx.stroke();

    x += 75

  };

  writeCorrectLetter (index) {

  };

  writeWrongLetter (letter, errorsLeft) {

  };

  drawHangman (shape) {

  };

  gameOver () {

  

  };

  winner () {

  };

}




