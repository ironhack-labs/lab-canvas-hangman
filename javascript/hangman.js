class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.guessedLetters = [];
    this.errorsLeft = 10;
    this.secretWord;
    this.trys = ['a','b','c'];
  }

  pickWord() {
   this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
   return this.secretWord.toUpperCase();
  }

  checkIfLetter(keyCode) {
    return (/[a-z]/).test(keyCode);
  }

  checkClickedLetters(letter) {
    let alreadyPressed = this.trys.map( validation => validation.indexOf(letter)).reduce((sum, cb) => sum + cb,0);
    return alreadyPressed !== -(this.trys.length) ? true : false
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

/* let hangman;

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
}); */

let teste = new Hangman(['oi', 'teste']);
console.log(teste.checkClickedLetters('a'))