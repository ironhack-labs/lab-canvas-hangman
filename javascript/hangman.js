class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = pickWord(words);
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let word = Math.floor(Math.random() * this.words.length);
    this.guessedLetters.padStart(word.length, "_"); 
    return this.words[word];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {return true} else {return false}
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {return false} else {return true}
  }

  addCorrectLetter(letter) {
    if (this.secretWord.includes(letter)) {
      let searchI = 0;
      let currentLetter = "";
      do {
        searchI = this.secretWord.indexOf(letter, searchI);
        currentLetter = secretWord[searchI];
        this.guessedLetters = guessedLetters.substring(0, searchI) + currentLetter + guessedLetters.substring(searchI+1);
      } while (secretWord.indexOf(letter, searchI) != -1)
      }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {this.errorsLeft--}
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {return false} else {return true}
  }

  checkWinner() {
    if (this.secretWord === this.guessedLetters) {
      return true
    } else {return false}
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
