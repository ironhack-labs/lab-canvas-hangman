class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // console.log(this.secretWord)
  }

  createBoard() {
    this.context.clearRect(0,0,1000,1000);
    this.drawLines()
  }

  drawLines() {
    let x = 500;
    let y = 700;
    this.context.beginPath();
    this.context.lineWidth = 3;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(x, y);
      this.context.lineTo(x + 30, y);
      x += 50;
    }
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    let x = 500;                                                                                // where the letter will be written is dependent on index of letter 
    let y = 700;                                                                                // in secretWord, so times the index by 45 (distance between lines)
    this.context.font = ('24px "Times New Roman"');                                                     
    this.context.fillText(this.secretWord[index].toUpperCase(), x + (index * 45 + 5), y - 10);  // +5 on X and -10 on Y to center letter over line
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 800;
    let y = 100;
    this.context.font = ('24px "Times New Roman"');
    // this.context.fillText(letter, x , y )
    this.context.fillText(letter, x + 50, y + 50);
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
    // push loser image here
  }

  winner() {
    // push winner image here
  }
}