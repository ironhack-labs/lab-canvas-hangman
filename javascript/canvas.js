
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

    requestAnimationFrame(() => this.animateShark());
    // setTimeout(`draw(${x}, ${y})`, 100);
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

      // sharkImg.onload = () => {
      //   setTimeout(() => {
      //     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //     this.context.drawImage(sharkImg, 200, 50);
      //   }, 100);
      // };
      
      // let sharkX = 0;
      // let sharkY = 0;
      // const draw = (x, y) => { 
      //   this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //   this.context.drawImage(shark, 0, this.canvas.height, 50, 50);
      //   sharkX += 3;
      //   sharkY += 3;
      //   setTimeout(`draw(${x}, ${y})`, 30);
      // };
  }
  

  gameOver() {
    const gameOverImg = new Image();
    gameOverImg.src = './images/gameover.png';

    gameOverImg.onload = () => {
      setTimeout(() => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(gameOverImg, 315, 150);
      }, 10000);
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

// class Shark {
//   constructor(width, height, img, x, y) {
//       this.img = img;
//       this.width = width;
//       this.height = height;
//       this.color = color;
//       this.x = x;
//       this.y = y;
//        // new speed properties
//       this.speedX = 0;
//       this.speedY = 0;
//   }

//   update() {
//       const ctx = myGameArea.context;
//       ctx.fillStyle = this.color;
//       ctx.fillRect(this.x, this.y, this.width, this.height);
//   }

//   newPos() {
//       this.x += this.speedX;
//       this.y += this.speedY;
//   } 
//   left() {
//       return this.x;
//   }
//       right() {
//       return this.x + this.width;
//   }
//   top() {
//       return this.y;
//   }
//   bottom() {
//       return this.y + this.height;
//   }
//   crashWith(obstacle) {
//       return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
//   }
  
  
// }