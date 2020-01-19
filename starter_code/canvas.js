


class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    /*this.guessedLetter = guessedLetter*/
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800)
    this.drawLines()
    
  }

  drawLines() {
    this.ctx.beginPath()
    for(let i = 0; i< this.secretWord.length; i++){
      this.ctx.moveTo(300 + 100 * i, 600)
      this.ctx.strokeStyle = "black"
      this.ctx.lineWidth = 3
      this.ctx.lineTo((300 + 100 * i)+ 60, 600)
      this.ctx.stroke()
      this.ctx.closePath()
    } 
  }

  writeCorrectLetter(letter){
    this.ctx.font = '30px Arial'
    this.ctx.fillStyle = 'black'
    for(let i =0; i< this.secretWord.length; i ++){
      if(letter === this.secretWord[i]){
        this.ctx.fillText (letter,305 + 100 * i, 590)
      }
    }
    this.ctx.closePath()
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.beginPath()
    this.ctx.font = '30px Arial'
    for (let i = 0; i < letter.length; i++) {
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(letter[i], 650 + 50 * i, 400)
    }
    this.drawHangman(errorsLeft)
    this.ctx.closePath()
  }

  drawHangman(shape) {
    switch (shape){
      case 9:
  this.ctx.beginPath()
        this.ctx.moveTo(100,600)
        this.ctx.lineTo(200,600)
        this.ctx.lineTo(150,550)
        this.ctx.lineTo(100,600)
        this.ctx.lineWidth= 3
        this.ctx.stroke()
        this.ctx.closePath()
      break;
      case 8: 
        this.ctx.beginPath()
        this.ctx.moveTo(150,550)
        this.ctx.lineTo(150,100)
        this.ctx.lineWidth = 3
        this.ctx.stroke()
        this.ctx.closePath()
      break;
      case 7:
        this.ctx.beginPath()
        this.ctx.moveTo(150,100)
        this.ctx.lineTo(500,150)
        this.ctx.lineWidth = 3
        this.ctx.stroke()
        this.ctx.closePath()
      break;
      case 6:
        this.ctx.beginPath()
        this.ctx.moveTo(500,100)
        this.ctx.lineTo(500,150)
        this.ctx.lineWidth = 3
        this.ctx.stroke()
        this.ctx.closePath()
      break;
      case 5:
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(500,200, 50, 0, 2*Math.PI, true);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
      break;
      case 4:
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(500,250);
        this.ctx.lineTo(500,400);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
      break;
      case 3: 
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(500,400);
        this.ctx.lineTo(450,500);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
      break;
      case 2:
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(500,400);
        this.ctx.lineTo(550,500);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
      break;
      case 1:
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(500,275);
        this.ctx.lineTo(450,350);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
      break;
      case 0:
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.moveTo(500,275);
        this.ctx.lineTo(550,350);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
      break;   
    }



  }

  gameOver() {
    let imgGameOver = new Image()
    imgGameOver.src = './images/gameover.png'
    imgGameOver.onload = () =>{
      this.ctx.drawImage (imgGameOver,300,250)
    }

    //confirm("You are a fucking looser");
  }

  winner() {
    let imgWinner = new Image()
    imgWinner.src = './images/awesome.png'
    imgWinner.onload = () => {
      this.ctx.drawImage(imgWinner, 250, 100)
    } 
    //confirm("You are the man");
  }

}