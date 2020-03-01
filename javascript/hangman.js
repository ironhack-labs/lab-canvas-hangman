class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.errorsLeft = 10
    this.guessedLetters = ""
    this.letters = []
  }

  pickWord() {
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }


  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.letters.push(letter)
    this.errorsLeft--
    console.log(this.errorsLeft)
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    let usersGuesses = this.guessedLetters.split('').sort().join('')
    let secretWordAlphabetical = this.secretWord.split('').sort().join('')
    if (usersGuesses === secretWordAlphabetical) {
      return true
    } else {
      return false
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // check if it is even a letter
  if (!hangman.checkIfLetter(event.keyCode)) {
    alert('not a letter')
    return
  }
  // check if the letter has been used before
  if (!hangman.checkClickedLetters(event.key)) {
    alert("please don't click the same one again")
    return
  }

  if (hangman.secretWord.includes(event.key)) {
    // add it to correct letters
    hangman.addCorrectLetter(event.key)
    hangmanCanvas.writeCorrectLetter(event.key)
  } else {
    hangman.addWrongLetter(event.key)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
    hangmanCanvas.drawHangman(hangman.errorsLeft)
  }

  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver()
    //alert('you lost')
  }

  if (hangman.checkWinner()) {
    hangmanCanvas.winner()
    //alert('you win')
  }
});