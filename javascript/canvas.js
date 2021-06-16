class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.drawLines();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(200 + (i*50),300);
      this.context.lineTo(220 + (i*50),300);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    console.log(index);
    let correctLetter = [];
    let count = 0;
    let pos = this.secretWord.indexOf(index);

    while(pos != -1) {
      count ++;
      correctLetter.push(pos);
      pos = this.secretWord.indexOf(index, pos+1);
    }

    for (let i = 0; i <= correctLetter.length; i++) {
      this.context.fillText(index, 210 + (correctLetter[i]*50), 290);
    }

  }

  writeWrongLetter(letter, errorsLeft) {
    console.log(letter);
    console.log(errorsLeft);
    let pos = errorsLeft;
      this.context.fillText(letter, 500 + (pos*50), 400 );
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    let looseImg = new Image();
    looseImg.src = '../images/gameover.png';
    this.context.drawImage(looseImg, 100, 100, 600, 400);
  }

  winner() {
    let winnerImg = new Image();
    winnerImg.src = '../images/awesome.png';
    this.context.drawImage(winnerImg, 100, 100, 600, 400);
  }
}
