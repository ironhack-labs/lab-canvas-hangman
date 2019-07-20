
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }
  createBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  drawLines() {
    let x = 200;
    let y = 600;
    for(let i=0; i < this.secretWord.length; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      x += 50
      this.ctx.lineTo(x, y);
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
      x += 50
      
    }
  }
//WORK IN PROGRESS
  // writeCorrectLetter(positionInWord) {
  //   let x = 200;
  //   let y = 600;

  //   for(let i = 0; i < this.secretWord.length; i++){
  //     if(positionInWord === 0){
  //       this.ctx.font = '48px serif';
  //       this.ctx.fillText(this.secretWord[positionInWord], x, y); 
  //     }

  //     else if (positionInWord > 0 && positionInWord === i){
  //       this.ctx.font = '48px serif';
  //       this.ctx.fillText(this.secretWord[positionInWord], x + i*100, y);
  //     }
  //   }
    
  // }

  writeWrongLetter(letter, errorsLeft) {
    
  }
  drawHangman(shape) {

  }
  gameOver() {

  }
  winner() {

  }
}




