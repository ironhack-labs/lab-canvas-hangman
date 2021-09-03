class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord
    this.createBoard()
  }

  createBoard() {
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
    
  }

  drawLines() {
    // ... your code goes here
    this.context.beginPath();
    this.context.moveTo(0,800)
    this.context.lineTo(110,750) 
    this.context.lineWidth=4
    this.context.stroke()
    this.context.closePath();
    //
    this.context.beginPath();
    this.context.moveTo(110,750)
    this.context.lineTo(200,800)
    this.context.lineWidth= // ?
    this.context.stroke()
    this.context.closePath();
    //
    this.context.beginPath();
    this.context.moveTo(0,800)
    this.context.lineTo(200,800) //para la base
    this.context.lineWidth= 
    this.context.stroke()
    this.context.closePath();
    //
    this.context.beginPath();
    this.context.moveTo(110,750)
    this.context.lineTo(110,0)
    this.context.lineWidth= //
    this.context.stroke()
    this.context.closePath();
  //
    this.context.beginPath();
    this.context.moveTo(110,0)
    this.context.lineTo(400,0)
    this.context.lineWidth= //
    this.context.stroke()
    this.context.closePath();
    //
    this.context.beginPath();
    this.context.moveTo(400,0)
    this.context.lineTo(400,50)
    this.context.lineWidth= //
    this.context.stroke()
    this.context.closePath();
    //lineas para las letras
    // Raya 1
    /*this.context.beginPath();
    this.context.moveTo(230,800) // punto de inicio 
    this.context.lineTo(290,800) // punto final 290 - 230 = 60 
    this.context.lineWidth=7 //
    this.context.stroke()
    this.context.closePath();
    //Raya 2
    this.context.moveTo(300,800)  // punto de inicio 
    this.context.lineTo(360,800) // punto final
    this.context.lineWidth=7 //
    this.context.stroke()
    this.context.closePath();
    //Raya 3
    this.context.moveTo(370,800)  //punto de inicio 
    this.context.lineTo(430,800)  // punto final
    this.context.lineWidth=7 
    this.context.stroke()
    this.context.closePath();*/


    let space=10//el espacio entre las lineas
    let barrWord=60// valor a la tamaño de las barras
    let positionX=230 // donde va a iniciar en el eje x

    for(let i=0;i<this.secretWord.length;i++){
      console.log(this.secretWord[i])
      this.context.moveTo(positionX,750)
      this.context.lineTo(positionX+barrWord,750)
      this.context.stroke()
      this.context.closePath()
       positionX += space + barrWord
    }
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
