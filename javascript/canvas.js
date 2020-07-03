class HangmanCanvas {
  constructor(secretWord) {
    this.hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    this.context = document.getElementById('hangman').getContext('2d');
    this.secredWord = secretWord;
  }

  createBoard() {
    this.context.clearRect (0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let x = 0;
    let i = 0;
     while (i< this.secredWord.length){
      this.context.beginPath();
      this.context.moveTo(x, 650);
      this.context.lineTo(x+50, 650);
      this.context.stroke();
      x+=100;
      i++;
    }

  }

  writeCorrectLetter(index, letter) {
   if (this.secredWord){
      let x = 0;
      this.context.font = "30px Arial";
      this.context.fillText(letter, x + index *100 , 650);
  }
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 400;
    this.context.font = "40px Arial";
    this.context.fillText(letter, x + errorsLeft * 50 , 500);
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft){
      case (9):
        this.context.beginPath();
        this.context.moveTo(50, 550);
        this.context.lineTo(150, 550);
        this.context.stroke();
        break;
      case (8):
        this.context.beginPath();
        this.context.moveTo(50, 550);
        this.context.lineTo(100, 450);
        this.context.stroke();
        break;
      case (7):
        this.context.beginPath();
        this.context.moveTo(150, 550);
        this.context.lineTo(100, 450);
        this.context.stroke();
        break;
      case (6):
        this.context.beginPath();
        this.context.moveTo(100, 450);
        this.context.lineTo(100, 100);
        this.context.stroke();
        break;
      case (5):
        this.context.beginPath();
        this.context.moveTo(100, 100);
        this.context.lineTo(300, 100);
        this.context.stroke();
        break;
      case (4):
        this.context.beginPath();
        this.context.moveTo(300, 100);
        this.context.lineTo(300, 150);
        this.context.stroke();
        break;
      case (3):
        this.context.beginPath();
        this.context.arc(300, 180, 30, 0, Math.PI * 2);
        this.context.stroke();
        break;
      case (2):
        this.context.beginPath();
        this.context.moveTo(300, 210);
        this.context.lineTo(300, 400);
        this.context.stroke();
        break;
      case (1):
        this.context.beginPath();
        this.context.moveTo(300, 400);
        this.context.lineTo(250, 500);
        this.context.stroke();
        break;
      case (0):
        this.context.beginPath();
        this.context.moveTo(300, 400);
        this.context.lineTo(350, 500);
        this.context.stroke();
        break; 
    }

   
  }

  gameOver() {
    this.context.clearRect (0, 0, 1200, 800);
      let img = new Image();
      img.onload = () => {
        this.context.drawImage(img, 300, 0);
      };
      img.src = 'images/gameover.png';
  }

  winner() {
      this.context.clearRect (0, 0, 1200, 800);
      let img = new Image();
      img.onload = () => {
        this.context.drawImage(img, 150, 0);
      };
      img.src = 'images/awesome.png'; 
      
     
  }
}
