
class HangmanCanvas {
  constructor(canvas, secretWord) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.secretWord = secretWord;
    this.sharkImg = new Image();
    this.sharkImg.src = './images/Shark.png';
    this.sharkX = this.canvas.width;
    this.sharkY = this.canvas.height;
    this.x = 7;
    this.y = 5;
    this.grow = 0;
    let rAf = null;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    this.context.lineWidth = 3;
    for(let i = 0; i < this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(300 + (i * 42), 400);
      this.context.lineTo(330 + (i * 42), 400);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    const guessedLetter = this.secretWord[index];
    
    this.context.font = '32px sans-serif';
    
    for(let i = 0; i < this.secretWord.length; i++) {
      if(this.secretWord[i] === guessedLetter) {
        console.log('length ', this.secretWord.length);
        this.context.fillText(guessedLetter, 300 + i * 44, 390);
      }
    }    
  }

  writeWrongLetter(letter, errorsLeft) {
    const x = 650 + errorsLeft * 40;
    console.log(typeof errorsLeft);
    this.context.font = '32px sans-serif';
    this.context.fillText(letter, x, 25);

    this.drawHangman(errorsLeft);
      
  }
  animateShark() {
    console.log('shar k',this.sharkX);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawHangman(1, true);
    this.context.drawImage(this.sharkImg, this.sharkX, this.sharkY, 100 + this.grow, 100 + this.grow);
   
    this.sharkX -= this.x;
    this.sharkY -= this.y;
    this.grow += 1;
    if(this.sharkX > 100) {
      rAf = requestAnimationFrame(() => this.animateShark());
    } else {
      cancelAnimationFrame(rAf);
      this.gameOver();
    }
  
  }

  drawHangman(errorsLeft, drawAll) {
    if(drawAll === undefined) {drawAll = false;}
    const shark = new Image();
    shark.src = './images/Shark.png';

    if(errorsLeft === 9 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(50, 300);
      this.context.lineTo(100, 270);
      this.context.lineTo(150, 300);
      this.context.closePath();
      this.context.moveTo(100,270);
      this.context.lineTo(100, 5);
      this.context.lineTo(200, 5);
      this.context.lineTo(200, 20)
      this.context.stroke();
    }
    if(errorsLeft === 8 || drawAll) {
      this.context.beginPath();
      this.context.arc(200, 45, 26, 0, Math.PI * 2);
      this.context.stroke();
    }
    if(errorsLeft === 7 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(200, 70);
      this.context.lineTo(200, 150);
      this.context.stroke();
    }
    if(errorsLeft === 6 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(200, 90);
      this.context.lineTo(260, 60);
      this.context.stroke();
    }
    if(errorsLeft === 5 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(200, 90);
      this.context.lineTo(130, 60);
      this.context.stroke();
    }
    if(errorsLeft === 4 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(200, 150);
      this.context.lineTo(260, 200);
      this.context.stroke();
    }
    if(errorsLeft === 3 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(200, 150);
      this.context.lineTo(130, 200);
      this.context.stroke();
    }
    if(errorsLeft === 2 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(185, 35);
      this.context.lineTo(195, 47);
      this.context.moveTo(195, 35);
      this.context.lineTo(185, 47);
      this.context.stroke();
    }
    if(errorsLeft === 1 || drawAll) {
      this.context.beginPath();
      this.context.moveTo(203, 35);
      this.context.lineTo(212, 47);
      this.context.moveTo(212, 35);
      this.context.lineTo(203, 47);
      this.context.stroke();
    }
    if(errorsLeft === 0) {
      this.animateShark();
    }
  }
  

  gameOver() {
    const gameOverImg = new Image();
    gameOverImg.src = './images/gameover.png';

    gameOverImg.onload = () => {
      setTimeout(() => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(gameOverImg, 315, 150);
      }, 100);
    };
  }

  winner() {
    const yayImg = new Image();
    yayImg.src = './images/awesome.png';

    yayImg.onload = () => {
      setTimeout(() => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(yayImg, 200, 50);
      }, 1000);
    };
  }
}

