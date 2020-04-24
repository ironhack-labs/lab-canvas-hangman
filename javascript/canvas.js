//HangmanCanvas class
class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.imageGameOver = new Image();
    this.imageGameOver.src = '/images/gameover.png';
    this.imageWinner = new Image();
    this.imageWinner.src = '/images/awesome.png';
    this.wrongLetterX = 1050;
    this.wrongLetterY = 70;
  }
  //The HangmanCanvas methods
  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    const changetHeight = 740;
    const changeWidth = 80;
    this.context.lineWidth = 3;
    this.context.strokeStyle = 'black';

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(changeWidth, changetHeight);
      this.context.lineTo(changeWidth + 50, changetHeight);
      this.context.stroke();
      changeWidth += 100;
    }
  }

  writeCorrectLetter(index) {
    const changetHeight = 730;
    const changeWidth = 80;
    this.context.fontStyle = 'black';
    this.context.font = '48px Impact';
    this.context.fillText(hangman.secretWord[index].toUpperCase(), (changeWidth + (index * 100) + 10), changetHeight, 100);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.fontStyle = 'black';
    this.context.font = '48px Impact';
    this.context.fillText(letter.toUpperCase(), this.wrongLetterX, this.wrongLetterY);
    this.drawHangman(errorsLeft);
    this.wrongLetterY += 70;
  }

  drawHangman(errorsLeft) {
    this.context.lineWidth = 4;
    this.context.strokeStyle = 'black';

    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(80, 650);
        this.context.lineTo(170, 650);
        this.context.lineTo(125, 610);
        this.context.closePath();
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(125, 610);
        this.context.lineTo(125, 110);
        this.context.closePath();
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(125, 110);
        this.context.lineTo(500, 110);
        this.context.closePath();
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(500, 110);
        this.context.lineTo(500, 210);
        this.context.closePath();
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();
        this.context.arc(500, 250, 40, 0, Math.PI * 2);
        this.context.closePath();
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(500, 290);
        this.context.lineTo(500, 450);
        this.context.closePath();
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(500, 450);
        this.context.lineTo(450, 500);
        this.context.closePath();
        this.context.stroke();
        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(500, 450);
        this.context.lineTo(550, 500);
        this.context.closePath();
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(500, 300);
        this.context.lineTo(450, 350);
        this.context.closePath();
        this.context.stroke();
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(500, 300);
        this.context.lineTo(550, 350);
        this.context.closePath();
        this.context.stroke();
        break;
    }
  }

  // Bonus
  gameOver() {
    this.context.drawImage(this.imageGameOver, 315, 280, 570, 240);
  }

  winner() {
    this.context.drawImage(this.imageWinnwe, 164, 91, 872, 618);
  }
}

