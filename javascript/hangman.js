class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];

  }

  checkIfLetter(keyCode) {
    const isKeyCode = keyCode >= 65 && keyCode <= 90;
    return isKeyCode;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)
  };

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    return this.guessedLetters.length === this.secretWord.length
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }
  

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }
  

  checkWinner() {
    const guessedWord = this.guessedLetters.slice().split('').sort().join('');
    const secretWordCopy = this.secretWord.slice().split('').sort().join('');
    
    return guessedWord === secretWordCopy ? true : false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman([
      'node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
    document.onkeydown = (event) => {
      

    }
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
