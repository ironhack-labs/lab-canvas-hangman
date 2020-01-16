const winner = new Image()
winner.src = "images/awesome.png"
const gameover = new Image()
    gameover.src = "./images/gameover.png"
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.vida = 0;
    this.createBoard();
  }
  
  createBoard() {
    this.ctx.clearRect(0,0, 1200, 800);
    this.ctx.font = '40px Arial';
    this.writeWrongLetter( hangman.letters.join(''), hangman.errorsLeft );
    this.writeCorrectLetter('');
    this.drawLines();
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo(20, 270);
    this.ctx.lineTo(170, 270);
    this.ctx.closePath();
    this.ctx.stroke();


    if( this.vida <= 9 ){
      this.ctx.beginPath();
      this.ctx.moveTo(20, 270);
      this.ctx.lineTo(95, 220);
      this.ctx.lineTo(170, 270);
      this.ctx.moveTo(20, 270);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    if( this.vida <= 8){
      this.ctx.beginPath();
      this.ctx.moveTo(95, 220);
      this.ctx.lineTo(95, 70);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    if( this.vida <= 7 ){
      this.ctx.beginPath();
      this.ctx.moveTo(95, 70);
      this.ctx.lineTo(170, 70);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    if( this.vida <= 6){
      this.ctx.beginPath()
      this.ctx.moveTo(170, 70);
      this.ctx.lineTo(170, 90);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    this.drawHangman();

  }
  drawHangman(shape) {
    if( this.vida <= 5){
    this.ctx.moveTo(190,110);
    this.ctx.arc(170, 110, 20,0, Math.PI * 2);
    this.ctx.stroke();
  }
    
    if( this.vida <= 4){
    this.ctx.beginPath();
    this.ctx.moveTo(170,130);
    this.ctx.lineTo(170, 220);
    this.ctx.closePath()
    this.ctx.stroke()}

    if( this.vida <= 3){
    this.ctx.beginPath();
    this.ctx.moveTo(170,220);
    this.ctx.lineTo(150, 240);
    this.ctx.closePath();
    this.ctx.stroke();
  }

    if( this.vida <= 2){
    this.ctx.beginPath();
    this.ctx.moveTo(170,220);
    this.ctx.lineTo(190, 240);
    this.ctx.closePath();
    this.ctx.stroke();
  }

    if( this.vida <= 1){
    this.ctx.beginPath();
    this.ctx.moveTo(170,170);
    this.ctx.lineTo(150, 190);
    this.ctx.closePath();
    this.ctx.stroke();
  }

    if( this.vida <= 0){
    this.ctx.beginPath();
    this.ctx.moveTo(170,170);
    this.ctx.lineTo(190, 190);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  }

  writeCorrectLetter(index) {
    index.split('');
    let writen = 0;
    const y = 270;
    let x = 270;

    this.secretWord.split('').forEach( lette => {
      this.ctx.beginPath();
      this.ctx.moveTo(x-5, y+5);
      this.ctx.lineTo(x+40, y+5);
      this.ctx.stroke();

      if( index.includes(lette.toUpperCase())){
        this.ctx.fillText(lette, x, y, 50);
        writen++;
      }
      x+= 50;
    });
    if(this.secretWord.length == writen){
    this.winner();
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.vida = errorsLeft;
    this.ctx.fillText( letter, 550, 100, 400);
    this.drawLines();
    if( this.vida <= 0) this.gameOver();
  }
  gameOver() {
    this.ctx.clearRect(0,0, 1200, 12000);
    this.ctx.drawImage(gameover, 50, 10, 600, 350);
  }

  winner() {
    this.ctx.clearRect(0,0, 1200, 900);
    this.ctx.drawImage(winner, 50, 10, 500, 500);
  }

}