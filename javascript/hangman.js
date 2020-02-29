class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.errorsLeft = 10
    this.guessedLetters = ""
    this.letters = []

  }

  pickWord() {
    // ... your code goes here
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }


  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.letters.push(letter)
    this.errorsLeft--
    console.log(this.errorsLeft)
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
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

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.secretWord.includes(event.key)) {
    // add it to correct letters
    hangman.addCorrectLetter(event.key)
    hangmanCanvas.writeCorrectLetter(event.key)
  } else {
    hangman.addWrongLetter(event.key)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }

});