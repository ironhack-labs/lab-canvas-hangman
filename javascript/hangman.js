class Hangman {

  constructor(words) {
    this.words = words;
    if (typeof this.words === "undefined") {
      this.words = [];
      // this.words = ['hello', 'world', 'foo', 'bar'];
    } else if (this.words.length === 0) {
      this.words = [...words];
    } else {
      this.words = words.slice();
    }
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    let key = keyCode < 65 ? false : keyCode > 90 ? false : true;
    return key;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) == -1;
  }

  addClickedLetter(letter) {
    this.letters.push(letter);
  }

  addCorrectLetter(letter) {
    this.addClickedLetter(letter);
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.addClickedLetter(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let returnValue = true;
    [...this.secretWord].forEach(
      (letter) =>
      (returnValue = returnValue && this.guessedLetters.indexOf(letter) != -1)
    );
    return returnValue;
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
    hangmanCanvas.createBoard();

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});