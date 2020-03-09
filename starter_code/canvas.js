
class HangmanCanvas {
  constructor(secretWord, width, height) {
    this.canvas = document.getElementById('hangman');
    this.context;
    this.secretWord = secretWord;
    this.width = width;
    this.height = height;
    this.backgroundPosition = 0;
  }

  createBoard() {
    this.context = this.canvas.getContext('2d');
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.lineWidth= 3;
    
  }

  drawLines() {
    let x = 280
    let ctx = this.context;

    this.secretWord.split('').forEach(element => {

      ctx.beginPath();
      // starting position is x=50, y=50
      ctx.moveTo(x, 400);
      // draw the line that has final coordinates x=250, y=50
      ctx.lineTo(x+40, 400);
      // .stroke() executes the drawing
      ctx.stroke();
      // close the path
      ctx.closePath();

      x += 60;
      
    });

    ctx.beginPath();
    // starting position is x=50, y=50
    ctx.moveTo(200, 350);
    // draw the line that has final coordinates x=250, y=50
    ctx.lineTo(140, 400);
    ctx.lineTo(260, 400);
    ctx.lineTo(200, 350);
    ctx.lineTo(200, 50);
    ctx.lineTo(480, 50);
    ctx.lineTo(480, 100); 
    // .stroke() executes the drawing
    ctx.stroke();
    // close the path
    ctx.closePath();

  }

  writeCorrectLetter(index) {
    let ctx = this.context;

    let x = 290;
    let y = 395;

    ctx.font='30px Arial';

    let secretArray = this.secretWord.split('');

    for (let i = 0; i < secretArray.length; i++) {
      if (this.secretWord[index].toUpperCase() === secretArray[i].toUpperCase()){
      ctx.fillText(this.secretWord[i].toUpperCase(), (x + (60 * i)), y);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    let ctx = this.context;

    let x = 850;
    let y = 100;

    ctx.font='30px Arial';

    ctx.fillText(letter.toUpperCase(), x - (errorsLeft * 30), y);


  }

  drawHangman(shape) {
    let ctx = this.context;

    switch(shape) {
      
      case 9:
        //HEAD
        ctx.beginPath();
        // ctx.arc(x, y, radius, startAngle, endAngle)
        ctx.arc(480, 130, 30, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        break;

      case 8:
        //BODY
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(480, 160);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(480, 260);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();
        break;

      case 7:
        //LEFT ARM
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(480, 190);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(440, 230);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();
        break;

      case 6:
        //RIGHT ARM
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(480, 190);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(520, 230);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();
        break;

      case 5:
        //LEFT LEG
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(480, 260);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(440, 300);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();
        break;
  
      case 4:
        // RIGHT LEG
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(480, 260);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(520, 300);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();    
        break;

      case 3:
        // LEFT HAND
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(440, 230);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(430, 220);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();    
        break;

      case 2:
        //RIGHT HAND
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(520, 230);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(530, 220);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();    
        break;

      case 1:
        //LEFT FOOT
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(440, 300);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(430, 290);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();    
        break;

      case 0:
        ctx.beginPath();
        // starting position is x=50, y=50
        ctx.moveTo(520, 300);
        // draw the line that has final coordinates x=250, y=50
        ctx.lineTo(530, 290);
        // .stroke() executes the drawing
        ctx.stroke();
        // close the path
        ctx.closePath();    
        break;
    }
  }

  gameOver() {
    let ctx = this.context;

    const endGame = new Image();
    endGame.src = './images/gameover.png';
    endGame.onload = function() {
      ctx.drawImage(endGame, 300, 0, 550, 350);
    };
  }

  winner() {
    let ctx = this.context;

    const winGame = new Image();
    winGame.src = './images/awesome.png';
    winGame.onload = function() {
      ctx.drawImage(winGame, 300, 0, 550, 350);
    };

  }

}