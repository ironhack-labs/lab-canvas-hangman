class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    this.x = 800;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let y = 400;
    let x= 100;
    let xline = 150;

    for(let i=0; i<this.secretWord.length; i+=1) {
      this.context.beginPath();
       this.context.moveTo(x, y);
       this.context.lineTo(xLine, y);
       this.context.stroke();
       this.context.closePath();
       x += 100;
       xLine += 100;
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let y = 400;
     let x = 100;
     let letter = this.secretWord[index];

      [...this.secretWord].forEach((letter, idx) => {
         x += 100 * idx;
         this.context.font = '50px monospace';
         this.context.fillText(letter, x, y);
         x = 100;
     })
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '50px monospace';
    this.context.fillText(letter, this.x, 40);
    this.context.clearRect(0, 0, 200, 200)
    this.context.font = '50px monospace';
    this.context.fillText(errorsLeft, 100, 40);
    this.x += 50;
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    //triangle base
    if (errorsLeft < 10) {
      this.context.beginPath();
      this.context.moveTo(50, this.cHeight - 50);
      this.context.lineTo(250, this.cHeight - 50);
      this.context.lineTo(150, this.cHeight - 150);
      this.context.fill();
    }

     //pole
    if (errorsLeft < 9) {
      this.context.beginPath();
      this.context.moveTo(150, this.cHeight - 100);
      this.context.lineTo(150, this.cHeight - 750);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //overhang
    if (errorsLeft < 8) {
      this.context.beginPath();
      this.context.moveTo(148, this.cHeight - 750);
      this.context.lineTo(500, this.cHeight - 750);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //rope
    if (errorsLeft < 7) {
      this.context.beginPath();
      this.context.moveTo(498, this.cHeight - 750);
      this.context.lineTo(500, this.cHeight - 650);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //head
    if (errorsLeft < 6) {
      this.context.beginPath();
      this.context.arc(500, this.cHeight - 600, 50, 0, Math.PI * 2);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //body
    if (errorsLeft < 5) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 550);
      this.context.lineTo(500, this.cHeight - 400);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //left leg
    if (errorsLeft < 4) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 400);
      this.context.lineTo(450, this.cHeight - 300);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //right leg
    if (errorsLeft < 3) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 400);
      this.context.lineTo(550, this.cHeight - 300);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //left arm
    if (errorsLeft < 2) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 500);
      this.context.lineTo(450, this.cHeight - 400);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }

     //right arm
    if (errorsLeft < 1) {
      this.context.beginPath();
      this.context.moveTo(500, this.cHeight - 500);
      this.context.lineTo(550, this.cHeight - 400);
      this.context.lineWidth = 5;
      this.context.stroke();
      this.context.closePath();
    }
  }		   


  gameOver() {
    // ... your code goes here
    const imgGameOver = new Image();
     imgGameOver.src = './images/gameover.png'
     this.context.drawImage(imgGameOver, 400, 200);
  }

  winner() {
    // ... your code goes here
    const imgWinner = new Image();
     imgWinner.src = './images/awesome.png'
     this.context.drawImage(imgWinner, 200, 0);
  }
}
