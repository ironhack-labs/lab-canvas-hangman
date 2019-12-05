class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = clearRect (0,0,this.canvas.width,this.canvas.height);
    this.ctx.lineWidth = 3;
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i += 1){
      this.ctx.beginPath();
      this.ctx.moveTo(300 + 20*(2*i),800);
      this.ctx.lineTo(300 + 20*(2*i+1),800);
      this.ctx.stroke();
    } 
  }

  writeCorrectLetter(letter) {
    for (let i = 0; i < this.secretWord.length; i += 1){
      if (letter.toUpperCase = this.secretWord[i].toUpperCase){
      this.ctx.fillText(letter.toUpperCase,310 + 20*(2*i),770); 
      }
    } 
  }

  writeWrongLetter() {
    this.ctx.fillText(hangman.wrongLetter,600,300);
  }


  drawHangman() {
    switch (hangman.errorsLeft) {

      case 10:
      //triangle
      this.ctx.beginPath();
      this.ctx.moveTo(100,800);
      this.ctx.lineTo(160,720);
      this.ctx.lineTo(220,800);
      this.ctx.lineTo(100,800);
      this.ctx.stroke();
      break;

      case 9:
      //straight-line-up
      this.ctx.beginPath();
      this.ctx.moveTo(160,720);
      this.ctx.lineTo(160,250);
      this.ctx.stroke();
      break;

      case 8:
      //straight-line-across
      this.ctx.beginPath();
      this.ctx.moveTo(160,250);
      this.ctx.lineTo(310,250);
      this.ctx.stroke();
      break;

      case 7:
      //straight-line-down
      this.ctx.beginPath();
      this.ctx.moveTo(310,250);
      this.ctx.lineTo(310,280);
      this.ctx.stroke();
      break;

      case 6:
      //head
      this.ctx.beginPath();
      this.ctx.arc(310,310,30,0,Math.PI *2);
      this.ctx.stroke();
      break;

      case 5:
      //straight-line-down
      this.ctx.beginPath();
      this.ctx.moveTo(310,340);
      this.ctx.lineTo(310,450);
      this.ctx.stroke();
      break;

      case 4:
      //straight-left-arm
      this.ctx.beginPath();
      this.ctx.moveTo(310,400);
      this.ctx.lineTo(260,450);
      this.ctx.stroke();
      break;

      case 3:
      //straight-right-arm
      this.ctx.beginPath();
      this.ctx.moveTo(310,400);
      this.ctx.lineTo(360,450);
      this.ctx.stroke();
      break;
    
      case 2:
      //straight-left-leg
      this.ctx.beginPath();
      this.ctx.moveTo(310,450);
      this.ctx.lineTo(260,500);
      this.ctx.stroke();
      break;

      case 1:
      //straight-left-leg
      this.ctx.beginPath();
      this.ctx.moveTo(310,450);
      this.ctx.lineTo(360,500);
      this.ctx.stroke();
      break;
      // case 0 is not called as game ends
      }
    }
  // gameOver() {
  // }

  // winner() {
  // }
}

const myCanvas = new HangmanCanvas ('Ironhack');
myCanvas.drawLines();