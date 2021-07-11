class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.lineWidth = 5;
    this.context.font = '55px serif';
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.secretWord.split('').forEach((_, i) => {
      this.context.beginPath();
      this.context.moveTo(210 + i * 60, this.context.canvas.height - 250);
      this.context.lineTo(260 + i * 60, this.context.canvas.height - 250);
      this.context.stroke();
      this.context.closePath();
    });
  }

  writeCorrectLetter(index) {
    const indexes = []
    this.context.moveTo(210, this.context.canvas.height - 120);
    this.secretWord.split('').forEach((letter, i) => {
      if (this.secretWord[index] === letter) indexes.push(i);
    });
    indexes.forEach(index => {
      this.context.fillText(this.secretWord[index], 215 + (index * 60), this.context.canvas.height - 275);
    });
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.clearRect(0, 0, 1200, 400);
    const wrongLetters = letter.join(" ").toUpperCase();
    this.context.moveTo(700, this.context.canvas.height - 50);
    this.context.fillText(wrongLetters, 700, this.context.canvas.height - 600);
    this.context.fillText(`Attempts left: ${errorsLeft}`, 700, this.context.canvas.height - 700);
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    this.context.moveTo(200, this.context.canvas.height - 250);
    this.context.lineTo(100, this.context.canvas.height - 350)

    this.context.lineTo(0, this.context.canvas.height - 250)
    this.context.moveTo(100, this.context.canvas.height - 350);
    this.context.lineTo(100, this.context.canvas.height - 650)

    this.context.moveTo(200, this.context.canvas.height - 250);
    this.context.lineTo(0, this.context.canvas.height - 250)

    this.context.moveTo(100, this.context.canvas.height - 650);
    this.context.lineTo(350, this.context.canvas.height - 650)

    this.context.lineTo(350, this.context.canvas.height - 550)
    this.context.arc(350, this.context.canvas.height - 550, 20, 0, 2 * Math.PI, false);

    this.context.moveTo(350, this.context.canvas.height - 527);
    this.context.lineTo(350, this.context.canvas.height - 400);
    this.context.lineTo(300, this.context.canvas.height - 350);

    this.context.moveTo(350, this.context.canvas.height - 400);
    this.context.lineTo(400, this.context.canvas.height - 350);


    this.context.stroke();
    this.context.closePath();
  }

  gameOver() {
    this.drawHangman(this.errorsLeft)
    this.context.clearRect(450, 0, 1200, 400);
    const img = new Image();
    img.src = "./images/gameover.png";
    img.addEventListener('load', () => {
      this.context.drawImage(img, 400, 0, 500, 250)
    });
  }

  winner() {
    this.context.clearRect(0, 0, 1200, 400);
    const img = new Image();
    img.src = "./images/awesome.png";
    img.addEventListener('load', () => {
      this.context.drawImage(img, 350, 0, 500, 500)
    });
  }
}
