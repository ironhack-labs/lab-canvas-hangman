class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    this.wrontLetterSpace = 500;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);

    this.context.beginPath();
    this.context.moveTo(100, 550);
    this.context.lineTo(200, 550);
    this.context.stroke();
    this.context.lineTo(150, 500);
    this.context.stroke();
    this.context.lineTo(100, 550);
    this.context.stroke();
    this.context.moveTo(150, 500);
    this.context.lineTo(150, 100);
    this.context.stroke();
    this.context.lineTo(350, 100);
    this.context.stroke();
    this.context.lineTo(350, 150);
    this.context.stroke();

    this.context.closePath();

    this.drawLines();
  }

  drawLines() {
    let lines = this.secretWord.length;
    console.log(lines);
    let startL = 200;
    for (let i = 0; i < lines; i++) {
      this.context.beginPath();
      this.context.moveTo(startL, 500);
      this.context.lineTo(startL + 40, 500);
      this.context.stroke();
      this.context.closePath();
      startL += 60;
    }
  }

  writeCorrectLetter(letter, index) {
    // ... your code goes here
    this.context.font = '50px Courier New';
    let location = 200;
    if(index.length > 1) {
      location += (62 * index[0]);
      this.context.fillText(letter, location, 460);
      let location2 = 200;
      location2 +=  (62 * index[1]);
      this.context.fillText(letter, location2, 460);
    } else {
      location +=  (62 * index[0]);
      this.context.fillText(letter, location, 460);
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes herehhhh
    this.context.font = '50px Courier New'
    this.context.fillText(letter, this.wrontLetterSpace, 200);
    this.wrontLetterSpace += 30;
    this.drawHangman(errorsLeft);

  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    this.context.arc(350, 200, 50, (Math.PI/180) * 0, (Math.PI/180) * 360);
    this.context.stroke();
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
