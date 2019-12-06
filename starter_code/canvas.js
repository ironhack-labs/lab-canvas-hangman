class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.x = 0;
    this.y = 0;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo((this.x = 250), (this.y = 500));
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.lineTo((this.x += 25), this.y);
      this.ctx.moveTo((this.x += 25), this.y);
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  writeCorrectLetter(index) {
    this.ctx.beginPath();
    this.x = 250;
    this.y = 490;
    this.ctx.font = "20px serif";
    for (let i = 0; i < this.secretWord.length; i++) {
      if (index === this.secretWord[i]) {
        this.ctx.fillText(index, this.x, this.y);
      }
      this.x += 50;
    }
    this.ctx.closePath();
  }

  writeWrongLetter(letter, errorsLeft) {
    console.log(letter);
    console.log(errorsLeft);
    this.ctx.beginPath();
    this.x = 700;
    this.y = 300;
    this.ctx.font = "20px serif";
    this.ctx.fillText(letter, this.x, this.y);
    this.drawHangman(errorsLeft);
  }

  drawHangman(shape) {
    if (shape === 9) {
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 100), (this.y = 500));
      this.ctx.lineTo((this.x += 100), this.y);
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 8) {
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 200), (this.y = 500));
      this.ctx.lineTo((this.x -= 50), (this.y -= 50));
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 7) {
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 150), (this.y = 450));
      this.ctx.lineTo((this.x -= 50), (this.y += 50));
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 6) {
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 150), (this.y = 450));
      this.ctx.lineTo((this.x), (this.y -= 300));
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 5) {
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 150), (this.y = 150));
      this.ctx.lineTo((this.x +=150), (this.y));
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 4){
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 300), (this.y = 150));
      this.ctx.lineTo((this.x), (this.y +=50));
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 3){
      this.ctx.beginPath();
      this.ctx.arc(this.x = 300,this.y = 220, 20, 0, 2 * Math.PI);
      this.ctx.stroke();
    } else if (shape === 2){
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 300), (this.y = 240));
      this.ctx.lineTo((this.x), (this.y +=150));
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 1){
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 300), (this.y = 390));
      this.ctx.lineTo((this.x +=50), (this.y +=50));
      this.ctx.stroke();
      this.ctx.closePath();
    } else if (shape === 0){
      this.ctx.beginPath();
      this.ctx.moveTo((this.x = 300), (this.y = 390));
      this.ctx.lineTo((this.x -=50), (this.y +=50));
      this.ctx.stroke();
      this.ctx.closePath();
    } 
  }

  gameOver() {
    let img = new Image();
    img.src ='images/gameover.png';
    img.onload = function(){
      this.ctx.drawImage(img,200,150);
    }.bind(this);
  }

  winner() {
    let img = new Image();
    img.src ='images/awesome.png';
    img.onload = function(){
      this.ctx.drawImage(img,200,150);
    }.bind(this);
  }
}
