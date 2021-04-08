
class HangmanCanvas {
  constructor(canvas, secretWord) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.secretWord = secretWord;
    this.sharkImg = new Image();
    this.sharkImg.src = './images/Shark.png';
    this.sharkX = 0;
    this.sharkY = 0;
    this.x = 3;
    this.y = 4;
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
    this.context.drawImage(this.sharkImg, this.sharkX, this.sharkY, 100, 100);
   
    this.sharkX += this.x;
    this.sharkY += this.y;

    window.requestAnimationFrame(() => this.animateShark);
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



// class HangmanCanvas {
//   constructor(secretWord) {
//     this.canvas = document.getElementById('hangman');
//     this.ctx = this.canvas.getContext('2d');
//     this.secretWord = secretWord;
//     this.hangmanParts = ['head', 'body', 'rightArm', 'rightHand', 'leftArm', 'leftHand', 'rightLeg', 'rightFoot', 'leftLeg', 'leftFoot'];
//     this.ctx.strokeStyle = 'black';
//     this.ctx.textAlign = 'center';
//     this.ctx.font = '48px Georgia';
//   }

//   createBoard() {
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     this.drawLines(150, 600, 225, 650);
//     this.drawLines(225, 650, 75, 650);
//     this.drawLines(75, 650, 150, 600);

//     this.drawLines(150, 600, 150, 200);
//     this.drawLines(150, 200, 400, 200);
//     this.drawLines(400, 200, 400, 300);

//     for (let i = 0; i < this.secretWord.length; i += 1) {
//       this.drawLines(400 + i * 75, 650, 450 + i * 75, 650);
//     }
//   }

//   drawLines(x1, y1, x2, y2) {
//     this.ctx.beginPath();
//     this.ctx.moveTo(x1, y1);
//     this.ctx.lineTo(x2, y2);
//     this.ctx.stroke();
//     this.ctx.closePath();
//   }

//   writeInvalidKeyMessage() {
//     this.ctx.font = '38px Georgia';
//     this.ctx.fillText('That key is very invalid', 600, 100);

//     setTimeout(() => {
//       this.ctx.clearRect(0, 0, this.canvas.width, 100);
//     }, 1500);
//   }

//   writeCorrectLetter(index) {
//     const guessedLetter = this.secretWord[index];

//     for (let i = 0; i < this.secretWord.length; i += 1) {
//       if (this.secretWord[i] === guessedLetter) {
//         this.ctx.fillText(guessedLetter.toUpperCase(), 425 + i * 75, 645);
//       }
//     }
//   }

//   writeWrongLetter(letter, errorsLeft) {
//     const letterOrder = 10 - errorsLeft;

//     this.ctx.fillText(letter.toUpperCase(), 450 + letterOrder * 50, 250);
//   }

//   drawHangman(errorsLeft) {
//     const errorOrder = 10 - errorsLeft;
//     const hangmanPart = this.hangmanParts[errorOrder - 1];

//     switch (hangmanPart) {
//       case 'head':
//         this.ctx.beginPath();
//         this.ctx.arc(400, 330, 30, 0, Math.PI * 2);
//         this.ctx.stroke();
//         this.ctx.closePath();
//         this.drawLines(385, 315, 390, 320);
//         this.drawLines(390, 315, 385, 320);
//         this.drawLines(415, 315, 410, 320);
//         this.drawLines(410, 315, 415, 320);
//         this.drawLines(390, 340, 410, 340);
//         break;
//       case 'body':
//         this.drawLines(400, 360, 400, 480);
//         break;
//       case 'rightArm':
//         this.drawLines(400, 390, 430, 440);
//         break;
//       case 'leftArm':
//         this.drawLines(400, 390, 370, 440);
//         break;
//       case 'rightLeg':
//         this.drawLines(400, 480, 430, 550);
//         break;
//       case 'leftLeg':
//         this.drawLines(400, 480, 370, 550);
//         break;
//       case 'rightHand':
//         this.drawLines(430, 440, 440, 435);
//         break;
//       case 'leftHand':
//         this.drawLines(370, 440, 360, 435);
//         break;
//       case 'rightFoot':
//         this.drawLines(430, 550, 445, 540);
//         break;
//       case 'leftFoot':
//         this.drawLines(370, 550, 355, 540);
//         break;
//       default:
//         console.log('Part does not exist');
//     }
//   }

//   gameOver() {
//     const gameOverImg = new Image();
//     gameOverImg.src = './images/gameover.png';

//     gameOverImg.onload = () => {
//       setTimeout(() => {
//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//         this.ctx.drawImage(gameOverImg, 315, 150);
//       }, 1000);
//     };
//   }

//   winner() {
//     const winnerImg = new Image();
//     winnerImg.src = './images/awesome.png';

//     winnerImg.onload = () => {
//       setTimeout(() => {
//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//         this.ctx.drawImage(winnerImg, 164, 50);
//       }, 1000);
//     };
//   }
// }
