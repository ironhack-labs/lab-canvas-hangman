class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord=secretWord

  
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect();
        this.drawLines()
  }

  drawLines() {

    
    //base
    this.context.beginPath();
    this.context.moveTo(50,50)
    this.context.lineTo(250,50)
    this.context.stroke();
    this.context.closePath() 

    //pedestal vertical
    this.context.moveTo(50,50)
    this.context.lineTo(50,500)
    this.context.stroke();
    this.context.closePath() 


    //pedestal horizontal 
    this.context.moveTo(50,500)
    this.context.lineTo(80,500)
    this.context.stroke();
    this.context.closePath() 

    //cabeza
    this.context.beginPath()
    this.context.arc(250,80,30,0,Math.PI*2)
    this.context.stroke()
    this.context.closePath()

    //cuerpo
    this.context.beginPath()
    this.context.moveTo(250,110)
    this.context.lineTo(250,350)
    this.context.stroke()
    this.context.closePath()
    
     //mano izquierda
     this.context.beginPath()
     this.context.moveTo(250,110)
     this.context.lineTo(100,200)
     this.context.stroke()
     this.context.closePath()

     //mano derecha
     this.context.beginPath()
     this.context.moveTo(250,110)
     this.context.lineTo(400,200)
     this.context.stroke()
     this.context.closePath()


     //pie izquierda
     this.context.beginPath()
     this.context.moveTo(250,350)
     this.context.lineTo(100,450)
     this.context.stroke()
     this.context.closePath()

     //pie derecha
     this.context.beginPath()
     this.context.moveTo(250,350)
     this.context.lineTo(400,450)
     this.context.stroke()
     this.context.closePath()
    
  }

  writeCorrectLetter(index) {
    // ... your code goes here
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
