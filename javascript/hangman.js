class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[Math.floor(Math.random() * words.length)];
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;

  }

  pickWord() {
    return this.secretWord.toString()
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ? true : false
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false : true
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1

    if (!this.letters.includes(letter)) {
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true
  }

  checkWinner() {
    return this.guessedLetters === this.secretWord ? true : false
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
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here

  if (hangman.checkIfLetter(event.keyCode)) {
    hangman.letters += event.key

    if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key)
      hangmanCanvas.writeCorrectLetter(event.key)
    }

    console.log(hangman.guessedLetters)
  }
});