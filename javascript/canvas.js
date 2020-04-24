class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.lettersToGuess = [...this.secretWord];
    // ... your code goes here
  }

  createBoard() {
    // Clear canvas and draw new lines
    this.ctx.clearRect(0, 0, this.width, this.height );
    this.drawLines();
    console.log("create board");
  }


  drawLines() {
    //Define where forst line starts
    let x = (this.width / 10) * 5;
    let y = (this.height / 10) * 4;

    // Draw 1 line for every letter of the secretWord
    this.lettersToGuess.forEach(letter => {
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + 30, y);
      this.ctx.stroke();
      x += 50;
    });
  }

  writeCorrectLetter(index) {
    //Put correct letter on position of x+index*50
    let x = (this.width / 10) * 5;
    let y = ((this.height / 10) * 4 - 5);
    this.ctx.font = "30px Georgia";
    this.ctx.fillStyle = "green"
    this.ctx.fillText(this.lettersToGuess[index].toUpperCase(), x + index * 50, y);
    }
    

  writeWrongLetter(letter, errorsLeft) {
    //Put wrong letter in the corner. X depends on errorsLeft
    let x = (this.width / 10) * 5;
    let y = ((this.height / 10) * 2);
    this.ctx.font = "30px Georgia";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(letter.toUpperCase(), x + 50 * errorsLeft, y);
    }
  

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = "brown";
        this.ctx.beginPath();
        this.ctx.moveTo(70, 700);
        this.ctx.lineTo(230, 700);
        this.ctx.lineTo(150, 650);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      
      case 8:
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(150, 650);
        this.ctx.lineTo(150, 100);
        this.ctx.stroke();
        break;

      case 7:
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(100,150);
        this.ctx.lineTo(500, 150);
        this.ctx.stroke();
        break;
      
      case 6:
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(450, 130);
        this.ctx.lineTo(450, 230);
        this.ctx.stroke();
        break;

      case 5:
        this.ctx.beginPath();
        this.ctx.arc(450, 280, 50, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(450, 330);
        this.ctx.lineTo(450, 490);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      
      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(450, 490);
        this.ctx.lineTo(500, 570);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(450, 490);
        this.ctx.lineTo(400, 580);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(450, 350);
        this.ctx.lineTo(400, 420);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 0:
         this.ctx.beginPath();
         this.ctx.moveTo(450, 350);
         this.ctx.lineTo(500, 420);
         this.ctx.closePath();
         this.ctx.stroke();
        break;
    } 
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
