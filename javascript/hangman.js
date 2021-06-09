class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.unique = ''
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;


  }
  uniquify() {
    let splittedWord = this.secretWord.split('');
    let uniqueLetters = [];
    splittedWord.filter(element => {
      if (uniqueLetters.includes(element)) { return }
      else {
        uniqueLetters.push(element)
        this.unique += element
      }
    }
    )

  }

  pickWord() {
    let random = this.words[Math.floor(Math.random() * this.words.length)]
    this.secretWord = random;
    return random;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ? true : false;
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    }
    this.unique.includes(letter) ? this.addCorrectLetter(letter) : this.addWrongLetter(letter);
    this.letters.push(letter);
    return true
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    this.errorsLeft<1?alert('you lost'):undefined;
  }

  checkWinner() {
  this.guessedLetters.length===this.unique.length?alert('you won'):undefined;
    
  }
}


let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.pickWord();
    hangman.uniquify();
    console.log(hangman.unique);
    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)) {
    hangman.checkClickedLetters(event.key)

  }
  hangman.checkWinner();
  hangman.checkGameOver();
  console.log(hangman.errorsLeft)
}
)


