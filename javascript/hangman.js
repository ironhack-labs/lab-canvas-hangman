class Hangman {
  constructor(words) {
    this.words = words
    this.secretWord = words[0]
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)].toLowerCase()
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false : true
  }

  addCorrectLetter(letter) {
    if (this.secretWord.includes(letter)) {
      this.letters.push(letter)
      this.guessedLetters = this.guessedLetters.concat(letter)
      this.checkWinner()
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.letters.push(letter)
      this.errorsLeft--
      this.checkGameOver()
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length ? true :
      false
  }
}
let hangman

const startGameButton = document.getElementById('start-game-button')

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa'])

    hangman.secretWord = hangman.pickWord()
    hangmanCanvas = new HangmanCanvas(hangman.secretWord)

    hangmanCanvas.createBoard()
  })
}

document.addEventListener('keydown', event => {
  let keyCode = event.keyCode
  let letter

  if (hangman.checkIfLetter(keyCode)) {
    function linkLetter(keyCode) {
      switch (keyCode) {
        case 65:
          return letter = 'a';
          break;
        case 66:
          return letter = `b`;
          break;
        case 67:
          return letter = 'c';
          break;
        case 68:
          return letter = 'd';
          break;
        case 69:
          return letter = 'e';
          break;
        case 70:
          return letter = 'f';
          break;
        case 71:
          return letter = 'g';
          break;
        case 72:
          return letter = 'h';
          break;
        case 73:
          return letter = 'i';
          break;
        case 74:
          return letter = 'j';
          break;
        case 75:
          return letter = 'k';
          break;
        case 76:
          return letter = 'l';
          break;
        case 77:
          return letter = 'm';
          break;
        case 78:
          return letter = 'n';
          break;
        case 79:
          return letter = 'o';
          break;
        case 80:
          return letter = 'p';
          break;
        case 81:
          return letter = 'q';
          break;
        case 82:
          return letter = 'r';
          break;
        case 83:
          return letter = 's';
          break;
        case 84:
          return letter = 't';
          break;
        case 85:
          return letter = 'u';
          break;
        case 86:
          return letter = 'v';
          break;
        case 87:
          return letter = 'w';
          break;
        case 88:
          return letter = 'x';
          break;
        case 89:
          return letter = 'y';
          break;
        case 90:
          return letter = 'z';
      }
    }
    linkLetter(keyCode)
    if (hangman.checkClickedLetters(letter)) {
      hangman.addWrongLetter(letter)
      hangman.addCorrectLetter(letter)

      if (hangman.secretWord.includes(letter)) {
        hangmanCanvas.writeCorrectLetter(letter, hangman.secretWord.indexOf(letter))
        if (hangman.checkWinner() === true) {
          hangmanCanvas.winner()
        }
      } else {
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
      }
    }
  }
})