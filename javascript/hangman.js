class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

  }

  pickWord() {
    let random = this.words[Math.floor(Math.random() * this.words.length)]
    this.secretWord = random;
    return random;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ? true : false;
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false : true;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
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
    hangman.pickWord();

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.checkClickedLetters(event.key)) {
      hangman.letters.push(event.key);
    }


    console.log(hangman.letters)
    // React to user pressing a key
    // ... your code goes here
  }

}
)
  ;


