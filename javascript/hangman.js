class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord(); //returs a random strring of lettterrs
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

    return this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1 //should subtract one from the variable errorsLeft.
    if (!this.letters.includes(letter)) { //It also should push this letter in the array of letters if the letter is not there already.
      this.letters.push(letter)
    }

  }
  checkGameOver() {
    // ... your code goes here
    return !this.errorsLeft > 0;
  }
  //a method that should check if the user won and return the corresponding boolean value.
  checkWinner() {
    // ... your code goes here
    return !this.guessedLetters === this.secretWord
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
