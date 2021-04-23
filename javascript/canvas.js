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

    switch (errorsLeft) {
      case 9:
        this.context.beginPath()
          this.context.moveTo(50, 700)
          this.context.lineTo(200, 700)
          this.context.lineTo(200-75, 650)
          this.context.lineTo(50, 700)
          this.context.stroke()
        this.context.closePath()
        break;
      case 8:
        this.context.beginPath()
        this.context.moveTo(200-75, 650)
        this.context.lineTo(200-75, 100)
        this.context.stroke()
      this.context.closePath()
        break;
      case 7:
        this.context.beginPath()
        this.context.moveTo(200-75, 100)
        this.context.lineTo(300, 100)
        this.context.stroke()
      this.context.closePath()
        break;
      case 6:
        this.context.beginPath()
        this.context.moveTo(300, 100)
        this.context.lineTo(300, 200)
        this.context.stroke()
      this.context.closePath()
        break;
      case 5:
        this.context.beginPath()
        this.context.arc(300, 250, 50, 0, 3.14* 2)
        this.context.stroke()
      this.context.closePath()
        break;
      case 4:
        this.context.beginPath()
        this.context.moveTo(300, 300)
        this.context.lineTo(300, 500)
        this.context.stroke()
      this.context.closePath()
        break;
      case 3:
        this.context.beginPath()
        this.context.moveTo(300, 500)
        this.context.lineTo(200, 650)
        this.context.stroke()
      this.context.closePath()
        break;
      case 2:
        this.context.beginPath()
        this.context.moveTo(300, 500)
        this.context.lineTo(400, 650)
        this.context.stroke()
      this.context.closePath()
        break;
      case 1:
        this.context.beginPath()
        this.context.moveTo(300,330)
        this.context.lineTo(400, 450)
        this.context.stroke()
      this.context.closePath()
        break;
      case 0:
        this.context.beginPath()
        this.context.moveTo(300,330)
        this.context.lineTo(200, 450)
        this.context.stroke()
      this.context.closePath()
        break;
      default:
        break;
    }
 




  }

  gameOver() {
    // ... your code goes here
    if(hangman.errorsLeft <= 0){
      const looser = new Image();
      looser.src = "./images/gameover.png";
      this.context.drawImage(looser, 400, 200, 650, 500)
    }
    
    
  }

  winner() {
    if(hangman.checkWinner() === true){
      const winner = new Image();
      winner.src = "./images/awesome.png";
      this.context.drawImage(winner, 400, 200, 650, 500)
    }
    // ... your code goes here
  }
}
