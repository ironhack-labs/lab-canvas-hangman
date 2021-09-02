class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800)
    this.drawLines()
  }

  drawLines() {
    let space = 20 // asignamos un variable para determinar el spacion blanco entre las lineas con un tamaño de 20
    let barraword = 50 // asignamos valor al tamaño de la barra donde se van a poner las letras
    let positionx = 300 // posicion donde se va a poner en el eje X la barra
    
    for(let i = 0; i < this.secretWord.length; i++){ // aqui pusimos un for para que nos haga el recorrido de la palabra secreta para que nos pueda asignar los espacios que necesitamos caundo se llame el start
      console.log(this.secretWord[i]); // i= 0 desde donde inicia, siguiente valor hasta donde va a ser y el i++ para que lo recorra
      this.context.moveTo(positionx, 750) // los argumentos de moveTo siempre es X y Y  (inicio)
      this.context.lineTo(positionx + barraword, 750 ) // los argumentos de linTo siempre es X y Y (fin)
      this.context.stroke() // imprimir el movee y el line 
      positionx += space + barraword
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
