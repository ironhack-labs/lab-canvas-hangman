class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
    // ... your code goes here
  }

  drawLines() {
    let x = 400;
    let y = 700;
    this.context.beginPath()
    this.secretWord.split("").forEach(element => {
      this.context.moveTo(x,y)
      this.context.lineTo(x+30,y)
      x+=60
    });
    this.context.stroke()
    this.context.closePath()
    // ... your code goes here
  }

  writeCorrectLetter(index) {
    let x = 400;
    let y = 700;
    this.context.font = "30px Arial"
    this.context.fillText(this.secretWord[index], (x+10) + 60 * index, y-10)

    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 500
    let y = 200
    this.context.font = "60px Arial"
    this.context.fillText(letter, (x+15) + 50 * (10 - errorsLeft), y)
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    this.context.beginPath()
    switch(errorsLeft){
      case 9:
        this.context.moveTo(100, 750)
        this.context.lineTo(300, 750)
        this.context.lineTo(200, 650)
        this.context.lineTo(100, 750)
        break;
      case 8:
        this.context.moveTo(200, 650)
        this.context.lineTo(200, 100)
        break;
      case 7:
        this.context.moveTo(200, 100)
        this.context.lineTo(400, 100)
        break;
      case 6:
        this.context.moveTo(400, 100)
        this.context.lineTo(400, 150)
        break;
      case 5:
        this.context.moveTo(440, 190)
        this.context.arc(400, 190, 40, 0, Math.PI*2)
        break;
      case 4:
        this.context.moveTo(400, 230)
        this.context.lineTo(400, 430)
        break;
      case 3:
        this.context.moveTo(400, 430)
        this.context.lineTo(340, 580)
        break;
      case 2:
        this.context.moveTo(400, 430)
        this.context.lineTo(460, 580)
        break;
      case 1:
        this.context.moveTo(400, 330)
        this.context.lineTo(340, 440)
        break;
      case 0:
        this.context.moveTo(400, 330)
        this.context.lineTo(460, 440)
        break;
    }
    this.context.stroke()
    this.context.closePath()
    // ... your code goes here
  }

  gameOver() {
      let img = new Image()
      img.src = "/images/gameover.png"
      img.addEventListener("load", ()=>{
        this.context.drawImage(img,400,300)
      })
    // ... your code goes here
  }

  winner() {
    let img = new Image()
    img.src = "/images/awesome.png"
    img.addEventListener("load", ()=>{
      this.context.drawImage(img,200,50)
    })
    // ... your code goes here
  }
}
