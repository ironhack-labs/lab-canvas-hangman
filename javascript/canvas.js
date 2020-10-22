/*Este codigo podria haber sido mas efficiente
pero por lo menos funciona (creo)*/

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    //NO BORRA TODO
    this.context.clearRect(0,0, 1200, 800)
    
    // console.log(hangman.secretWord)
    this.drawLines()
  }
  
  drawLines() {
    let lines = []
    let startX = 500
    let startY = 700
    let space = 20
    let width = 40
    for (let i=0; i<hangman.secretWord.length; i++) {
      lines[i] = startX + ((space+width)*i)

      this.context.strokeStyle = 'black'
      this.context.lineWidth = "3"
      this.context.moveTo(lines[i], startY)//(600 + 10+(i*40),700)
      this.context.lineTo(lines[i]+width, startY)//(600 + 40+(i*40),700)
      this.context.stroke();
    }   
  }

  writeCorrectLetter(index) {
    //1. Arreglo para las posiciones de las letras 
    let test = []
    let startX = 520 //centered on line
    let startY = 670
    let space = 20
    let width = 40

    for (let i=0; i<hangman.secretWord.length; i++) {
      test[i] = startX + ((space+width)*i)
    }

    //2. Buscando el indice de la letra en la palabra 
    let upperCaseSecretWord = hangman.secretWord.toUpperCase()
    let wordIndex = upperCaseSecretWord.indexOf(index.toUpperCase())
    
    if (hangman.secretWord.toUpperCase().indexOf(index.toUpperCase()) >= 0) {
      console.log("right")
      this.context.font = "60px Arial"
      this.context.fillStyle = "blue"
      this.context.textAlign = "center"
      this.context.fillText(index.toUpperCase(), test[wordIndex], startY)
    } else {
      this.writeWrongLetter(index,hangman.errorsLeft-1)
      console.log('1ok')
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    if (hangman.checkClickedLetters(letter)) {
      
      hangman.addWrongLetter(letter)
      this.drawHangman(errorsLeft)

      let wrongLetters = hangman.letters.join(' ')

      this.context.font = "40px Arial"
      this.context.fillStyle = "black"
      this.context.textAlign = "left"
      this.context.fillText(wrongLetters.toUpperCase(), 800,100)
    }
  }

  drawHangman(errorsLeft) {
    let s = 100 //solo para modificar la posicion
    switch(errorsLeft) {
      case 9:
        //base
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(300-s,700)
        this.context.lineTo(500-s,700)
        this.context.lineTo(400-s,650)
        this.context.closePath()
        this.context.stroke()
      break;
      case 8:
        //poste vertical
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(400-s,650)
        this.context.lineTo(400-s,100)
        this.context.stroke()
      break;
      case 7:
        //poste horizontal
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(400-s,100)
        this.context.lineTo(700-s,100)
        this.context.stroke()
      break;
      case 6:
        //cuerda
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(700-s,100)
        this.context.lineTo(700-s,150)
        this.context.stroke()
      break;
      case 5:
        //cabeza
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.arc(700-s, 200, 50, 0, 2 * Math.PI, false);
        this.context.stroke()
      break;
      case 4:
        //torso 
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(700-s,250)
        this.context.lineTo(700-s,400)
        this.context.stroke()
      break;
      case 3:
        //pierna izquierda
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(700-s,400)
        this.context.lineTo(650-s,500)
        this.context.stroke()
      break;    
      case 2:
        //pierna derecha
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(700-s,400)
        this.context.lineTo(750-s,500)
        this.context.stroke()
      break;
      case 1:
        //brazo izquierdo 
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(700-s,275)
        this.context.lineTo(625-s,350)
        this.context.stroke()
      break; 
      case 0:
        //brazo derecho
        this.context.strokeStyle = 'black'
        this.context.lineWidth = "3"
        this.context.beginPath()
        this.context.moveTo(700-s,275)
        this.context.lineTo(775-s,350)
        this.context.stroke()
        this.gameOver()
        console.log('0: Game over')
      break;      
     }
  }

  gameOver() {
    this.context.font = "150px Arial"
    this.context.strokeStyle = "red"
    this.context.textAlign = "center"
    this.context.strokeText("GAME OVER", 1200/2, 800/2)
    

    let test = []
    let startX = 520 //centered on line
    let startY = 670
    let space = 20
    let width = 40
    for (let i=0; i<hangman.secretWord.length; i++) {
      test[i] = startX + ((space+width)*i)
      console.log("right")
      this.context.font = "60px Arial"
      this.context.fillStyle = "blue"
      this.context.textAlign = "center"
      this.context.fillText(hangman.secretWord[i].toUpperCase(), test[i], startY)
    }

  }

  winner() {
    // ... your code goes here
  }
}
