


class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.width, this.context.height);
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.moveTo(200, 550);
    this.context.lineTo(70, 600);
    this.context.lineTo(330, 600); // base do triangulo
    this.context.lineTo(200, 550);
    this.context.lineTo(200, 200);
    this.context.lineTo(400, 200);
    this.context.lineTo(400, 250);
    this.context.stroke();
    this.context.closePath()
    this.drawLines()
  }
  

  drawLines() {
    console.log(this.secretWord)
    for(let i = 0; i<this.secretWord.length; i++){
      const initialPosition = 375 + 70 * i;
      const finalPosition = 425 + 70 * i;
      this.context.beginPath();
      this.context.moveTo(initialPosition, 600);
      this.context.lineTo(finalPosition, 600);
      this.context.stroke();
      this.context.closePath()
    } 
  }

  

  writeCorrectLetter(index) {
    const initialPosition = 375 + 70 * index;
    const finalPosition = 425 + 70 * index;
    this.context.font = "30px Arial"
    this.context.fillText(hangman.secretWord[index].toUpperCase(), (finalPosition - initialPosition) / 2 + initialPosition - 10, 590);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "30px Arial"
    this.context.fillText(letter.toUpperCase(), 700 + errorsLeft*(-30), 200);
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft){
      case '5':
        this.context.beginPath();
        this.context.moveTo(200, 550);
        this.context.lineTo(70, 600);
        this.context.stroke();
        this.context.closePath()
        break;

      case '4':
        this.context.beginPath();
        this.context.moveTo(200, 550);
        this.context.lineTo(70, 600);
        this.context.stroke();
        this.context.closePath()
        break;

      case '3':
        this.context.beginPath();
        this.context.moveTo(200, 550);
        this.context.lineTo(70, 600);
        this.context.stroke();
        this.context.closePath()
        break;

      case '2': 
        this.context.beginPath();
        this.context.moveTo(200, 550);
        this.context.lineTo(70, 600);
        this.context.stroke();
        this.context.closePath()
        break;

      case '1': 
        this.context.beginPath();
        this.context.moveTo(200, 550);
        this.context.lineTo(70, 600);
        this.context.stroke();
        this.context.closePath()
        break;
      case '0': 
        this.context.beginPath();
        this.context.moveTo(200, 550);
        this.context.lineTo(70, 600);
        this.context.stroke();
        this.context.closePath()
        break;
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}


