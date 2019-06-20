class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
  }
  
  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.strokeStyle = 'black';
    this.ctx.setLineDash([]);
    this.ctx.strokeWidth = 4;
  }
  
  drawLines() {
    // LETTER LINES
    for (let x = 0; x < this.secretWord.length; x += 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(400 + (x * 30), 700);
      this.ctx.lineTo(400 + (x * 30) + 20, 700);
      this.ctx.stroke();
      this.ctx.closePath();
    }
    
    // TRIANGLE
    this.ctx.beginPath();
    this.ctx.moveTo(200, 700);
    this.ctx.lineTo(300, 700);
    this.ctx.lineTo(250, 670);
    this.ctx.lineTo(200, 700);
    this.ctx.stroke();
    this.ctx.closePath();
    
    // HANG
    this.ctx.beginPath();
    this.ctx.moveTo(250, 670);
    this.ctx.lineTo(250, 200);
    this.ctx.lineTo(550, 200);
    this.ctx.lineTo(550, 230);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  
  writeCorrectLetter(index) {
    this.ctx.font = "16px Arial";
    for(let x = 0; x < index.length; x += 1) {
      this.ctx.fillText(hangman.secretWord[index[x]].toUpperCase(), 405 + (index[x] * 30), 695);
    }
    
  }
  
  writeWrongLetter(letter, tries) {
    this.ctx.font = "26px Arial";
    this.ctx.fillText(letter.toUpperCase(), 670 + (tries * 30), 230);
  }
  
  drawHangman(numOfErrors) {
    switch (numOfErrors) {
      case 9: // CABEÇA
      this.ctx.beginPath();
      this.ctx.arc(550, 280, 50, 0, Math.PI * 2, false);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
      case 8: // OLHO ESQUERDO
      this.ctx.beginPath();
      this.ctx.arc(535, 265, 5, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.closePath();
      break;
      case 7: // OLHO DIREITO
      this.ctx.beginPath();
      this.ctx.arc(565, 265, 5, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.closePath();
      break;
      case 6: // BOCA
      this.ctx.beginPath();
      this.ctx.arc(550, 295, 10, 0, Math.PI, false);
      this.ctx.fill();
      this.ctx.closePath();
      break;
      case 5: // CORPO
      this.ctx.beginPath();
      this.ctx.moveTo(550, 330);
      this.ctx.lineTo(550, 500);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
      case 4: // BRAÇO ESQUERDO
      this.ctx.beginPath();
      this.ctx.moveTo(550, 350);
      this.ctx.lineTo(450, 400);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
      case 3: // BRRAÇO DIREITO
      this.ctx.beginPath();
      this.ctx.moveTo(550, 350);
      this.ctx.lineTo(650, 400);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
      case 2: // PERNA ESQUERDA
      this.ctx.beginPath();
      this.ctx.moveTo(550, 500);
      this.ctx.lineTo(500, 650);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
      case 1: // PERNA DIREITA
      this.ctx.beginPath();
      this.ctx.moveTo(550, 500);
      this.ctx.lineTo(600, 650);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
      case 0: // CHORO E BOCA TRISTE
      this.ctx.beginPath();
      this.ctx.setLineDash([4, 2]);
      this.ctx.strokeWidth = 7;
      this.ctx.strokeStyle = 'cyan';
      this.ctx.moveTo(565, 272);
      this.ctx.lineTo(565, 290);
      this.ctx.stroke();
      this.ctx.closePath();
      
      this.ctx.beginPath();
      this.ctx.arc(550, 295, 10, 0, Math.PI, true);
      this.ctx.fill();
      this.ctx.closePath();
      break;
      default:
      break;
    }
  }

  winner() {
    let img = document.getElementById('winner');
    this.ctx.drawImage(img, 0, 0);
    
    
    setTimeout(() => {canvas.createBoard()}, 5000);
  }
  
  gameOver() {
    let img = document.getElementById('loser');
    this.ctx.drawImage(img, 0, 0);
    
    
    setTimeout(() => {canvas.createBoard()}, 5000);
  }
  
}


// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };

//let canvas = new HangmanCanvas('IRONHACKS');
