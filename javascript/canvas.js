class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0,0,1200, 800);
    this.drawLines();
  }

  drawLines() {
    let len = this.secretWord.length
    var largo = 60;
    let espacio = largo * len 
    var coordenada = 1200 - espacio - len*10

    for (let i=0; i<= len; i ++){
      this.context.beginPath();
      this.context.moveTo(coordenada, 150)
      this.context.lineTo(coordenada + largo, 150);
      this.context.stroke()
      coordenada += largo + 10;
      console.log(coordenada)
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.fillStyle = "salmon"
    this.context.font = "45px monospace"
    let letter = this.secretWord[index].toUpperCase();
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i].toUpperCase() === letter) {
        this.context.fillText(letter, 20 + 50 * i + 10 * 10, 750, 50)
      }
    }

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