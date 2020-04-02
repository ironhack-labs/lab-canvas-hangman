class Hangman {
  constructor(words) {
  this.words = words
  // ... your code goes here
  this.secretWord = this.pickWord()
  this.letters = []
  this.guessedLetters = ‘’
  this.errorsLeft = 10
  }
  pickWord() {
  return this.words[Math.floor(Math.random() * this.words.length)]
  // ... your code goes here
  }
  checkIfLetter(keyCode) {
  if (keyCode > 64 && keyCode < 91) return true
  else return false
  // ... your code goes here
  }
  checkClickedLetters(letter) {
  if (this.letters.includes(letter)) return false
  else return true
  // ... your code goes here
  }
  addCorrectLetter(letter) {
  // ... your code goes here
  this.guessedLetters += letter
  }
  addWrongLetter(letter) {
  // ... your code goes here
  this.errorsLeft -= 1
  }
  checkGameOver() {
  // ... your code goes here
  if (this.errorsLeft === 0) return true
  else return false
  }
  checkWinner() {
    function filtraPalabra(palabra) {
      return palabra
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .filter((item, pos, self) => self.indexOf(item) == pos)
        .join('');
    }
    if (filtraPalabra(this.guessedLetters) === filtraPalabra(this.secretWord)) {
      return true;
    } else return false;
  }
}
let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
