class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    let ctx = this.context;
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';

    let x = 300;
    let y = 550;

    ctx.beginPath();

    let arraySecretWord = this.secretWord.split("");
    arraySecretWord.forEach(letter => {
      ctx.moveTo(x, y);
      ctx.lineTo(x + 40, y);
      x += 60;
      ctx.closePath();
    });

    ctx.stroke();
   
  }


  writeCorrectLetter(index) {
    this.context.font = "30px Arial";
    let arraySecret = this.secretWord.split("");
    this.context.fillText(arraySecret[index].toUpperCase(), 310 + (60 * index), 540);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "30px Arial";
    this.context.fillText(letter.toUpperCase(), 310 + (60 * errorsLeft), 40);
  }

  drawHangman(errorsLeft) {
    
    let ctx = this.context;

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';

    switch(errorsLeft){
      case 9:
        //base
        ctx.beginPath();
        ctx.moveTo(50, 550);
        ctx.lineTo(150, 550);
        ctx.lineTo(100, 500);
        ctx.lineTo(50, 550);
        ctx.closePath();
        ctx.stroke();
        break;
      case 8:
        //first line
        ctx.beginPath();
        ctx.moveTo(100, 500);
        ctx.lineTo(100, 150);
        ctx.stroke(); 
        break;
      case 7:
        //second line
        ctx.lineTo(300, 150);
        ctx.stroke(); 
        break;
      case 6:
        //third line
        ctx.lineTo(300, 200);
        ctx.stroke(); 
        break;
      case 5: 
        //head
        ctx.beginPath();
        ctx.arc(300, 250, 50, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke(); 
        break;
      case 4: 
        //body
        ctx.beginPath();
        ctx.moveTo(300, 300);
        ctx.lineTo(300, 400);
        ctx.stroke(); 
        break;
      case 3: 
        //right leg
        ctx.lineTo(350, 470);
        ctx.stroke(); 
        break;
      case 2: 
        //left leg
        ctx.moveTo(300, 400);
        ctx.lineTo(250, 470);
        ctx.stroke(); 
        break;
      case 1: 
        //right arm
        ctx.moveTo(300, 320);
        ctx.lineTo(350, 390);
        ctx.stroke(); 
        break;
      case 0: 
        //left arm
        ctx.moveTo(300, 320);
        ctx.lineTo(250, 390);
        ctx.stroke(); 
        break;
    }

  }

  gameOver() {
    if(hangman.checkGameOver()){
      let gameOverImg = new Image();
      gameOverImg.src = "images/gameover.png";
      this.context.drawImage(gameOverImg, 20, 20, 570, 240);
    }
  }

  winner() {
    if(hangman.checkWinner()){
      let winnerImg = new Image();
      winnerImg.src = "images/awesome.png";
      this.context.drawImage(winnerImg, 20, 20, 872, 618);
    }
  }
}
