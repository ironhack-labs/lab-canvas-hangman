class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.spaceBetween = 60;
  }

  createBoard() {
    const canvas = document.getElementById('hangman');
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines();
  }

  drawStraightLine (initialX, initialY, nextX, nextY) {
    this.context.beginPath();
    this.context.moveTo(initialX, initialY);
    this.context.lineTo(nextX, nextY);
    this.context.stroke();
    this.context.closePath();
  }

  drawHead (initialX, initialY, radius){
    this.context.beginPath();
    this.context.arc(initialX, initialY, radius, 0, Math.PI * 2, true);
    this.context.stroke();
  }

  drawLines() {
    const arrayOfLetters = this.secretWord.split('');
    for (let i = 0; i < arrayOfLetters.length; i++){
      const paddingLeft = 300;
      const linelength = 50;
      const axisX = paddingLeft + i * this.spaceBetween;
      const axisY = 700;
      const nextAxisX = paddingLeft + linelength + i * this.spaceBetween;
      const nextAxisY = 700;
      this.drawStraightLine(axisX, axisY, nextAxisX, nextAxisY);
    }
  }

  writeCorrectLetter(index) {
    this.context.fillStyle = '#1c1919'; 
    this.context.font = '44px Helvetica';
    const upperCaseLetter = this.secretWord[index].toUpperCase();
    const paddingLeft = 310;
    const axisY = 690;
    this.context.fillText(upperCaseLetter, paddingLeft + index * this.spaceBetween, axisY);
  }

  writeWrongLetter(letter, errorsLeft) {
    if (errorsLeft >= 0) {
      this.context.fillStyle = 'red';
      this.context.font = '44px Helvetica';
      const index = 10 - errorsLeft;
      this.context.fillText(letter.toUpperCase(), 500 + (index * 50), 200);
    }
  }

  drawHangman(errorsLeft) {
    this.context.strokeStyle = '#1c1919'; 
    switch (errorsLeft){
      case 9: 
        this.drawStraightLine(100, 700, 150, 650);
        break;
      case 8:
        this.drawStraightLine(150, 650, 200, 700);
        break;
      case 7:
        this.drawStraightLine(200, 700, 100, 700);
        break;
      case 6:
        this.drawStraightLine(150, 650, 150, 130);
        break;
      case 5:
        this.drawStraightLine(150, 130, 300, 130)
        break;
      case 4:
        this.drawStraightLine(300, 130, 300, 230)
        break;
      case 3:
        this.drawHead(300, 280, 50)
        break;
      case 2:
        this.drawStraightLine(300, 330, 300, 430)
        break;
      case 1:
        this.drawStraightLine(300, 430, 350, 480)
        break;
      case 0:
        this.drawStraightLine(300, 430, 250, 480)        
    }
  }

  gameOver() {

  }

  winner() {
  }
}
