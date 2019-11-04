let hangman

class Hangman {
  constructor() {
    this.words = ['Alexa', 'Diana', 'IronHack']
    this.secretWord = this.getWord().toUpperCase()
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  }

  getWord() {
    const id = Math.floor(Math.random() * this.words.length)
    return this.words[id]
  }

  checkIfLetter(keyCode) {
    const letter = String.fromCharCode(keyCode).toUpperCase()
    return letter >= 'A' && letter <= 'Z'
  }

  checkClickedLetters(key) {
    return this.letters.indexOf(key) === -1
  }

  addCorrectLetter(i) {
    const letter = this.secretWord[i].toUpperCase()
    this.letters.push(letter)
    this.guessedLetter += letter
    return this.checkWinner()
  }

  addWrongLetter(letter) {
    this.letters.push(letter)
    this.errorsLeft -= 1
    return this.checkGameOver()
  }

  checkGameOver() {
    return this.errorsLeft <= 0
  }

  checkWinner() {
    const letters = this.secretWord.split('')
    return letters.every(letter => this.guessedLetter.indexOf(letter) !== -1)
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman()
}

document.onkeydown = e => {
  if (hangman) {
    if (hangman.checkWinner()) {
      console.log('Win')
    } else if (hangman.checkGameOver()) {
      console.log('Game Over')
    } else if (hangman.checkIfLetter(e.keyCode)) {
      const letter = String.fromCharCode(e.keyCode).toUpperCase()
      if (hangman.checkClickedLetters(letter)) {
        const i = hangman.secretWord.indexOf(letter)
        if (i !== -1) {
          hangman.addCorrectLetter(i)
        } else {
          hangman.addWrongLetter(letter)
        }
      }
    }
  }
}
