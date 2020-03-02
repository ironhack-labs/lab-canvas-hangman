class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    //this.context.fillRect(0, 0, 50, 50);
  }

  drawLines() {
    // ... your code goes here       
    let x = 300;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath()
      this.context.moveTo(x, 550);
      this.context.lineTo(x + 50, 550);
      x += 80
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let letter = this.secretWord[index]
    this.context.font = '40pt Tahoma'
    let offset = index * 80
    this.context.fillText(letter, 310 + offset, 550)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '25pt Tahoma'
    let offset = errorsLeft * 40
    this.context.fillText(letter, 600 + offset, 35)
    this.drawHangman()
  }

  drawHangman(errorsLeft) {
    // ... your code goes here      
    if (errorsLeft < 10) {
      // draw stand    
      this.context.beginPath()
      this.context.moveTo(200, 500);
      this.context.lineTo(250, 550);
      this.context.stroke();
    } else if (errorsLeft < 9) {
      this.context.lineTo(150, 550);
      this.context.stroke();
    } else if (errorsLeft < 8) {
      this.context.lineTo(200, 500);
      this.context.stroke();
    } else if (errorsLeft < 7) {
      this.context.lineTo(200, 50);
      this.context.stroke();
    } else if (errorsLeft < 6) {
      this.context.lineTo(550, 50);
      this.context.stroke();
    } else if (errorsLeft < 5) {
      this.context.lineTo(550, 80);
      this.context.stroke();
    } else if (errorsLeft < 4) {
      //draw head
      let x = 550;
      let y = 110;
      let radius = 30;
      let startAngle = 0;
      let endAngle = Math.PI * 2;
      this.context.arc(x, y, radius, startAngle, endAngle);
      this.context.stroke()
    } else if (errorsLeft < 3) {
      //draw body
      this.context.moveTo(550, 140);
      this.context.lineTo(550, 300);
      this.context.stroke();
    } else if (errorsLeft < 2) {
      this.context.moveTo(550, 300);
      this.context.lineTo(500, 450);
      this.context.stroke();
    } else if (errorsLeft < 1) {
      this.context.moveTo(550, 300);
      this.context.lineTo(600, 450);
      this.context.stroke()
    } else if (hangman.checkGameOver() === true) {
      return this.gameOver()
    }
  }

  gameOver() {
    // ... your code goes here
    let img = document.createElement('img');
    img.src = "images/gameover.png";
    document.body.appendChild(img);
  }

  winner() {
    // ... your code goes here
    let img = document.createElement('img');
    img.src = "images/awesome.png";
    document.body.appendChild(img);
  }
}