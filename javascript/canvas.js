class HangmanCanvas{
  constructor(secretWord)
  {
  this.context=document.getElementById('hangman').getContext('2d')
  this.context.fillStyle="black"
  this.clearBoard ()
  this.secretWord= secretWord;
  this.drawLines()
  }
}

  createBoard() 
    this.context.clearReact(0,0,canvas.width, canvas.heigth)
    this.drawLines()
  

  drawLines()
    this.context.beginPath()
    this.context.fillStyle="Black"
    for (let i=0; i<= this.secretWord.length; i++){
this.context.fillRect (400+i*80, 700,50,5)

    }
  

  writeCorrectLetter(index) 
    this.context.fillStyle="green"
    this.context.font("50px Century Gothic")
    this.context.fillText(this.secretWord.charAt(index),490,680)
  

  writeWrongLetter(letter, errorsLeft) 
    // ... your code goes here
  

  drawHangman(errorsLeft) 
    // ... your code goes here
  

  gameOver() 
    // ... your code goes here
  

  winner() 
    // ... your code goes here
  

