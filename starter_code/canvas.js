
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.canvas = document.getElementById("hangman");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font = "50px Arial";
    this.origin = [300, 700];
    this.hyphen = 50;
    this.blank = 20;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    let x = this.origin[0];
    let y = this.origin[1];
  
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      x += this.hyphen;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.closePath();
      x += this.blank;
    }
  }

  writeCorrectLetter(index) {
    let x = this.origin[0] + (this.hyphen + this.blank) * index;
    let y = this.origin[1] - 10;
    let letter = this.secretWord[index];

    this.ctx.fillText(letter, x, y);
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = this.origin[0] + 50*(17 - errorsLeft);
    let y = this.origin[1] - 50*8;

    this.ctx.fillText(letter, x, y);

  }

  drawHangman(shape) {
    switch(shape){
      case 9: // triangle
        this.ctx.beginPath();
        this.ctx.moveTo(100, 700);
        this.ctx.lineTo(250, 700);
        this.ctx.lineTo(175, 650);
        this.ctx.lineTo(100, 700);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 8: // poste 1
        this.ctx.beginPath();
        this.ctx.moveTo(175, 650);
        this.ctx.lineTo(175, 100);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 7: // poste 2
        this.ctx.beginPath();
        this.ctx.moveTo(175, 100);
        this.ctx.lineTo(450, 100);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 6: // poste 3
        this.ctx.beginPath();
        this.ctx.moveTo(450, 100);
        this.ctx.lineTo(450, 150);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 5: // head
        this.ctx.beginPath();
        this.ctx.arc(450, 200, 50, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();   
        break;
      case 4: // body
        this.ctx.beginPath();
        this.ctx.moveTo(450, 250);
        this.ctx.lineTo(450, 450);
        this.ctx.stroke();
        this.ctx.closePath(); 
        break;
      case 3: // left leg
        this.ctx.beginPath();
        this.ctx.moveTo(450, 450);
        this.ctx.lineTo(400, 520);
        this.ctx.stroke();
        this.ctx.closePath(); 
        break;
      case 2: // right leg
        this.ctx.beginPath();
        this.ctx.moveTo(450, 450);
        this.ctx.lineTo(500, 520);
        this.ctx.stroke();
        this.ctx.closePath(); 
        break;
      case 1: // left arm
        this.ctx.beginPath();
        this.ctx.moveTo(450, 310);
        this.ctx.lineTo(400, 360);
        this.ctx.stroke();
        this.ctx.closePath(); 
        break;
      case 0: // right arm
        this.ctx.beginPath();
        this.ctx.moveTo(450, 310);
        this.ctx.lineTo(500, 360);
        this.ctx.stroke();
        this.ctx.closePath(); 
        break;
    }
  }

  gameOver() {
    alert("Game over");
  }

  winner() {
    alert("You win");
  }

}