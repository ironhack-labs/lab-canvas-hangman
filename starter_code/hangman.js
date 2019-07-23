

let hangman;
let mycanvas;

class Hangman {
  constructor(words) {
    this.words = ['test', 'test2', 'test3']
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    return ((keyCode > 65) && (keyCode < 90))
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      this.letters.push(letter);
      return false
    } else {
      this.letters.push(letter);
      return true
    }
  }

  addCorrectLetter(positionInWord) {
    this.guessedLetter += this.secretWord[positionInWord].toUpperCase()
  }

  checkWinner() {
    return this.guessedLetter.split('').sort().join('') === this.secretWord.split('').sort().join('')
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else { return true }
  }

  addWrongLetter(letter) {

    this.errorsLeft -= 1

  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()
  mycanvas = new HangmanCanvas(hangman.secretWord)
  mycanvas.createBoard();
  mycanvas.drawLines();
};


document.onkeydown = function (event) {

  checkIfLetter(event.keyCode)
  checkClickedLetters(event.key)
};

