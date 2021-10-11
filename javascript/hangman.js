class Hangman {
  constructor(words) {
    this.words = words; // array
    this.secreWord = this.pickWord; // random secret word to guess by the user
    this.letters = []; // array to store the letters that the user has already picked
    this.guessedLetters = ''; // store letters user chose and guess
    this.errorsLeft = 10;
  }

  pickWord() {
    debugger
    // random word from words
    return this.words[Math.floor(Math.random() * this.words.length)];
    // if(typeof secret === 'string') {
    //   return secret;
    // } return undefined;
  }

  checkIfLetter(keyCode) { //event.keyCode
    return keyCode >=65 && keyCode <= 90 
    ? true //true if the keyCode corresponds to a character from a-z
    : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter) // it's not included
    ? true // a letter not passed yet --> true
    : false;
  }

  addCorrectLetter(letter) {
    // array with the letters that are contained in the secret word
    let checkLetter = this.secretWord.split('').filter(item => item === letter);
    console.log(checkLetter);
    this.guessedLetters += checkLetter;
    if (this.guessedLetters.length === this.secreWord.length) {
      return;
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0
    ? false //If the number of errors is greater than 0, the game continues
    : true; // tha game is over, no errors left --> 0 left
  }

  checkWinner() {
    // 'node'.split('').sort() -->['d', 'e', 'n', 'o']
    //'node'.split('').sort().join('') --> 'deno'
    const secretSorted = this.secretWord.split('').sort().join('');
    const guessedSorted = this.guessedLetters.split('').sort().join('');
    return secretSorted === guessedSorted ? true : false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    console.log(hangman);
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();

    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
