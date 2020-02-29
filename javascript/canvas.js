class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200)
    this.drawLines()
    // ... your code goes here
  }

  drawLines() {
    let x = 200
    let y = 500
    this.context.strokeStyle = 'black'
    for (let i = 0; i < this.secretWord.length; i++) {
      let xn = x + 30
      this.context.strokeStyle = 'black'
      this.context.beginPath()
      this.context.moveTo(x, y);
      this.context.lineTo(xn, y);
      this.context.stroke();
      x += 50
      console.log(x)
      console.log(xn)
    }
  }

  writeCorrectLetter(index) {

    let letter = this.secretWord[index]
    this.context.font = "30px Arial";
    let offset = index * 30
    console.log(letter)


    // ctx.fillText("string", x, y); => x, y are coordinates where the text
    // is going to appear
    this.context.fillText(letter, 100 + offset, 500);
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