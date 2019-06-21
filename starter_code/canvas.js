class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.xWrongCordinate = 800;
    this.xCorrectWordLength = 250;
  }
  createBoard() {
    // creates clean board
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let x = this.xCorrectWordLength;

    // creates the lines
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 800); // initial position
      this.ctx.lineTo(x + 50, 800); // draws the line
      this.ctx.moveTo(x + 25, 800); // add space between drawn line and next line
      this.ctx.lineWidth = 3; // width of line
      this.ctx.stroke();
      this.ctx.closePath();
      x += 75;

    }

  }
  writeCorrectLetter(value) {
    let secretWordArray = [...this.secretWord];
    let correctIndexArray = [];
    let i = -1;
    while ((i = secretWordArray.indexOf(value, i + 1)) != -1) {
      correctIndexArray.push(i);
    }
    // let correctLetterIndex = this.secretWord.indexOf(value);
    let y = 790;
    this.ctx.font = "36px serif";
    for (let i = 0; i < correctIndexArray.length; i++) {
      this.ctx.fillText(value.toUpperCase(), this.xCorrectWordLength + 15 + (75 * correctIndexArray[i]), y)

    }


  }
  writeWrongLetter(letter) {
    this.ctx.font = "36px serif";
    this.xWrongCordinate += 40;
    this.ctx.fillText(letter.toUpperCase(), this.xWrongCordinate, 200);

  }
  paintNextElement(value) {
    switch (value) {
      // first triangle
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(0, 800); // initial position
        this.ctx.lineTo(100, 750); // draws the line
        this.ctx.lineTo(200, 800);
        this.ctx.lineTo(0, 800);  // add space between drawn line and next line
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      // second big line upwards
      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(100, 750);
        this.ctx.lineTo(100, 100);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      // third horizontal line
      case 7:
        this.ctx.beginPath();
        this.ctx.moveTo(100, 100);
        this.ctx.lineTo(500, 100);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      // fourth tiny vertical line
      case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 100);
        this.ctx.lineTo(500, 200);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      // fifth circle head
      case 5:
        this.ctx.beginPath();
        this.ctx.arc(500, 250, 50, 0, Math.PI * 2);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      //sixth: the body going down
      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(500, 500);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      // seventh: the left leg
      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 500);
        this.ctx.lineTo(400, 600);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      // eighth: the right leg
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 500);
        this.ctx.lineTo(600, 600);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      // ninth: left arm
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 350);
        this.ctx.lineTo(400, 450);
        this.ctx.lineWidth = 3; // width of line
        this.ctx.stroke();
        this.ctx.closePath();
        break;
    }
  }
}

let hangman = new Hangman;
let ourGame = new HangmanCanvas(hangman.secretWord);

document.querySelector('#start-game-button').addEventListener("click", function () {
  document.querySelector('body :first-child').remove();
  document.querySelector('body :first-child').remove();
  ourGame.createBoard();

  setTimeout(function () {
    document.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (hangman.checkIfLetter(e.key) && !hangman.checkClickedLetters(e.key)) {
        hangman.letters.push(e.key);
        if (hangman.isCorrectLetter(e.key)) {
          ourGame.writeCorrectLetter(e.key);
          if (hangman.checkWinner()) {
            setTimeout(() => {
              let body = document.getElementsByTagName('body')[0];
              let image = document.createElement('img');
              image.setAttribute('style', 'position:absolute; top:100px; left:100px;');
              image.src = "images/awesome.png";
              body.appendChild(image);
              let restartButton = document.createElement('button');
              restartButton.setAttribute('style', 'position:absolute; bottom: -20px; left: 400px;')
              restartButton.setAttribute('id', 'restart-button');
              restartButton.innerHTML = "Restart Game"
              restartButton.onclick = function () {
                location.reload();
              }
              body.appendChild(restartButton);
            }, 500)
          }
        } else {
          ourGame.writeWrongLetter(e.key)
          ourGame.paintNextElement(hangman.errorsLeft);
          if(hangman.checkGameOver()) {
            let body = document.getElementsByTagName('body')[0];
            let image = document.createElement('img');
            image.setAttribute('style', 'position:absolute; top:150px; left:150px; width: 75%; ');
            image.src = "images/gameover.png";
            body.appendChild(image);
            let restartButton = document.createElement('button');
            restartButton.setAttribute('style', 'position:absolute; bottom: 50px; left: 400px;')
            restartButton.setAttribute('id', 'restart-button');
            restartButton.innerHTML = "Restart Game"
            restartButton.onclick = function () {
              location.reload();
            }
            body.appendChild(restartButton);
          }
        }
      } // checks if key is valid not already pushed, then pushes key into "letters"
    }) // ending of keydown listener
  }, 500)
})