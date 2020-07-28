class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    const pickedWord = this.words[Math.floor(Math.random() * this.words.length)]
    return pickedWord
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters = letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if(!this.letters.includes(letter)){
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    function alphabet_order(str) {
      return str.split('').sort().join('');
    }

    const secretWordAlpha = alphabet_order(this.secretWord)
    const guessedLettersAlpha = alphabet_order(this.guessedLetters)

    // console.log(test)
    // console.log(test2)

    // const gameOver = this.checkGameOver()

    if(secretWordAlpha === guessedLettersAlpha) {
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

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
