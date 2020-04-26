class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.letterPositions = [];
    this.letters = [...this.secretWord];
    this.errorWidth = this.width;
    this.hangmanBody = {
      ten: function () {
        hangmanCanvas.ctx.moveTo(30, hangmanCanvas.height - 200);
        hangmanCanvas.ctx.lineTo(100, hangmanCanvas.height - 300);
        hangmanCanvas.ctx.lineTo(170, hangmanCanvas.height - 200);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      nine: function () {
        hangmanCanvas.ctx.moveTo(100, hangmanCanvas.height - 300);
        hangmanCanvas.ctx.lineTo(100, hangmanCanvas.height - 700);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      eight: function () {
        hangmanCanvas.ctx.moveTo(100, hangmanCanvas.height - 700);
        hangmanCanvas.ctx.lineTo(400, hangmanCanvas.height - 700);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      seven: function () {
        hangmanCanvas.ctx.moveTo(400, hangmanCanvas.height - 700);
        hangmanCanvas.ctx.lineTo(400, hangmanCanvas.height - 650);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      six: function () {
        hangmanCanvas.ctx.beginPath();
        hangmanCanvas.ctx.arc(400, hangmanCanvas.height - 600, 50, 0, 2 * Math.PI);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      five: function () {
        hangmanCanvas.ctx.moveTo(400, hangmanCanvas.height - 550);
        hangmanCanvas.ctx.lineTo(400, hangmanCanvas.height - 350);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      four: function () {
        hangmanCanvas.ctx.moveTo(400, hangmanCanvas.height - 550);
        hangmanCanvas.ctx.lineTo(350, hangmanCanvas.height - 500);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      three: function () {
        hangmanCanvas.ctx.moveTo(400, hangmanCanvas.height - 550);
        hangmanCanvas.ctx.lineTo(450, hangmanCanvas.height - 500);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      two: function () {
        hangmanCanvas.ctx.moveTo(400, hangmanCanvas.height - 350);
        hangmanCanvas.ctx.lineTo(350, hangmanCanvas.height - 300);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      },
      one: function () {
        hangmanCanvas.ctx.moveTo(400, hangmanCanvas.height - 350);
        hangmanCanvas.ctx.lineTo(450, hangmanCanvas.height - 300);
        hangmanCanvas.ctx.closePath();
        hangmanCanvas.ctx.stroke();
      }
    }
  }


  createBoard() {
    //We clean the board with clearRect and call drawLines for a new game.
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawLines();
  }
  drawLines() {
    //We declarate the margin and line for each letter
    let margin = 250;
    let letterSpace = 70;
    //Iterate for each letter of secretWord destructuring with spread operator.
    //And we use .forEach for create a line for everyone
    this.letters.forEach(e => {
      this.ctx.beginPath()
      this.ctx.moveTo(margin, (this.height - 200))
      this.ctx.lineTo((letterSpace + margin), (this.height - 200));
      this.ctx.stroke();
      this.letterPositions.push(margin)
      margin += 100
    })
  }
  writeCorrectLetter(index) {
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] === index) {
        let position = this.letterPositions[i] + 75 / 2.5;
        this.ctx.font = '30px Arial';
        this.ctx.fillText(index, position, this.height - 220);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = '30px Arial';
    this.ctx.fillText(letter, this.errorWidth - 100, 220)
    this.errorWidth -= 50
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.hangmanBody.ten();
        break;
      case 8:
        this.hangmanBody.nine();
        break;
      case 7:
        this.hangmanBody.eight();
        break;
      case 6:
        this.hangmanBody.seven();
        break;
      case 5:
        this.hangmanBody.six();
        break;
      case 4:
        this.hangmanBody.five();
        break;
      case 3:
        this.hangmanBody.four();
        break;
      case 2:
        this.hangmanBody.three();
        break;
      case 1:
        this.hangmanBody.two();
        break;
      case 0:
        this.hangmanBody.one();
        this.gameOver();
        break;
    }
  }

  gameOver() {
    setTimeout(function () { hangmanCanvas.canvas.style.display = 'none' }, 2000);
    let gameOverText = document.createElement('h1');
    let text = document.createTextNode('GAME OVER, LOOSER');
    gameOverText.appendChild(text)
    gameOverText.style.textAlign = "center"
    document.body.appendChild(gameOverText);
  }

  winner() {
    setTimeout(function () { hangmanCanvas.canvas.style.display = 'none' }, 2000);
    let winnerText = document.createElement('h1');
    let text = document.createTextNode('CONGRATULATIONS!!!');
    winnerText.appendChild(text)
    winnerText.style.textAlign = "center"
    document.body.appendChild(winnerText);
  }
}
