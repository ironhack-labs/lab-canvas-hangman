class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);


  }

  drawLines() {
    this.context.beginPath();
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.context.moveTo(200 + i * 30, 380); //100 130
      this.context.lineTo(220 + i * 30, 380); //120  150  
    }
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {

    this.context.font = '20px arial';
    this.context.lineWidth = 5;
    this.context.fillStyle = 'blue';

    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.secretWord[i] == index) {
        this.context.fillText(index, 200 + i * 30, 370);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {

    console.log('estou aqui!!!!');
    console.log(hangman.letters);
    this.context.font = '20px arial';
    this.context.lineWidth = 5;
    this.context.fillStyle = 'blue';
    this.context.fillText(letter, 500 - errorsLeft * 30, 50);
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    console.log('estou aqui agora')
    console.log(errorsLeft);

    this.context.beginPath();
    this.context.moveTo(50, 380);
    if (errorsLeft == 9) {
      this.context.lineTo(150, 380);
      this.context.stroke();
    }
    this.context.moveTo(150, 380);
    if (errorsLeft == 8) {
      this.context.lineTo(100, 300);
      this.context.stroke();
    }
    this.context.moveTo(100, 300);
    if (errorsLeft == 7) {
      this.context.lineTo(50, 380);
      this.context.stroke();
    }
    this.context.moveTo(100, 300);
    if (errorsLeft == 6) {
      this.context.lineTo(100, 100);
      this.context.stroke();
    }
    this.context.moveTo(100, 100);
    if (errorsLeft == 5) {
      this.context.lineTo(250, 100);
      this.context.stroke();
    }
    this.context.moveTo(250, 100);
    if (errorsLeft == 4) {
      this.context.lineTo(250, 120);
      this.context.stroke();
    }
    this.context.moveTo(250, 120);

    if (errorsLeft == 3) {
      this.context.arc(250, 140, 20, 0, Math.PI * 2);
      this.context.stroke();
    }
    this.context.moveTo(250, 155);
    if (errorsLeft == 2) {
      this.context.lineTo(250, 260);
      this.context.stroke();
    }
    this.context.moveTo(250, 260);
    if (errorsLeft == 1) {
      this.context.lineTo(230, 300);
      this.context.stroke();
    }
    this.context.moveTo(250, 260);
    if (errorsLeft == 0) {
      this.context.lineTo(270, 300);
      this.context.stroke();
    }
  }

  drawImage() {
    this.context.clearRect(0, 0, 800, 1200);
    const img = new Image();
    img.src = './images/awesome.png'
    this.context.drawImage(img, 100, 0, 300, 400);

  }
  gameOver() {

    let gameOver = document.getElementById('game');

    gameOver.innerHTML = 'Game Over';

    this.createBoard();

  }

  winner() {

    let winner = document.getElementById('game');

    winner.innerHTML = 'Winner';
    this.drawImage();
  }
}
