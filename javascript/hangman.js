class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;

  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)]

  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode > 64 && keyCode < 91
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    if (!this.letters.includes(letter) && !this.secretWord.includes(letter)){
      this.errorsLeft -- 
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0){
      return false
    }
    else {
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    let secretWordSplit = [...this.secretWord]

    return secretWordSplit.every((wrd) => this.guessedLetters.split('').includes(wrd));
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
