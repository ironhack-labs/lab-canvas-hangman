class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800); // will clear the whole canvas board
    this.drawLines();
  }

  drawLines() {
    for (let l = 0; l < this.secretWord.length; l++) {
      this.context.beginPath();
      this.context.moveTo(500 + 70 * l, 700);
      this.context.lineTo(550 + 70 * l, 700);
      this.context.stroke();   
    }
  }

  writeCorrectLetter(index) {
    this.context.font = '48px serif';
    this.context.fillText(this.secretWord[index], 515 + 70 * index, 690, 40);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '48px serif';
    this.context.fillText(letter, 700 + 35 * (10 - errorsLeft), 250, 40);
  }

  drawHangman(errorsLeft) {
    let posX = 300;
    let posY = 700;

    if (errorsLeft === 9) {
      this.context.beginPath();
      this.context.moveTo(posX, posY);
      this.context.lineTo(posX + 140, posY);
      this.context.stroke(); 
    }
    else if (errorsLeft === 8) {
      this.context.beginPath();
      this.context.moveTo(posX, posY);
      this.context.lineTo(posX + 70, posY - 50);
      this.context.stroke(); 
    }
    else if (errorsLeft === 7) {
      this.context.beginPath();
      this.context.moveTo(posX + 140, posY);
      this.context.lineTo(posX + 70, posY - 50);
      this.context.stroke();
    }
    else if (errorsLeft === 6) {
      this.context.beginPath();
      this.context.moveTo(posX + 70, posY - 50);
      this.context.lineTo(posX + 70, posY - 600);
      this.context.stroke();
    }
    else if (errorsLeft === 5) {
      this.context.beginPath();
      this.context.moveTo(posX + 70, posY - 600);
      this.context.lineTo(posX + 300, posY - 600);
      this.context.stroke();
    }
    else if (errorsLeft === 4) {
      this.context.beginPath();
      this.context.moveTo(posX + 300, posY - 600);
      this.context.lineTo(posX + 300, posY - 540);
      this.context.stroke();
    }
    else if (errorsLeft === 3) {
      this.context.beginPath();
      this.context.arc(posX + 300, posY - 500, 40, 0, Math.PI * 2);
      this.context.stroke();
      this.context.closePath();
    }
    else if (errorsLeft === 2) {
      this.context.beginPath();
      this.context.moveTo(posX + 300, posY - 460);
      this.context.lineTo(posX + 300, posY - 260);
      this.context.stroke();
    }
    else if (errorsLeft === 1) {
      this.context.beginPath();
      this.context.moveTo(posX + 300, posY - 260);
      this.context.lineTo(posX + 260, posY - 220);
      this.context.stroke();
    }
    else if (errorsLeft === 0) {
      this.context.beginPath();
      this.context.moveTo(posX + 300, posY - 260);
      this.context.lineTo(posX + 340, posY - 220);
      this.context.stroke();
    }
  }	

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
