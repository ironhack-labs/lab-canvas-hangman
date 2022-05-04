class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    console.log(this.secretWord);
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
  }

  drawLines() {
  for(let i = 0; i < this.secretWord.length; i++){
    this.context.beginPath()
    this.context.moveTo(50 + i  * 75, 150)
    this.context.lineTo(i * 75, 150)
    this.context.stroke()
    this.context.closePath()
  }
  
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    
    switch(errorsLeft){

      case 0: this.context.beginPath()
      this.context.lineWidth = 4
      this.context.moveTo(570,340)
      this.context.lineTo(590,350)       
      this.context.moveTo(590,340)
      this.context.lineTo(570,350)
      this.context.moveTo(620,340)
      this.context.lineTo(640,350)
      this.context.moveTo(640,340)
      this.context.lineTo(620,350)
      this.context.stroke()
      this.context.closePath()
  
      case 1: this.context.beginPath()
      this.context.lineWidth = 5
      this.context.moveTo(600,500)
      this.context.lineTo(700,550)
      this.context.stroke()
      this.context.closePath()
  
      case 2: this.context.beginPath()
      this.context.moveTo(600,500)
      this.context.lineTo(500,550)
      this.context.stroke()
      this.context.closePath()
  
      case 3: this.context.beginPath()
      this.context.moveTo(670,680)
      this.context.lineTo(700,750)
      this.context.stroke()
      this.context.closePath()
  
      case 4: this.context.beginPath()
      this.context.moveTo(600,620)
      this.context.lineTo(670,680)
      this.context.stroke()
      this.context.closePath()
  
      case 5: this.context.beginPath()
      this.context.moveTo(530,680)
      this.context.lineTo(500,750)
      this.context.stroke()
      this.context.closePath()
  
      case 6: this.context.beginPath()
      this.context.moveTo(600,620)
      this.context.lineTo(530,680)
      this.context.stroke()
      this.context.closePath()
  
      case 7: this.context.beginPath()
      this.context.moveTo(600,500)
      this.context.lineTo(600,620)
      this.context.stroke()
      this.context.closePath()
  
      case 8: this.context.beginPath()
      this.context.moveTo(600,420)
      this.context.lineTo(600,500)
      this.context.stroke()
      this.context.closePath()
  
      case 9: this.context.beginPath()
      this.context.arc(600,360,57,0,Math.PI * 2)
      this.context.stroke()
      this.context.closePath()
  
      case 10: this.context.beginPath()
      this.context.strokeStyle ='brown'
      this.context.lineWidth = 8
      this.context.moveTo(400,800);
      this.context.lineTo(400,200);
      this.context.lineTo(600,200);
      this.context.lineTo(600,300);
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
