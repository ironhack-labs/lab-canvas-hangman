class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    const wordChosen = this.words[Math.floor(this.words.length * Math.random())];
    return wordChosen;
  }

  checkIfLetter(keyCode) {
    this.keyCode = keyCode;
    if (this.keyCode >= 65 && this.keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    this.letter = letter;
    const alreadyPressed = () => {
      if (this.letters.includes(this.letter)) {
        return false;
      }
      return true;
    };
    return alreadyPressed();
  }

  addCorrectLetter(letter) {
    this.letter = letter;
    this.guessedLetters += this.letter;
    return this.guessedLetters;
  }

  addWrongLetter(letter) {
    this.letter = letter;
    this.errorsLeft -= 1;
    this.letters.push(this.letter);
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    }
    return true;
  }

  checkWinner() {
    const wordArray = this.secretWord.split('');
    let count = 0;

    for (let i = 0; i < wordArray.length; i++) {
      if (this.guessedLetters.includes(wordArray[i])) {
        count += 1;
      }
    }

    if (wordArray.length === count) {
      return true;
    }
    return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
