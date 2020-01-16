let hangman
// let hangmanCanvas

class Hangman {

  constructor() {
    this.words = ['PERRO', 'GATO', 'HURON', 'PUERCO', 'RATA', 'AVE', 'LEON']
    this.secretWord = this.getWord()
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  }

  getWord() {
    const i = Math.floor(Math.random() * this.words.length)
    return this.words[i]
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase()
    this.checkWinner()
  }

  addWrongLetter(letter) {
    if (this.errorsLeft > 0) {
      this.letters.push(letter)
      this.errorsLeft--
      this.checkGameOver()
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetter.length) {
      return true
    } else {
      return false
    }
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  hangmanCanvas.createBoard()
};

document.onkeydown = (e) => { // Cuando presiones una tecla.
  
  if (hangman.checkIfLetter(e.keyCode)) {  // ¿Está presionando una letra?
    let letter = e.key.toUpperCase() // Si... Guarda la letra en una variable.
    if (hangman.checkClickedLetters(letter)) { // ¿Ya se ha presionado esa letra?
      if(hangman.secretWord.includes(letter)) { // No (TRUE)... ¿La palabra secreta incluye la letra?
        console.log('letra')
        hangman.addCorrectLetter(hangman.secretWord.indexOf(letter)) // Si... Añade la letra a guessedLetter.
        hangmanCanvas.writeCorrectLetter(letter) // Pinta la letra en el canvas.
      } else {  // La palabra secreta no incluye la letra, entonces...
        hangman.addWrongLetter(letter) // Añade la letra al arreglo de letras, disminuye los errores restantes y revisa si Game Over.
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft) // Pinta la letra incorrecta en el canvas.
      }
    }
  }

};
