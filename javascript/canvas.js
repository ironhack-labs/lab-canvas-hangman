class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord

  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    for(let i = 0; i < this.secretWord.length; i++){
      this.context.beginPath()
      this.context.lineWidth = 2
      this.context.moveTo(500 + 70 * i, 700)
      this.context.lineTo(550 + 70 * i, 700)
      this.context.strokeStyle = "black"
      this.context.stroke()
      this.context.closePath()
    }
  }
  

  writeCorrectLetter(index) {
    // ... your code goes here
    if(index != -1){
      this.context.font = "60px Arial"
      this.context.fillText(this.secretWord[index],500 + 70 * [index], 700)
    }
  
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    //
    if(errorsLeft > 0){
      let index = 10 - errorsLeft
      let width = index % 5
      let height = Math.floor(index/5)
      this.context.font = "60px Arial"
      this.context.fillText(letter,500 + 100 * width, height * 100 + 100)
    }
    
    
  }
  

  drawHangman(errorsLeft) {
    // ... your code goes here
    //pintar ahorado
    //cada vez que hay un error debe pintarse una linea
    //cada pintada depende del error left que yo tenga
    //switch
//path1
    //9
    this.context.beginPath()
      this.context.moveTo(50, 700)
      this.context.lineTo(200, 700)
      this.context.lineTo(200-75, 650)
      this.context.lineTo(50, 700)
      this.context.stroke()
    this.context.closePath()

    //8
    this.context.beginPath()
      this.context.moveTo(200-75, 650)
      this.context.lineTo(200-75, 100)
      this.context.stroke()
    this.context.closePath()

    //7
    this.context.beginPath()
      this.context.moveTo(200-75, 100)
      this.context.lineTo(300, 100)
      this.context.stroke()
    this.context.closePath()

    //6
    this.context.beginPath()
      this.context.moveTo(300, 100)
      this.context.lineTo(300, 200)
      this.context.stroke()
    this.context.closePath()

    //5
    this.context.beginPath()
      this.context.arc(300, 300, 50, 0, 3.14* 2)
      this.context.stroke()
    this.context.closePath()

  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
