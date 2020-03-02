class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1400, 1200);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let x = 300;
    let y = 600;
    let x1 = 350;
    let y1 = 600;
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(x1, y);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();

    for (let i = 0; i < this.secretWord.length - 1; i++) {
      if (x < 1200) {
        x += 100;
        x1 += 100;
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x1, y1);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
      }
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let letter = this.secretWord[index];
    let offsite = index * 100;
    this.context.font = "40px Arial";
    this.context.fillText(letter, 300 + offsite, 600);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let x = 850;
    if (errorsLeft >= 0) {
      let off = (errorsLeft % 100) * 30;
      if (off >= 0 && x < 900) {
        this.context.font = "40px Arial";
        this.context.fillText(letter, x - off, 225);
      }
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        // draw triangle
        this.context.moveTo(200, 600);
        this.context.lineTo(100, 600);
        this.context.lineTo(150, 550);
        this.context.fill();
        break;
      case 8:
        // draw the line above triangle
        this.context.beginPath();
        this.context.moveTo(150, 550);
        this.context.lineTo(150, 150);
        this.context.stroke();

        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(150, 150);
        this.context.lineTo(500, 150);
        this.context.lineTo(500, 200);
        this.context.stroke();

        break;
      case 6:
        this.context.beginPath();
        this.context.arc(500, 225, 25, 0, Math.PI * 2, true);
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.moveTo(500, 250);
        this.context.lineTo(500, 350);
        this.context.stroke();

        break;
      case 4:
        // draw right legs
        this.context.beginPath();
        this.context.moveTo(500, 350);
        this.context.lineTo(550, 400);
        this.context.stroke();

        break;
      case 3:
        // draw left legs
        this.context.beginPath();
        this.context.moveTo(500, 350);
        this.context.lineTo(450, 400);
        this.context.stroke();
        break;
      case 2:
        // draw left hand
        this.context.beginPath();
        this.context.moveTo(500, 290);
        this.context.lineTo(450, 330);
        this.context.stroke();
        break;
      case 1:
        // draw right hand
        this.context.beginPath();
        this.context.moveTo(500, 290);
        this.context.lineTo(550, 330);
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        this.context.clearRect(0, 0, 1400, 1200);
        break;
    }
  }

  gameOver() {
    // ... your code goes here
    if (hangman.checkGameOver()) {
      this.context.clearRect(0, 0, 1400, 1200);
      this.context.beginPath();
      let img = new Image();
      img.src = "images/gameover.png";
      this.context.drawImage(img, 400, 150, 500, 500);
      this.context.stroke();
    }
  }

  winner() {
    // ... your code goes here
    if (hangman.checkWinner()) {
      this.context.clearRect(0, 0, 1400, 1200);
      this.context.beginPath();
      let img = new Image();
      img.src = "images/awesome.png";
      this.context.drawImage(img, 400, 150, 500, 500);
      this.context.stroke();
    }
  }
}
