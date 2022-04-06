class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    this.context.beginPath();
    this.context.moveTo(500, 175);
    this.context.lineTo(500, 100);
    this.context.lineTo(150, 100);
    this.context.lineTo(150, 650);
    this.context.lineTo(100, 700);
    this.context.lineTo(200, 700);
    this.context.lineTo(150, 650);
    this.context.moveTo(250, 700);
    for(let i = 0; i < this.secretWord.length; i += 1){
      this.context.lineTo(300 + 60 * i, 700)
      this.context.moveTo(300 + 60 * i + 10, 700);
    }
    this.context.lineWidth = 4;
    this.context.strokeStyle = 'black';
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let letter = this.secretWord[index].toUpperCase();
    this.context.font = '40px Georgia';
    for (let i = 0; i < this.secretWord.length; i += 1){
      if(this.secretWord[i].toUpperCase() === letter){
        this.context.fillText(letter, 260 + 50 * i + 10 * i, 680, 50);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '40px Georgia';
    let row = Math.floor(errorsLeft / 5);
    this.context.fillText(
      letter,
      1000 - 60 * errorsLeft + 300 * row,
      300 - 100 * row,
      50
    );
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.arc(500, 225, 50, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.moveTo(500, 275);
        this.context.lineTo(500, 425);
        this.context.stroke();
        break;
      case 7:
        this.context.lineTo(500, 425);
        this.context.lineTo(450, 500);
        this.context.stroke();
        break;
      case 6:
        this.context.lineTo(450, 500);
        this.context.lineTo(420, 500);
        this.context.stroke();
        break;
      case 5:
        this.context.moveTo(500, 425);
        this.context.lineTo(550,500);
        this.context.stroke();
        break;
      case 4:
        this.context.lineTo(580, 500);
        this.context.stroke();
        break;
      case 3:
        this.context.moveTo(500, 330);
        this.context.lineTo(430, 330);
        this.context.stroke();
        break;
      case 2:
        this.context.lineTo(570, 330);
        this.context.stroke();
        break; 
      case 1:
        this.context.beginPath();
        this.context.arc(485, 210, 5, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        this.context.arc(515, 210, 5, 0, Math.PI * 2);
        this.context.stroke();
        this.context.closePath();
        this.context.moveTo(485, 245);
        this.context.lineTo(515, 245)
        this.context.stroke();
    }
  }

  gameOver() {
    // ... your code goes here
    let img = new Image();
    img.src = "./images/gameover.png";
    this.context.drawImage(img, 0, 0);
  }

  winner() {
    // ... your code goes here
    let img = new Image();
    img.src = "./images/awesome.png";
    this.context.drawImage(img, 0, 0);
  }
}
