let hangmanCanvas;


class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.ctx.fillStyle = "green"
    this.ctx.lineWidth = "3"
    this.ctx.strokeStyle = "white"  
    this.ctx.fillRect(10, 10, 600, 300)
    this.ctx.fillStyle = "white"
    this.ctx.font = "25px Arial" 
  }

  drawLines() {
    let xStart = 300;
    let xStep = 20;

    
    for(let i = 0; i < this.secretWord.length; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(xStart+xStep*i ,250);
      this.ctx.lineTo(xStart+xStep*i+17, 250);
      this.ctx.stroke();
    }
    
  }
  writeCorrectLetter(index) {
    let xStart = 300;
    let xStep = 20;
    
    this.ctx.fillText(this.secretWord[index].toUpperCase(), xStart+xStep*index , 245)
    
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



//hangmanCanvas.ctx.fillText('hallo', 10, 245)