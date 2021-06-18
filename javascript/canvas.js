class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect
    this.drawLines()
  }

  //version 1
  //like this its difficult to refer to the letters position later...
  //doesnt make sense as i isnt used in the path
  // drawLines() {
  // let startPosition = {x: 500, y: 700};
  // let lineNumber = []
  // this.context.beginPath();
  // for(let i= 0; i<this.context.secretWord.length, i++){
  //   this.context.moveTo(startPosition.x, startPosition.y);
  //   this.context.lineTo(startPosition.x+20, startPosition.y);
  //   this.context.stroke();
  //   startPosition.x += 40;
  //   lineNumber.push(i);
  // }
  // this.context.closePath();
  // }


  //version2: through the looping the new position and lineTo will be increased
  drawLines() {
    // let lineNumber = []
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(400 + (i * 50), 400);
      this.context.lineTo(420 + (i * 50), 400);
      // lineNumber.push(i);
      this.context.closePath();
      this.context.stroke();
    }
  }


  writeCorrectLetter(index) {
    let positionCorrectLetter = []
    //idea: -> if letter new...
    if (hangman.checkClickedLetters(index) == true) {
      //-> ...then check at which position in SecretWord the letter is situated (equals the specified i from drawLines())
      positionCorrectLetter = this.context.secretWord.indexOf(index)
      //-> ...and write the letter above the corrsponding line
      this.context.fillText(index, 400 + (positionCorrectLetter * 50), 400, 400)
    }
    else {
      hangman.addWrongLetter(index)
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    if (hangman.checkClickedLetters(letter) == false &&
      hangman.checkGameOver(errorsLeft) == false) {

      // ... your code goes here
    }

    drawHangman(errorsLeft) {
      if (hangman.checkGameOver() == false) {
        this.context.beginPath;
        this.context.moveTo()
        this.context.lineTo()
        this.context.closePath()
        this.context.stroke()
      }
      // ... your code goes here

    }


    gameOver() {
      if (hangman.checkGameOver() == true) {
        let gameOverImg = new Image()
        gameOverImg.src = "./images/gameover.png"
        console.log(gameOverImg)
        gameOverImg.onload = () => {
          context.drawImage(gameOverImg, 0, 0, 500, 700)
        }
      }

      winner() {
        if (hangman.checkWinner() == true) {
          let winnerImg = new Image()
          winnerImg.src = "./images/awesome.png"
          console.log(winnerImg)
          winnerImg.onload = () => {
            context.drawImage(winnerImg, 0, 0, 500, 700)
          }
        }
      }