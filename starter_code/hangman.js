let hangman;
let hangmanCanvas

class Hangman {

  constructor() {
    this.words = ['perro', 'gato', 'jirafa']
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
  hangmanCanvas = new HangmanCanvas(hangman.getWord())
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
};

document.onkeydown = (e) => { // Cuando presiones una tecla.
  
  if (hangman.checkClickedLetters(e.keyCode)) {  // ¿Está presionando una letra?
    let letter = e.key.toUpperCase() // Guarda la letra en una variable.
    if (hangman.checkClickedLetters(letter)) { // ¿Ya se ha presionado esa letra?
      if (hangman.secretWord.includes(letter)) { // No, entonces
        
      }
    }
  }

};
