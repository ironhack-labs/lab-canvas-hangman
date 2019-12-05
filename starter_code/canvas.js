
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.ctx.font = '48px serif';
    
  }

  createBoard() {
    
    this.ctx.clearRect(0, 0, 1200, 800) ;
    this.drawLines();
  }

  drawLines() {
    console.log("Secret word is", this.secretWord);
    var x = 250;
    var y = 500;
    for(var i = 0; i < this.secretWord.length; i++) {
      console.log("drawing line");
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + 50, y);
      this.ctx.stroke();
      this.ctx.closePath();
      x += 70;
    } 
  }

  writeCorrectLetter(index) {
    this.ctx.fillText(this.secretWord[index].toUpperCase(), (70 * index) + 260, 490);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.fillText(letter.toUpperCase(), 70 * (10 - errorsLeft) + 450, 200);
  }

  drawHangman(shape) {
    switch(shape) {
      case 10:
        this.drawLine(100, 500, 200, 500);
        break;
      case 9:
        this.drawLine(100, 500, 150, 430);
        break;
      case 8:
        this.drawLine(200, 500, 150, 430);
        break;
      case 7:
        this.drawLine(150, 430, 150, 80);
        break;
      case 6:
        this.drawLine(150, 80, 400, 80);
        break;
      case 5:
        this.drawLine(400, 80, 400, 110);
        break;
      case 4:
        this.drawCircle(400, 150, 40, 0);
        break;
      case 3:
        this.drawLine(400, 190, 400, 340);
        break;  
      case 2:
        this.drawLine(400, 340, 350, 390);
        break; 
      case 1:
        this.drawLine(400, 340, 450, 390);
        break; 

    }

  }

  gameOver() {
    console.log("Loser");
    const img = new Image();  
    img.src = './images/gameover.png'; 
    img.onload = function() {
      this.ctx.drawImage(img, 600 - (img.width/2), 400 - (img.height/2), img.width, img.height);
    }.bind(this);
  }

  winner() {
    console.log("Winner");
    const img = new Image();  
    img.src = './images/awesome.png'; 
    img.onload = function() {
      this.ctx.drawImage(img, 300 , 100 , img.width/2, img.height/2);
    }.bind(this);
    
  }

  drawLine(xStart, yStart, xEnd, yEnd) {
      this.ctx.beginPath();
      this.ctx.moveTo(xStart, yStart);
      this.ctx.lineTo(xEnd, yEnd);
      this.ctx.stroke();
      this.ctx.closePath();
  }

  drawCircle(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.arc(x1, y1, x2, y2, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();
  }

}