
class Hangman {
  constructor() {
    this.words = ['mochon','lolaxo','fridonguis','bonguis'],
    this.secretWord = '',
    this.letters = [],
    this.guessedLetter = '',
    this.errorsLeft = 10
}
getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length-1)]
    return this.secretWord
}

  checkIfLetter(keyCode) {
    this.letters.push(keyCode)
    if (keyCode >= 65 || keyCode <= 91){ //de a a Z, sin ñ
      return true
    } else return false
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key) //puse ! porque me marcaba jasmine
  }

  addCorrectLetter(i) {
    //convertir a letra, tengo que hacer un milenio de ifs? mmmm
    this.guessedLetter+=i //espero que se concatenen por ser strings
  }

  addWrongLetter(letter) {
    this.errorsLeft--
  }

  checkGameOver() {
    return this.errorsLeft <= 0 ? true : false
  }

  checkWinner() {
    return this.guessedLetter === this.secretWord ? true : false
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman()
  canvas = new HangmanCanvas(hangman.getWord())
  canvas.createBoard()
};

document.onkeydown = (e) => {
  hangman.checkIfLetter(e.keyCode)
  hangman.checkClickedLetters(e.keyCode)
};
