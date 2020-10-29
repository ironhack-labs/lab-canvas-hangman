class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
    //console.log("si")
  }

  drawLines() {
    //let numberOfLines = secretWord.length
    let x = 200
    let y = 700
    //console.log(this.secretWord)
    //console.log(this.secretWord.length)
    for(let i=0; i<this.secretWord.length; i++){
      this.context.beginPath()
      this.context.strokeStyle = '#A9B503';
      this.context.moveTo(x,y)
      this.context.lineTo(x+40,y)
      this.context.closePath()
      this.context.stroke()
      x+= 100
    }
  }

  writeCorrectLetter(index) {
      let x = 205
      let y = 700

    for(let i=0; i<this.secretWord.length; i++){
      //console.log(this.secretWord[i])
      if(this.secretWord[i]===index){
        this.context.font = '50px serif';
        this.context.fillText(this.secretWord[i], x, y)
        hangman.addCorrectLetter(index)
      }
      x+=100
    }
  }

  writeWrongLetter(letter){
    let x = 900
    let y = 50
    let arrOfSecretWordLetters = []
  for(let i=0; i<this.secretWord.length; i++){
  if(!arrOfSecretWordLetters.includes(`${this.secretWord[i]}`)){
    arrOfSecretWordLetters.push(this.secretWord[i])//Creo un arr con las letras de la palabra secreta para comprobar después 
  }
  }
  if(!arrOfSecretWordLetters.includes(`${letter}`) && hangman.checkClickedLetters(letter)){//Compruebo que arrOfSecretWordLetters no tenga la letra ni que esté repetida
    hangman.addWrongLetter(letter)
    this.context.font = '50px serif';
    this.context.fillText(hangman.guessedLetters, x, y)
  }
}
  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case 9:
      this.context.beginPath()
      this.context.moveTo(250,300)
      this.context.lineTo(280, 340)
      this.context.stroke()
      this.context.closePath()
      break;
      case 8:
      this.context.beginPath()
      this.context.moveTo(250,300)
      this.context.lineTo(220, 340)
      this.context.stroke()
      this.context.closePath()
      break;
      case 7:
      this.context.beginPath()
      this.context.moveTo(250,220)
      this.context.lineTo(220, 190)
      this.context.stroke()
      this.context.closePath()
      break;
      case 6:
      this.context.beginPath()
      this.context.moveTo(250,220)
      this.context.lineTo(280, 190)
      this.context.stroke()
      this.context.closePath()
      break;
      case 5:
      this.context.beginPath()
      this.context.moveTo(250,170)
      this.context.lineTo(250, 300)
      this.context.stroke()
      this.context.closePath()
      break;
      case 4:
      this.context.beginPath()
      this.context.arc(250, 145, 25, 0, 2 * Math.PI);
      this.context.stroke()
      this.context.closePath()
      break;
      case 3:
      this.context.beginPath()
      this.context.moveTo(250,90)
      this.context.lineTo(250, 120)
      this.context.stroke()
      this.context.closePath()
      break;
      case 2:
      this.context.beginPath()
      this.context.moveTo(95,90)
      this.context.lineTo(250, 90)
      this.context.stroke()
      this.context.closePath()
      break;
      case 1:
      this.context.beginPath()
      this.context.moveTo(95,370)
      this.context.lineTo(95, 90)
      this.context.stroke()
      this.context.closePath()
      break;
      case 0:
      this.context.beginPath()
      this.context.moveTo(40,400)
      this.context.lineTo(120, 400)
      this.context.lineTo(95, 370)
      this.context.lineTo(70,400)
      this.context.fill()
      this.context.closePath()
      break;
    }
  }

  gameOver() {
    const img = new Image()
    img.src = "/images/gameover.png"
    if(hangman.checkGameOver()){
      this.context.drawImage(img, 200, 200, 800, 500);
    }
  }

  winner() {
    const img = new Image()
    img.src = "/images/awesome.png"
    if(hangman.checkWinner()){
      this.context.drawImage(img, 200, 200, 800, 500);
    }
  }
}
