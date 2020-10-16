class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    for(let i = 0; i < this.secretWord.length; i++){
      this.context.moveTo(100+75*i, 750);
      this.context.lineTo(150+i*75, 750);
      this.context.stroke();
    }
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    this.context.font = "35px sans-serif";
    for(let i of index){
      this.context.fillText(this.secretWord[i], 110+75*i, 715);
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "35px sans-serif";
    this.context.fillText(letter, 700+35*(10-errorsLeft), 100)
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    switch(errorsLeft){
      case 10:
        this.context.moveTo(0,700);
        this.context.lineTo(90, 700);
        break;
      case 9:
        this.context.moveTo(0,700);
        this.context.lineTo(45, 650);
        break;
      case 8:
        this.context.moveTo(90,700);
        this.context.lineTo(45, 650);
        break;
      case 7:
        this.context.moveTo(45,650);
        this.context.lineTo(45, 200);
        break;
      case 6:
        this.context.moveTo(45, 200);
        this.context.lineTo(300, 200);
        break;
      case 5:
        this.context.moveTo(300, 200);
        this.context.lineTo(300, 250);
        this.context.moveTo(340, 290);
        this.context.arc(300, 290, 40, 0, Math.PI*2);
        break;
      case 4:
        this.context.moveTo(300, 330);
        this.context.lineTo(300, 470);
        break;
      case 3:
        this.context.moveTo(300, 470);
        this.context.lineTo(250, 550);
        break;
      case 2:
        this.context.moveTo(300, 470);
        this.context.lineTo(350, 550);
        break;
      case 1:
        this.context.moveTo(370, 380);
        this.context.lineTo(230, 380);
        break;
    }
    this.context.stroke();
    this.context.closePath();
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
