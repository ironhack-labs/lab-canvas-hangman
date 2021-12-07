class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200)
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(500, 250);
    this.context.lineTo(500, 200);
    this.context.lineTo(175, 200);
    this.context.lineTo(175, 650);
    this.context.lineTo(100 ,700)
    this.context.lineTo(250 ,700)
    this.context.lineTo(175 ,650)
    this.context.moveTo(300, 700);
    for (let i = 0; i < this.secretWord.length; i += 1){
      this.context.lineTo(350 + 60 * i, 700);
      this.context.moveTo(350 + 60 * i + 10, 700);
    }
    this.context.strokeStyle = "black";
    this.context.lineWidth = 4;
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    let letter = this.secretWord[index].toUpperCase();
    this.context.font = '40px Georgia';
    for (let i = 0; i < this.secretWord.length; i += 1){
      if (letter === this.secretWord[i].toUpperCase()){
        this.context.fillText(letter, 310 + 50 * i + 10 * i, 680, 50)
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '40px Georgia';
    let row = Math.floor (errorsLeft / 5);
    this.context.fillText (
      letter,
      1000 - 60 * errorsLeft + 300 * row,
      300 - 100 * row,
      50,
    );
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case 9:
       this.context.beginPath();
       this.context.arc(500, 300, 50, 0, Math.PI * 2)
       this.context.stroke();
       this.context.closePath();
       break;
      case 8:
        break;
      case 7:
        break;
      case 6:
        break;
      case 5:
        break;
      case 4:
        break;
      case 3:
        break;
      case 2:
        break;
      case 1:
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
