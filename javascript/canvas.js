

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800)
    this.drawLines()
  }

  drawLines() {

    let positionX = 350
    let positionY = 400

    for(let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath()
      this.context.moveTo(positionX, positionY)
      positionX += 20
      this.context.lineTo(positionX, positionY)
      this.context.stroke()
      positionX += 10
      this.context.moveTo(positionX, positionY)
    }
  }
 
  writeCorrectLetter(index) {
    // console.log('i have been called')
    console.log(index)
    
    const initialPositionXLetter = 351
    const initialPositionYLetter = 398

    for(let i = 0; i < index.length; i++) {
      const positionXLetter = initialPositionXLetter + 30 * index[i]
      this.context.font ='30px monospace'
      this.context.fillText(this.secretWord[index[i]], positionXLetter, initialPositionYLetter)
    }

  }


  writeWrongLetter(letter, errorsLeft) {
    // console.log(' I have been called')
    const initialPositionX = 700
    const initialPositionY = 25

    const lettersAsString = letter.join('') 

    this.context.font ='30px monospace'
    this.context.fillText(lettersAsString, initialPositionX, initialPositionY)
  }

  drawHangman(errorsLeft) {
    // console.log('yes, I was called')
    const initialPositionX = 200
    const initialPositionY = 400

    const errors = errorsLeft

    switch(errors) {
      case 9:
        this.context.beginPath()
        this.context.moveTo(200, 400)
        this.context.lineTo(300, 400)
        this.context.stroke()
        this.context.lineTo(250, 350)
        this.context.stroke()
        this.context.lineTo(200, 400)
        this.context.stroke()
        break;
      case 8:
        this.context.beginPath()
        this.context.moveTo(250, 350)
        this.context.lineTo(250, 25)
        this.context.stroke()
        break;
      case 7:
        this.context.beginPath()
        this.context.moveTo(250, 25)
        this.context.lineTo(400, 25)
        this.context.stroke()
        break;
      case 6:
        this.context.beginPath()
        this.context.moveTo(400, 25)
        this.context.lineTo(400, 70)         
        this.context.stroke()
        break;
      case 5:
        this.context.beginPath()
        this.context.arc(400, 100, 30, 0, Math.PI * 2);
        this.context.stroke()
        break;
      case 4:
        this.context.beginPath()
        this.context.moveTo(400, 130)
        this.context.lineTo(400, 250)         
        this.context.stroke()
        break;
      case 3:
        this.context.beginPath()
        this.context.moveTo(400, 250)
        this.context.lineTo(360, 320)         
        this.context.stroke()
        break;
      case 2:
        this.context.beginPath()
        this.context.moveTo(400, 250)
        this.context.lineTo(440, 320)         
        this.context.stroke()
        break;
      case 1:
        this.context.beginPath()
        this.context.moveTo(400, 170)
        this.context.lineTo(320, 100)         
        this.context.stroke()
        break;
      case 0:
        this.context.beginPath()
        this.context.moveTo(400, 170)
        this.context.lineTo(480, 100)         
        this.context.stroke()
      
        break;
    }
  }

  

  gameOver() {
      // console.log('yes, I am being called')
      let gameOverImg = new Image()  
      
      // this.gameOverImg.src = './images/gameover.png' 
      gameOverImg.onload = function (){
        console.log('test')
        this.context = document.getElementById('hangman').getContext('2d') 
        this.context.drawImage(gameOverImg, 300, 75)
      }
      gameOverImg.src = './images/gameover.png' 
      
      
      // }
      
  }

  winner() {
    // ... your code goes here
  }
}
