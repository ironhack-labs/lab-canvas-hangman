
const words = [
  'noche',
  'coche',
  'trafico',
  'comida',
  'hambre',
  'sueño',
  
]

class Hangman {
  constructor() {
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  this.words = words
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
}
//function getWord() {return this.words[Math.floor(Math.random() * this.words.length)]} 

  checkIfLetter(num) {
    if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) return true
    return false
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key)
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase()
    this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft--
    this.checkGameOver()
  }

  checkGameOver() {
    if (this.errorsLeft === 0) return true
    return false
  }

  checkWinner() {
    for (var j = 0; j < this.secretWord.length; j++) {
      if (this.guessedLetter.indexOf(this.secretWord[j]) === -1) return false
    }
    return true
  }
}