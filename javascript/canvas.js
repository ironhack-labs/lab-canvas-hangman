let originXLines = 400;
let originYLines = 500;

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }



  //https://developer.mozilla.org/pt-BR/docs/Web/API/CanvasRenderingContext2D/clearRect

  createBoard() {
    this.context.clearRect(0, 0, 1000, 1000)
    this.drawLines()
    this.drawHangman(10)
  }

  drawLines() {

    let comp = 50;
    let initialOriginX = originXLines
    for (let i = 0; i < this.secretWord.length; i++) {

      this.context.fillRect(initialOriginX, originYLines + 50, comp, 1)
      initialOriginX += comp * 2

    }


  }

  writeCorrectLetter(index) {

    //200+100index 
    //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText
    this.context.font = 'bold 48px serif'
    this.context.fillText(this.secretWord[index], originXLines + (100 * index), originYLines)
  }

  writeWrongLetter(letter, errorsLeft) {

    let originX = 500
    let originY = 100

    this.context.font = 'bold 48px serif'
    this.context.fillText(letter, originX + (60 * errorsLeft), originY)

  }

  drawHangman(errorsLeft) {
    let ax = 100;
    let ay = 550;

    switch (errorsLeft) {
      case 10:
        this.context.beginPath();
        this.context.moveTo(ax, ay)
        this.context.lineTo(ax + 100, ay)
        this.context.lineTo(ax + 50, ay - 50)
        this.context.lineTo(ax, ay)
        this.context.stroke()
        this.context.closePath()
        break;

      case 9:
        this.context.beginPath();
        this.context.moveTo(ax + 50, ay - 50)
        this.context.lineTo(ax + 50, ay - 500)
        this.context.stroke()
        this.context.closePath()
        break;
      
      case 8:
        this.context.beginPath();
        this.context.moveTo(ax + 50, ay - 500)
        this.context.lineTo(ax + 300, ay - 500)
        this.context.stroke()
        this.context.closePath()
        break;

      case 7:
        this.context.beginPath();
        this.context.moveTo(ax + 300, ay - 500)
        this.context.lineTo(ax + 300, ay - 450)
        this.context.stroke()
        this.context.closePath()
        break;

      case 6:
        this.context.beginPath();
        this.context.arc(ax + 300, ay - 400, 50, 0, Math.PI * 2)
        this.context.stroke()
        this.context.closePath()
        break;

      case 5:
        this.context.beginPath()
        this.context.moveTo(ax + 300, ay - 350)
        this.context.lineTo(ax + 300, ay-250)
        this.context.stroke()
        this.context.closePath()
        break;
      
        case 4:
        this.context.beginPath()
        this.context.moveTo(ax + 300, ay - 350)
        this.context.lineTo(ax + 250, ay-300)
        this.context.stroke()
        this.context.closePath()
        break;

        case 3:
        this.context.beginPath()
        this.context.moveTo(ax + 300, ay - 350)
        this.context.lineTo(ax + 350, ay-300)
        this.context.stroke()
        this.context.closePath()
        break;

        case 2:
          this.context.beginPath()
          this.context.moveTo(ax + 300, ay - 250)
          this.context.lineTo(ax + 250, ay-200)
          this.context.stroke()
          this.context.closePath()
          break;

          case 1:
          this.context.beginPath()
          this.context.moveTo(ax + 300, ay - 250)
          this.context.lineTo(ax + 350, ay-200)
          this.context.stroke()
          this.context.closePath()

          case 0:
            this.context.beginPath()
            this.context.moveTo(ax + 300, ay - 250)
            this.context.lineTo(ax + 250, ay-200)
            this.context.stroke()
            this.context.closePath()

    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
