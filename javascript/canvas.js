class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();    
  }

  drawLines() {

    let x = 300;
    let y = 700;
    this.context.lineWidth = 3;
    this.context.beginPath();

    for(let letter of this.secretWord) {
      this.context.moveTo(x, y);
      this.context.lineTo(x + 50, y);
      x += 80;
    }
    this.context.stroke();
  }

  writeCorrectLetter(index) {
        
    this.context.font = "30px Calibri";
    this.context.fillText(this.secretWord[index].toUpperCase(), 320 + (80 * index), 680);
  }

  writeWrongLetter(letter, errorsLeft) {
    
    this.context.font = "30px Calibri";
    if(errorsLeft > 0) {
      this.context.fillText(letter.toUpperCase(), 900, 50 * errorsLeft); 
    }
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    if(errorsLeft == 9) {
      this.context.moveTo(50, 640);
      this.context.lineTo(150, 560);
      this.context.lineTo(250, 640);
      this.context.closePath();

    } else if(errorsLeft == 8) {
        this.context.moveTo(150, 560);
        this.context.lineTo(150, 80);

    } else if(errorsLeft == 7) {
        this.context.moveTo(150, 80);
        this.context.lineTo(500, 80);

    } else if(errorsLeft == 6) {
      this.context.moveTo(500, 80);
      this.context.lineTo(500, 150);

    } else if(errorsLeft == 5) {
      this.context.arc(500, 190, 40, 0, Math.PI * 2);

    } else if (errorsLeft == 4) {
      this.context.moveTo(500, 230);
      this.context.lineTo(500, 350);

    } else if(errorsLeft == 3) {
      this.context.moveTo(500, 350);
      this.context.lineTo(430, 400);
      this.context.moveTo(500, 350);
      this.context.lineTo(570, 400);

    } else if(errorsLeft == 2) {
      this.context.moveTo(500, 260);
      this.context.lineTo(400, 200);
      this.context.moveTo(500, 260);
      this.context.lineTo(600, 200);
      
    } else if(errorsLeft == 1) {
      alert("This is your last chance!");
      
    } 
    this.context.stroke();
  }

  gameOver() {
    let img = new Image();
    img.src = 'images/gameover.png';
    img.onload = () => {
      this.context.drawImage(img, 350, 250, img.width, img.height);
    }
  }

  winner() {
    let img = new Image();
    img.src = 'images/awesome.png';
    img.onload = () => {
      this.context.drawImage(img, 150, 150, img.width, img.height);
    }
  }
}
