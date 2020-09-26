class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines()
  }

  drawLines() {
    for (let i = 1; i < this.secretWord.length + 1; i++) {
      let x = (i * 1.2) * 50
      let y = 700
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(x + 50, 700);
      this.context.stroke();
    }
  }

  writeCorrectLetter(letter) {
    let arrWords = Array.from(this.secretWord.toUpperCase());
    let emptyArray = []

    for (let i = 0; i < arrWords.length; i++) {
      emptyArray.push(" ")
    }

    let wordPosition = 0;
    for (let i = 0; i < arrWords.length; i++) {
      if (letter === arrWords[i]) {
        emptyArray[wordPosition] = letter;
      }
      wordPosition += 1;
    }


    for (let i = 0; i < emptyArray.length; i++) {
      let x = (i * 1.2) * 50
      this.context.font = '48px serif';
      this.context.fillText(emptyArray[i], x + 74, 685);
    }
    console.log(emptyArray);

  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '48px serif';
    this.context.fillText(letter, 700 + 35 * (10 - errorsLeft), 650, 500);
  }

  drawHangman(errorsLeft) {
    let posX = 500;
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


