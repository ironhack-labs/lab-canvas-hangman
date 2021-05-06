class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord
    this.letterPosition = []
    this.initialy = 60
    //this.gameover = new Image()
    //this.gameover.src = "images/gameover.png"
  }

  createBoard() {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
    this.drawLines()
  }

  drawLines() {
    let initx = 200;
    const inity = 600;
    let initl = 250;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath()
      this.context.moveTo(initx , inity)
      this.context.lineTo(initl ,600)
      this.context.stroke();

      this.letterPosition.push([initx, this.secretWord[i]])

      initx += 75
      initl += 75
    }
  }

  writeCorrectLetter(index) {
    let cont = 0
    this.context.font="40px Arial"
    this.letterPosition.forEach(letter => {if(letter[1] === index) {
      this.context.fillText(index, letter[0] + 5, 595, 40)
      cont += 1  
    }})
    if (cont > 0) return true
    return false
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font="20px Arial"
    this.context.fillText(letter, 1000, this.initialy, 40)
    this.context.fillText(`You have ${errorsLeft} errors left`, 600, this.initialy)
    this.initialy += 25
  }

  drawHangman(errorsLeft) {
    if(errorsLeft === 9) {
        this.context.beginPath()
        this.context.moveTo(0 , 600)
        this.context.lineTo(200 ,600)
        this.context.stroke();

        this.context.moveTo(200 , 600)
        this.context.lineTo(100 , 500)
        this.context.stroke();

        this.context.moveTo(100 , 500)
        this.context.lineTo(0 , 600)
        this.context.stroke();
    }
    if(errorsLeft === 8) {
        this.context.moveTo(100 , 500)
        this.context.lineTo(100 , 100)
        this.context.stroke();
    }
    if(errorsLeft === 7){
        this.context.moveTo(100 , 100)
        this.context.lineTo(400 , 100)
        this.context.stroke();
    }
    if(errorsLeft === 6) {
        this.context.moveTo(400 , 100)
        this.context.lineTo(400 , 200)
        this.context.stroke();
    }
    if(errorsLeft === 5) {
        this.context.arc(400,225,25,0,Math.PI*2)
        this.context.stroke();
    }
    if(errorsLeft === 4) {
        this.context.moveTo(400 , 250)
        this.context.lineTo(400 , 450)
        this.context.stroke();
    }
    if(errorsLeft === 3) {
        this.context.moveTo(400 , 250)
        this.context.lineTo(425 , 350)
        this.context.stroke();
    }
    if(errorsLeft === 2) {
        this.context.moveTo(400 , 250)
        this.context.lineTo(375 , 350)
        this.context.stroke();
    }
    if(errorsLeft === 1) {
        this.context.moveTo(400 , 450)
        this.context.lineTo(425 , 500)
        this.context.stroke();
    }
    if(errorsLeft === 0){
        this.context.moveTo(400 , 450)
        this.context.lineTo(375 , 500)
        this.context.stroke();
    }
  }

  gameOver() {
    console.log("perdi")
    /*
    this.gameover.onload = function(){
      this.context.drawImage(this.gameover,150,150,800,800)
    }
    */
  }

  winner() {
    console.log("gane")
    /*
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
    let awesome = new Image()
    awesome.src = "images/awesome.png"
    awesome.onload = function(){
      this.context.drawImage(awesome,150,150,800,800)
    }
    */
  }
}
