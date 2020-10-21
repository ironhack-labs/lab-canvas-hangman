class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }
  pickWord() {
    let random = Math.floor(Math.random() * this.words.length);
    return this.words[random];
  }
  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90
  }
  checkClickedLetters(letter) {
    return !this.letters.includes(letter)
  }


  addCorrectLetter(letter) {
    // if (this.checkClickedLetters(letter) === true) {
    //   this.guessedLetter = letter
    // } else {
    //   this.guessedLetter + ""
    // }
  }



  addWrongLetter(letter) {
    // ... your code goes here
  }
  checkGameOver() {
    // ... your code goes here
  }
  checkWinner() {
    // ... your code goes here
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
