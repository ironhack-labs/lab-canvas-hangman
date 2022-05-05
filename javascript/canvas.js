class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    //this.canvas = document.getElementById('hangman');
    //this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(200 + i * 70, 600);
      this.context.lineTo(250 + i * 70, 600);
      this.context.stroke();
      this.context.closePath();
      
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
   /* checkClickedLetters(letter);
    if(this.secretWord.includes(letter)) {
     context.fillText(letter, index*60 + 240, 590);
   } */
    
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
   /* if(!this.secretWord.includes(letter)) {
      context.fillText(letter, index*60 + 400, 300);
    } */
  } 

  drawHangman(errorsLeft) {
    // ... your code goes here
    /* switch (errorsLeft) {
      /*case 0:
      
      this.context.beginPath();
      this.context.moveTo(75, 50);
      this.context.lineTo(100, 75);
      this.context.lineTo(100, 25);
      this.context.stroke();
      this.context.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle, true);
      ctx.moveTo(290, 75)
      ctx.arc(100, 75, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath(); 
    } */
  }

  gameOver() {
    // ... your code goes here
    const gameOverImg = new Image();
    gameOverImg.src = './images/gameover.png';
    let goX = 0;
    let goY = 0;
    this.context.drawImage(gameOverImg, goX, goY);
  }

  winner() {
    // ... your code goes here
    const winnerImg = new Image();
    winnerImg.src = './images/awesome.png';
    let wX = 0;
    let wY = 0;
    this.context.drawImage(winnerImg, wX, wY);
  }
}
