class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200)
    this.drawLines()
  }

  drawLines() {
    let x = 300
    let y = 700
    for (let i = 0; i < hangman.secretWord.length; i++) {
      this.context.strokeStyle = 'red'
      this.context.beginPath()
      this.context.moveTo(x, y)
      this.context.lineTo(x += 50, y)
      this.context.stroke()
      this.context.strokeStyle = 'white'
      this.context.lineTo(x += 15, y)
      this.context.closePath()
    }
  }

  writeCorrectLetter(index) {
    let startingPoint = (hangman.secretWord.indexOf(index) * 65) + 320

    // writing the correct letter down
    this.context.fillStyle = "green";
    this.context.font = "30px Roboto";
    this.context.fillText(index, startingPoint, 700);
  }

  writeWrongLetter(letter, errorsLeft) {
    //writing the letter down - oops upside down
    let yText = (errorsLeft * 50) + 100
    this.context.fillStyle = "orange";
    this.context.font = "30px Roboto";
    this.context.fillText(letter, 1000, yText);
  }

  drawHangman(errorsLeft) {

    if (errorsLeft == 9) {
      //console.log('Pias test')
      this.context.strokeStyle = 'black'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(50, 700)
      this.context.lineTo(150, 550)
      this.context.stroke()
      this.context.closePath()
    }
    if (errorsLeft == 8) {
      this.context.strokeStyle = 'darkgrey'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(50, 700)
      this.context.lineTo(250, 700)
      this.context.stroke()
      this.context.closePath()
    }
    if (errorsLeft == 7) {
      this.context.strokeStyle = 'grey'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(250, 700)
      this.context.lineTo(150, 550)
      this.context.stroke()
      this.context.closePath()
    }
    if (errorsLeft == 6) {
      this.context.strokeStyle = 'lightgrey'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(150, 550)
      this.context.lineTo(150, 150)
      this.context.stroke()
      this.context.closePath()
    }
    if (errorsLeft == 5) {
      this.context.strokeStyle = 'rose'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(150, 150)
      this.context.lineTo(550, 150)
      this.context.stroke()
      this.context.closePath()
    }
    if (errorsLeft == 4) {
      this.context.strokeStyle = 'orange'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(550, 150)
      this.context.lineTo(550, 250)
      this.context.stroke()
      this.context.closePath()
    }
    // head
    if (errorsLeft == 3) {
      this.context.fillStyle = 'purple'
      this.context.beginPath()
      this.context.moveTo(550, 250)
      this.context.arc(550, 300, 50, 0, Math.PI * 2);
      this.context.fill();
      this.context.closePath()
    }
    if (errorsLeft == 2) {
      this.context.strokeStyle = 'red'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(550, 350)
      this.context.lineTo(550, 550)
      this.context.stroke()
      this.context.closePath()
    }
    if (errorsLeft == 1) {
      this.context.strokeStyle = 'darkred'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.moveTo(550, 550)
      this.context.lineTo(450, 650)
      this.context.moveTo(550, 550)
      this.context.lineTo(650, 650)
      this.context.stroke()
      this.context.fillStyle = 'white'
      this.context.font = "40px Roboto"
      this.context.fillText('x', 525, 300)
      this.context.fillText('x', 555, 300)
      this.context.closePath()
      this.context.strokeStyle = 'white'
      this.context.lineWidth = 5
      this.context.beginPath()
      this.context.arc(550, 340, 25, Math.PI / 1, Math.PI * 2);
      this.context.stroke()
      this.context.closePath()
    }
  }

  gameOver() {
    let imgGameOver = new Image()
    imgGameOver.src = "../images/gameover.png"
    this.context.drawImage(imgGameOver, 200, 200)
  }

  winner() {
    let imgWinner = new Image()
    imgWinner.src = "../images/awesome.png"
    this.context.drawImage(imgWinner, 200, 100)
    // if it won't work via canvas - div with id final-image is needed in html
    // document.getElementById('final-image').innerHTML = '<img src="../images/awesome.png" alt="You are awesome!" />'
  }
}