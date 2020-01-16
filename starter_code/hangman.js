let hangman;

class Hangman {
  constructor(words, secretWord, letters, guessedLetter, errorsLeft) {
    this.words = [
      'arturo', 'juego', 'canvas'
    ]
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  }
  getWord() {
    let word = this.words[Math.floor(Math.random() * this.words.length)]
    this.secretWord = word
    return word
  }
  checkIfLetter(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }
  checkClickedLetters(key) {
    return !this.letters.includes(key)
  }
  addCorrectLetter(i) {
    let letter = this.secretWord.split('')
    this.guessedLetter += letter[i].toUpperCase()
  }
  addWrongLetter(letter) {
    this.errorsLeft--
    if (!this.letters.includes(letter)) this.letters.push(letter)
  }
  checkGameOver() {
    if (this.errorsLeft <= 0) return true
    return false
  }
  checkWinner() {
    if (this.secretWord.length === this.guessedLetter.length) return true
    return false
  }
}

document.onkeydown = (element) => {
  if (hangman.checkIfLetter(element.keyCode)) {
    if (hangman.secretWord.includes(element.key)) {
      let index = hangman.secretWord.indexOf(element.key)
      hangmanCanvas.writeCorrectLetter(index, element.key)
      hangman.addCorrectLetter(index)
      console.log(hangman.checkWinner());
      if (hangman.checkWinner()) {
        console.log('Ganador!!!!');
        hangmanCanvas.winner()
      }
    } else {
      hangman.addWrongLetter(element.key)
      hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
      if (hangman.checkGameOver()) {
        console.log('Lo siento, intentalo nuevamenete')
        hangmanCanvas.gameOver()
      }
    }
  }
};

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};