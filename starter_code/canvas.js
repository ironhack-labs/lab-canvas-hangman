
class HangmanCanvas{
  constructor(secretWord){
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.count = 820;
  }

  createBoard(){
    this.ctx.clearRect(0 , 0, 2000, 2000);
  }

  drawLines() {
    let x1 = 400
    for(let i = 0; i < this.secretWord.length; i+= 1){
      this.ctx.beginPath();
      this.ctx.moveTo(x1, 700);
      this.ctx.lineTo(x1+50, 700);
      this.ctx.stroke();
      x1 += 60;
    }
  }

  writeCorrectLetter(index) {
    this.ctx.font = '20px sans-serif';
    this.ctx.fillText(this.secretWord[index], 405 + (index*60), 690);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = '20px sans-serif';
    this.ctx.fillText(letter, this.count, 250);
    this.count+= 20;
  }

  drawHangman(shape) {
    switch(shape) {
      case 9:
        this.ctx.beginPath()
        this.ctx.moveTo(100, 700)
        this.ctx.lineTo(300, 700)
        this.ctx.lineTo(200, 640)
        this.ctx.closePath()
        this.ctx.stroke()
        break;

      case 8:
        this.ctx.beginPath()
        this.ctx.moveTo(200, 640)
        this.ctx.lineTo(200, 200)
        this.ctx.stroke()
        break;

      case 7:
        this.ctx.beginPath()
        this.ctx.moveTo(200, 200)
        this.ctx.lineTo(400, 200)
        this.ctx.stroke();
        break;

      case 6:
        this.ctx.beginPath()
        this.ctx.moveTo(400, 200)
        this.ctx.lineTo(400, 250)
        this.ctx.stroke();
        break;

      case 5:
        this.ctx.beginPath()
        this.ctx.arc(400, 290, 40, 0*2*Math.PI/360, 360*2*Math.PI/360, true)
        this.ctx.stroke();
        break;

      case 4:
        this.ctx.beginPath()
        this.ctx.moveTo(400, 330)
        this.ctx.lineTo(400, 500)
        this.ctx.stroke();
        break;

      case 3:
        this.ctx.beginPath()
        this.ctx.moveTo(400, 500)
        this.ctx.lineTo(330, 570)
        this.ctx.stroke();
        break;

      case 2: 
        this.ctx.beginPath()
        this.ctx.moveTo(400, 500)
        this.ctx.lineTo(470, 570)
        this.ctx.stroke();
        break;
      
      case 1:
        this.ctx.beginPath()
        this.ctx.moveTo(400, 400)
        this.ctx.lineTo(330, 350)
        this.ctx.stroke();
        break;

      case 0:
        this.ctx.beginPath()
        this.ctx.moveTo(400, 400)
        this.ctx.lineTo(470, 350)
        this.ctx.stroke();
        break;
    }
  }

  gameOver() {
    this.createBoard();
    let img = document.getElementById('loser')
    this.ctx.drawImage(img, 150, 100);
    setTimeout(() => {
      
    }, 100);
  }
  
  winner() {
    this.createBoard();
    let img = document.getElementById('winner')
    this.ctx.drawImage(img, 250, 250);
    setTimeout(() => {
    
    }, 100);
  }

}
