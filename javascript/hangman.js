class Hangman {
  //  new Hangman
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
    // ... your code goes here
  }

  pickWord() {
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    for (let i = 0; i <= this.letters.length; i++) {
      if (letter === this.letters[i]) {
        return false
      }
    }
    return true
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft--
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true
    } else {
      return false
      // ... your code goes here
    }
  }

  checkWinner() {
    if (this.guessedLetters.length == this.secretWord.length) {
      return true
    } else {
      return false
    }
    // ... your code goes here
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

document.addEventListener("keydown",event =>  {
  if (hangman.secretWord.includes(event.key)) {
    //addCorrectLetter(letter)
    let index = hangman.secretWord.indexOf(event.key)
    hangmanCanvas.writeCorrectLetter(index) 
  } else {
    //addWrongLetter(letter)
    hangmanCanvas.writeWrongLetter(event.key) 
  }
})