
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0,0, 1200, 800);
    this.ctx.lineWidth = 3;
    this.strokeStyle = "black";
  }

  drawLines() {
    let startPunktX = 350; 
    console.log(startPunktX);
    for (let i = 0; i < this.secretWord.length; i++){
        console.log(startPunktX);
       this.ctx.beginPath();
       this.ctx.moveTo (startPunktX,750);
       this.ctx.lineTo(startPunktX + 25, 750);
       this.ctx.stroke();
      startPunktX += 35;
    }
  
  }

  writeCorrectLetter(index) {
  let startPunktX = 350; 
  this.ctx.font = "36px Arial";
  this.ctx.fillText(this.secretWord[index].toUpperCase(),startPunktX + index*35, 735);
    
  }
  

  writeWrongLetter(letter, errorsLeft) {
    

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}


