class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');

    // ... your code goes here
    // document.querySelector()
    //onClick = callback
    //addEventListener('click', callback )
    //setInterval(callback,milisecs)

    this.secretWord = secretWord;
  }
  // the method that should clear the canvas, so every time we start the game we have a clean one.
  //This method also should call the next one we will define, the drawLines().
  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0, this.context.width, this.context.height)
    this.drawLines()
  }
  // the method that should draw one line for each letter of the secret word.
  //At this point we know the secret word the user has to guess.
  drawLines() {
    // ... your code goes here
    // lineTo(1, 1);
    // this.context.fillStyle = 'purple';
    // this.context.fillRect(260, 260, 30, 30);
    let moveX = 200
    let y = 400
    for(let i = 0; i < this.secretWord.length ;i++){
      this.context.beginPath()
      this.context.moveTo(moveX,y)
      this.context.lineTo(moveX+40, y)
      this.context.closePath()
      this.context.stroke()
      moveX+=50
    }

  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
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

hangmanCanvas = new HangmanCanvas("hangmanSecretWord");

hangmanCanvas.createBoard()
debugger

