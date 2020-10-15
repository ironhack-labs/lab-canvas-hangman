class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord=secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0,1200,800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for (let index = 0; index < this.secretWord.length; index++) {
      this.context.beginPath();
      this.context.moveTo(200 + 80*index, 700);
      this.context.lineTo(260 + 80*index, 700);
      this.context.stroke();
      this.context.closePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    writeCorrectLetter(index) { 
      this.context.font = '50px Tahoma';
      this.context.fillText(this.secretWord[index], 515 + 70 * index, 690, 40);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '50px Tahoma';
    this.context.fillText(letter, 700 + 35 * (10 - errorsLeft), 250, 40);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    let X = 300;
    let Y = 700;
    switch (errorsLeft) {
      case 9:
      this.context.beginPath();
      this.context.moveTo(X, Y);
      this.context.lineTo(X + 140,Y);
      this.context.stroke(); 
    break;
      case 8:
      this.context.beginPath();
      this.context.moveTo(X,Y);
      this.context.lineTo(X + 70, Y - 50);
      this.context.stroke();
    break;
      case 7: 
      this.context.beginPath();
      this.context.moveTo(X + 140,Y);
      this.context.lineTo(X + 70,Y - 50);
      this.context.stroke();
    break;
      case 6:
      this.context.beginPath();
      this.context.moveTo(X + 70,Y - 50);
      this.context.lineTo(X + 70,Y - 600);
      this.context.stroke();
    break;
      case 5:
      this.context.beginPath();
      this.context.moveTo(X + 70,Y - 600);
      this.context.lineTo(X + 300,Y - 600);
      this.context.stroke();
    break;
      case 4:
      this.context.beginPath();
      this.context.moveTo(X + 300,Y - 600);
      this.context.lineTo(X + 300,Y - 540);
      this.context.stroke();
    break;
      case 3:
      this.context.beginPath();
      this.context.arc(X + 300,Y - 500, 40, 0, Math.PI * 2);
      this.context.stroke();
      this.context.closePath();
    break;
      case 2:
      this.context.beginPath();
      this.context.moveTo(X + 300,Y - 460);
      this.context.lineTo(X + 300,Y - 260);
      this.context.stroke();
    break;
      case 1:
      this.context.beginPath();
      this.context.moveTo(X + 300,Y - 260);
      this.context.lineTo(X + 260,Y - 220);
      this.context.stroke();
    break;
      case 0:
      this.context.beginPath();
      this.context.moveTo(X + 300, Y - 260);
      this.context.lineTo(X + 340, Y - 220);
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
