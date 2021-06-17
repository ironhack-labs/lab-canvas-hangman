class HangmanCanvas {
  constructor(secretWord) {
    this.board = document.getElementById('hangman')
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secret = secretWord;
    this.draws = 0

  }
  createBoard() {
    // CLear the Board
    this.ctx.clearRect(0, 0, this.board.width, this.board.height)
    // CREATE THE UNDERLINES OF THE SECRET WORD
    let a = this.secret.length;
    let x = this.board.width / 2;
    let y = this.board.height - 80;
    for (let i = 0; i < a; i++) {
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(x + 40, y)
      this.ctx.stroke();
      x += 55;
    }

  }
  // draw the Gallow and the hangman 
  drawLines(num) {
    const components = ['base', 'rook', 'traverse', 'hook', 'head', 'body', 'lleg', 'rleg', 'larm', 'rarm']
    let part = components[num]
    switch (part) {
      case 'base':
        this.ctx.beginPath()
        this.ctx.arc(150, 800, 120, 0, Math.PI, true)
        this.ctx.stroke();
        this.draws += 1;
        break;
      case 'rook':
        this.ctx.moveTo(150, 680);
        this.ctx.lineTo(150, 200);
        this.ctx.stroke()
        this.draws += 1;
        break;
      case 'traverse':
        this.ctx.moveTo(150, 200);
        this.ctx.lineTo(400, 200);
        this.ctx.stroke();
        this.draws += 1;
        break;
      case 'hook':
        this.ctx.moveTo(400, 200);
        this.ctx.lineTo(400, 250);
        this.ctx.stroke();
        this.draws += 1;
        break;
      case 'head':
        this.ctx.beginPath()
        this.ctx.arc(400, 285, 35, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.draws += 1;
        break;
      case 'body':
        this.ctx.moveTo(400, 320);
        this.ctx.lineTo(400, 500);
        this.ctx.stroke();
        this.draws += 1;
        break;
      case 'lleg':
        this.ctx.moveTo(400, 500);
        this.ctx.lineTo(340, 560);
        this.ctx.stroke();
        this.draws += 1;
        break;
      case 'rleg':
        this.ctx.moveTo(400, 500);
        this.ctx.lineTo(460, 560);
        this.ctx.stroke();
        this.draws += 1;
        break;
      case 'larm':
        this.ctx.moveTo(400, 400);
        this.ctx.lineTo(340, 340)
        this.ctx.stroke();
        this.draws += 1;

        break;
      case 'rarm':
        
        this.ctx.moveTo(400, 400);
        this.ctx.lineTo(460, 340);
        this.ctx.stroke();
        this.draws += 1;
        break;





    }


  }

  writeCorrectLetter(letter) {
    let a = this.secret.length;
    let x = (this.board.width / 2) + 10;
    let y = this.board.height - 80;

    //Loope over the secret word and print it
    for (let i = 0; i < this.secret.length; i++) {
      if (this.secret[i] === letter) {
        this.ctx.font = '30px Arial';
        this.ctx.fillText(letter.toUpperCase(), x, y - 5);
      }
      x += 55;
    }
  }

  writeWrongLetter(letter) {
    let x = (this.board.width / 2) + 10
    let y = (this.board.height/2)-200
    for(let i=0;i<10;i++){
      if(i===this.draws-1){
        this.ctx.font='30px Arial'
        this.ctx.fillText(letter.toUpperCase(),x,y)
      }
      x+=50;
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    let img=document.getElementById('lose');
    this.ctx.drawImage(img,150,150)
  }

  winner() {
    let img=document.getElementById('win');
    this.ctx.drawImage(img,150,150)
  }
}
