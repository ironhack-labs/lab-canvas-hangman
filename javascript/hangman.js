class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }




  pickWord() {
    let number = Math.floor(Math.random() * this.words.length)
    return this.words[number]
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) { return true }
    else { return false }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) { return false }
    else { return true }
  }

  addCorrectLetter(letter) {
    return this.guessedLetters = letter + this.guessedLetters
  }

  addWrongLetter(letter) {

    if (this.letters.includes(letter)) { }
    else {
      this.letters.push(letter)
      return this.errorsLeft = this.errorsLeft - 1
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) { return false }
    else { return true }
  }

  checkWinner() {
    let newGuessedLetters = this.guessedLetters.split('')
    let newSecretWord = this.secretWord.split('')
    for (let i = 0; i < newGuessedLetters.length; i++) {
      if (!newGuessedLetters.includes(newSecretWord[i])) { return false } // if it does NOT include
    }
    return true
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
