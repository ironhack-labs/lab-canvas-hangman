class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.content.clearRect
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
      this.context.stroke();
      this.context.closePath();
    }
  }


  writeCorrectLetter(index) {
    let positionCorrectLetter = lineNumber[]
    //idea: -> if letter new...
    if (checkClickedLetters(index) == true) {
      //-> ...then check at which position in SecretWord the letter is situated (equals the specified i from drawLines())
      positionCorrectLetter = this.context.secretWord.indexOf(index)
      //-> ...and entsprechend der Position ueber die linie schreiben.
      this.context.fillText(index, 400 + (positionCorrectLetter * 50), 400), 400)
    }
    else {
      addWrongLetter(index)
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    if (checkClickedLetters(letter) == false) {

      // ... your code goes here
    }

    drawHangman(errorsLeft) {
      // ... your code goes here
    }

    gameOver() {
      // ... your code goes here
    }

    winner() {
      // ... your code goes here
    }
  }
