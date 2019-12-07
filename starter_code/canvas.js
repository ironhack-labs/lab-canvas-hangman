let has

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
this.ctx.clearRect(0,0,1500,1500);
this.drawLines();
  };

  drawLines() {
    for (var i = 0; i < hangman.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(500 + 50 * i,100);
      this.ctx.lineTo(525 + 50 * i,100);
      this.ctx.stroke();
      }
  };

  writeCorrectLetter(index, letter) {
    this.ctx.font = '20px Arial';
    this.ctx.fillText(letter, 507 + 50 * index,90);
  };

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = '20px Arial';
    this.ctx.fillText(letter, 507 + 50 * (9 - errorsLeft), 200);
  };

  drawHangman(shape) {
    switch (shape) {  
      case 9:
      this.ctx.beginPath();
      this.ctx.moveTo(100,200);
      this.ctx.lineTo(50,200);
      this.ctx.stroke();
      break;
    
      case 8:
      this.ctx.beginPath();
      this.ctx.moveTo(50,200);
      this.ctx.lineTo(75,150);
      this.ctx.stroke();
      break;
    
      case 7:
      this.ctx.beginPath();
      this.ctx.moveTo(75,150);
      this.ctx.lineTo(100,200);
      this.ctx.stroke();
      break;
    
      case 6:
      this.ctx.beginPath();
      this.ctx.moveTo(75,150);
      this.ctx.lineTo(75,00);
      this.ctx.stroke();
      break;
    
      case 5:
      this.ctx.beginPath();
      this.ctx.moveTo(75,00);
      this.ctx.lineTo(200,00);
      this.ctx.stroke();
      break;
    
      case 4:
      this.ctx.beginPath();
      this.ctx.moveTo(200,00);
      this.ctx.lineTo(200,50);
      this.ctx.stroke();
      break;
    
      case 3:
      this.ctx.beginPath();
      this.ctx.arc(200, 60, 10, 0, Math.PI*2, true);
      this.ctx.stroke();
      break;
    
      case 2:
      this.ctx.beginPath();
      this.ctx.moveTo(200,70);
      this.ctx.lineTo(200,125);
      this.ctx.stroke();
      break;
    
      case 1:
      this.ctx.beginPath();
      this.ctx.moveTo(200,125);
      this.ctx.lineTo(185,160);
      this.ctx.stroke();
      break;
    
      case 0:
      this.ctx.beginPath();
      this.ctx.moveTo(200,125);
      this.ctx.lineTo(215,160);
      this.ctx.stroke();
      break;
    }    
  }

  gameOver() {

  }

  winner() {

  }

};