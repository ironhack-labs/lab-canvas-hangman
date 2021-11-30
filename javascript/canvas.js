class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,this.width,this.height);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    console.log(this.secretWord);
    let y = this.height - 100;
    let x =  40;
    let line = 40;

    for(let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      x = line * i;
      this.context.moveTo(x - 20, y);
      this.context.lineTo(x, y);
      this.context.stroke();
      x += line;
    }
      
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let y = this.height - 100;
    let x =  40;

    this.context.font = "30px Arial";
    this.context.fillText(this.secretWord[index], x*index, y);
  }

  writeWrongLetter(letter, errorsLeft) {
    let offset = Math.floor(10 - errorsLeft);
    console.log(offset);
    this.context.font = "30px Arial";
    this.context.fillText(letter, 200+ offset * 20 , 100);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 9 :
        this.context.strokeStyle = '#444';
        this.context.lineWidth = 2; 
        this.context.beginPath();
        this.context.moveTo(80, 270);
        this.context.lineTo(40, 225);
        this.context.lineTo(0, 270);
        this.context.lineTo(80, 270);
        this.context.lineTo(40, 225);
        this.context.moveTo(40, 225);
        this.context.lineTo(40, 5);
        this.context.lineTo(100, 5);
        this.context.lineTo(100, 25);
        this.context.stroke();
        break;

      case 8:
        this.context.lineWidth = 5;
        this.context.beginPath();
        this.context.arc(100, 50, 25, 0, Math.PI*2, true);
        this.context.closePath();
        this.context.stroke();
        break;
      
      case 7:
        this.context.beginPath();
        this.context.moveTo(100, 75);
        this.context.lineTo(100, 140);
        this.context.stroke();
        break;

      case 6:
        this.context.beginPath();
        this.context.moveTo(100, 85);
        this.context.lineTo(60, 100);
        this.context.stroke();
        break;

      case 5:
        this.context.beginPath();
        this.context.moveTo(100, 85);
        this.context.lineTo(140, 100);
        this.context.stroke();
        break;

      case 4:
        this.context.beginPath();
        this.context.moveTo(100, 140);
        this.context.lineTo(80, 190);
        this.context.stroke();
        break;

      case 3:
         this.context.beginPath();
         this.context.moveTo(82, 190);
         this.context.lineTo(70, 185);
         this.context.stroke();
      break;

      case 2:
        this.context.beginPath();
        this.context.moveTo(100, 140);
        this.context.lineTo(125, 190);
        this.context.stroke();
      break;

      case 1:
         this.context.beginPath();
         this.context.moveTo(122, 190);
         this.context.lineTo(135, 185);
         this.context.stroke();
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
