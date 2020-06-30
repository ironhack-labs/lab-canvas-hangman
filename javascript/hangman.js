class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.secretWord = this.pickWord();
    this.guessedLetters = '';
    this.errorsLeft = 10;
    this.pickWord();
  }

  pickWord() {
  let randomNumber = Math.floor((Math.random() * this.words.length));
  return this.secretWord = this.words[randomNumber];
  }

  checkIfLetter(keyCode) {
  if (keyCode > 64 && keyCode < 91){
    return true;
  } else {
    return false;
  };
  }

  checkClickedLetters(letter){
  if (this.letters.indexOf('letter') < 0){
    return false;
  } else {
    return true;
  };
  }

  addCorrectLetter(letter) {
  this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
  this.errorsLeft--;
  this.letters.push('letter');//only if is not already there!!
  }

  checkGameOver() {
  if (this.errorsLeft > 0){
    return false;
  } else {
    return true;
  }
  }

  checkWinner() {
  let guessed = this.guessedLetters.split().sort();
  let secret = this.secretWord.split().sort();
  let win = 0;
  for (let i = 0; i < this.secretWord.length; i++) {
    if (secret[i]===guessed[i]){
      win++;
    } else {
      return false;
      break;
    };
  };
    if (win === this.secretWord.length){
      return true;
    } else {
      return false;
    };
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
