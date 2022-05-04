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

      case 0: ctx.beginPath()
              ctx.lineWidth = 4
              ctx.moveTo(570,340)
              ctx.lineTo(590,350)       
              ctx.moveTo(590,340)
              ctx.lineTo(570,350)
              ctx.moveTo(620,340)
              ctx.lineTo(640,350)
              ctx.moveTo(640,340)
              ctx.lineTo(620,350)
              ctx.stroke()
              ctx.closePath()
  
      case 1: ctx.beginPath()
              ctx.lineWidth = 5
              ctx.moveTo(600,500)
              ctx.lineTo(700,550)
              ctx.stroke()
              ctx.closePath()
  
      case 2: ctx.beginPath()
              ctx.moveTo(600,500)
              ctx.lineTo(500,550)
              ctx.stroke()
              ctx.closePath()
  
      case 3: ctx.beginPath()
              ctx.moveTo(670,680)
              ctx.lineTo(700,750)
              ctx.stroke()
              ctx.closePath()
  
      case 4: ctx.beginPath()
              ctx.moveTo(600,620)
              ctx.lineTo(670,680)
              ctx.stroke()
              ctx.closePath()
  
      case 5: ctx.beginPath()
              ctx.moveTo(530,680)
              ctx.lineTo(500,750)
              ctx.stroke()
              ctx.closePath()
  
      case 6: ctx.beginPath()
              ctx.moveTo(600,620)
              ctx.lineTo(530,680)
              ctx.stroke()
              ctx.closePath()
  
      case 7: ctx.beginPath()
              ctx.moveTo(600,500)
              ctx.lineTo(600,620)
              ctx.stroke()
              ctx.closePath()
  
      case 8: ctx.beginPath()
              ctx.moveTo(600,420)
              ctx.lineTo(600,500)
              ctx.stroke()
              ctx.closePath()
  
      case 9: ctx.beginPath()
              ctx.arc(600,360,57,0,Math.PI * 2)
              ctx.stroke()
              ctx.closePath()
  
      case 10: ctx.beginPath()
               ctx.strokeStyle ='brown'
               ctx.lineWidth = 8
               ctx.moveTo(400,800);
               ctx.lineTo(400,200);
               ctx.lineTo(600,200);
               ctx.lineTo(600,300);
               ctx.stroke()
               ctx.closePath()
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
