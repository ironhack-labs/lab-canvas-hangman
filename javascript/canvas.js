class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }
  
  createBoard() {
    this.context.beginPath()
    this.context.clearRect(0, 0, 1200, 1200);
    this.drawLines();
  }
  
  drawLines() {
    this.context.lineWidth = 2;
    this.context.strokeStyle = 'black';
    this.context.font = "50px Arial";

    let initX = 350
    let Y = 650

    for (let i=0;i<this.secretWord.length;i++) {
        this.context.moveTo(initX,Y)
        this.context.lineTo(initX+50,Y)
        this.context.moveTo(initX+75,Y)
        initX += 75;
    }

    this.context.stroke()
  }

  writeCorrectLetter(index) {
    let firstCorrectLetterX = 362
    let correctLetterY = 625
    for (let i=0;i<index.length;i++) {
        this.context.fillText(this.secretWord.charAt(index[i]),firstCorrectLetterX+75*index[i],correctLetterY);
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    let wrongLetterX = 600;
    let wrongY = 200;
    let position = 10 - errorsLeft
    this.context.fillText(letter,wrongLetterX +50*position,wrongY);
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft) {
      case 9:
        this.context.beginPath()
        this.context.moveTo(200,600)
        this.context.lineTo(250,650)
        this.context.stroke()
          break;
      case 8:
        this.context.lineTo(150,650)
        this.context.stroke()
          break;
      case 7:
        this.context.closePath()
        this.context.stroke()
          break;
      case 6:
        this.context.lineTo(200,100)
        this.context.stroke()
          break;
      case 5:
        this.context.lineTo(450,100)
        this.context.stroke()
          break;
      case 4:
        this.context.lineTo(450,150)
        this.context.stroke()
          break;
      case 3:
        this.context.moveTo(450,200)
        this.context.stroke()
        this.context.beginPath()
        this.context.arc(450,200,50,0,2 * Math.PI)
        this.context.stroke()
          break;
      case 2:
        this.context.moveTo(450,250)
        this.context.lineTo(450,450)
        this.context.stroke()
          break;
      case 1:
        this.context.lineTo(400,550)
        this.context.stroke()
          break;
      case 0:
        this.context.moveTo(450,450)
        this.context.lineTo(500,550)
        this.context.closePath()
        this.context.stroke()
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