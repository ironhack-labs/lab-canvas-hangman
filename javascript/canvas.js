class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    // ... your code goes here

    this.secretWord = secretWord

  }

  createBoard() {
    // ... your code goes here

    this.ctx.clearRect(0, 0, 1200, 800);

  }

  drawLines() {
    // ... your code goes here

    let x = 740;

    let y = 80;

    this.ctx.lineWidth = 4;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + 50, y);
      x += 60;
      this.ctx.stroke()
    }

  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here

    switch (errorsLeft) {

      // Base
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(80, 650);
        this.ctx.lineTo(170, 650);
        this.ctx.lineTo(125, 610);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

        // Palo vertical
      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(125, 610);
        this.ctx.lineTo(125, 110);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

        // Palo horizontal
      case 7:
        this.ctx.beginPath();
        this.ctx.moveTo(125, 110);
        this.ctx.lineTo(500, 110);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

        // cuerda
      case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 110);
        this.ctx.lineTo(500, 210);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

        // Cabeza
      case 5:
        this.ctx.beginPath();
        this.ctx.arc(500, 250, 40, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

        // Cuerpo 
      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 290);
        this.ctx.lineTo(500, 450);
        this.ctx.closePath();
        this.ctx.stroke();
        break;


        // Piernas  

      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 450);
        this.ctx.lineTo(450, 500);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 450);
        this.ctx.lineTo(550, 500);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

        //Brazos  

      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(450, 350);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

      case 0:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(550, 350);
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