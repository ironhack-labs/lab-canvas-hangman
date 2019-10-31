
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    
  }

  createBoard() {
    let canvas = document.querySelector('#hangman')
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  drawLines() {
    let nLines = this.secretWord.length;
    let shift = 20;
    let lineWidth = 50
    let start = 400;
    this.ctx.beginPath(); 
    for(let i=0; i<= nLines; i++){ 
      this.ctx.moveTo(start , 700);
      this.ctx.lineTo(start + lineWidth, 700);
      start += shift + lineWidth
    }
    this.ctx.stroke();
    this.ctx.closePath();
    
  }

  writeCorrectLetter(index) {
    let nLines = this.secretWord.length;
    let shift = 20;
    let lineWidth = 50
    let start = 400;
    this.ctx.font = "50px Arial";
    this.ctx.fillStyle ='black'
    for(let i=0; i<= nLines; i++){ 
      if (this.secretWord[i] === "s"){
        this.ctx.fillText('A', start + 10, 680);
      }
      start += shift + lineWidth
    }

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {
    //base
    this.ctx.beginPath(); 
    this.ctx.moveTo(225, 650);
    this.ctx.lineTo(150, 700);
    this.ctx.lineTo(300, 700);
    this.ctx.lineTo(225, 650);
    this.ctx.stroke();
    this.ctx.closePath();

    //main post
    this.ctx.beginPath(); 
    this.ctx.lineTo(225, 650);
    this.ctx.lineTo(225, 100);

    this.ctx.stroke();
    this.ctx.closePath();

    //main rigth post
    this.ctx.beginPath();
    this.ctx.lineTo(225, 100); 
    this.ctx.lineTo(600, 100);
    this.ctx.stroke();
    this.ctx.closePath();

    //down post
    this.ctx.beginPath();
    this.ctx.lineTo(600, 100); 
    this.ctx.lineTo(600, 200);
    this.ctx.stroke();
    this.ctx.closePath();

    //head
    this.ctx.beginPath();
    this.ctx.arc(600, 250, 50, 0, 2 * Math.PI, true);
    this.ctx.stroke();
    this.ctx.closePath();

    //body
    this.ctx.beginPath();
    this.ctx.lineTo(600, 300); 
    this.ctx.lineTo(600, 500);
    this.ctx.stroke();
    this.ctx.closePath();

    //Rigth leg
    this.ctx.beginPath();
    this.ctx.lineTo(600, 500); 
    this.ctx.lineTo(700, 600);
    this.ctx.stroke();
    this.ctx.closePath();

    //Left leg
    this.ctx.beginPath();
    this.ctx.lineTo(600, 500); 
    this.ctx.lineTo(500, 600);
    this.ctx.stroke();
    this.ctx.closePath();

    //Rigth arm
    this.ctx.beginPath();
    this.ctx.lineTo(600, 350); 
    this.ctx.lineTo(700, 400);
    this.ctx.stroke();
    this.ctx.closePath();

    //Left arm
    this.ctx.beginPath();
    this.ctx.lineTo(600, 350); 
    this.ctx.lineTo(500, 400);
    this.ctx.stroke();
    this.ctx.closePath();

  }

  gameOver() {
    let canvas = document.querySelector('#hangman')
    const img = new Image();
    img.src = 'images/gameover.png'
    this.ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }

  winner() {
    let canvas = document.querySelector('#hangman')
    const img = new Image();
    img.src = 'images/awesome.png'
    this.ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }

}