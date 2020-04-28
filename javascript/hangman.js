class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() *this.words.length)];
  };

  checkIfLetter(keyCode) {
    return (keyCode >=65 &&  keyCode <= 90);
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)){
      return true;
    }else{
      return false;
    }
  }

  addCorrectLetter(letter) {
      this.guessedLetters+= letter
  }

  addWrongLetter(letter) {
    if (!this.letters.includes(letter)) {
      this.errorsLeft-=1;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0? true: false;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetters.length ? true : false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
