class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.guessedLetters = [];
    this.errorsLeft = 10;
    this.secretWord;
    this.trys = [];
  }

  pickWord() {
   this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
   return this.secretWord.toUpperCase();
  }

  checkIfLetter(keyCode) {
    return (/[a-z]/).test(keyCode);
  }

  checkClickedLetters(letter) {

    return alreadyPressed !== -(this.trys.length) ? true : false
  }

  addCorrectLetter(letter) {
    const arrWord = this.secretWord.split('');
    let verifier = false;
    arrWord.forEach( arrLetter => {
      if(arrLetter === letter){ verifier = true;}
    });
    return verifier
  }

  addWrongLetter(letter) {
    const arrWord = this.secretWord.split('');
    let verifier = true;
    arrWord.forEach( arrLetter => {
      if(arrLetter !== letter){ verifier = false;}
    });
    return verifier
  }

  checkGameOver() {
    const validation = this.trys.length > this.errorsLeft ? true : false
    return validation
  }

  checkWinner() {
    const validation = this.guessedLetters === this.secretWord.length ? true : false
    return validation
  }
}

/* let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGsameButton) {
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
}); */