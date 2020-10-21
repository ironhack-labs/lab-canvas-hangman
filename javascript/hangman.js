class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    console.log(keyCode);
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.letters.push(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.includes(this.secretWord[i])) {
        return true;
      } else {
        return false;
      }
    }

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
    hangmanCanvas.createBoard();
    console.log(hangmanCanvas.secretWord);
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangmanCanvas.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key);
      console.log(hangman.guessedLetters, "good");
    } else {
      hangman.addWrongLetter(event.key);
      console.log(hangman.letters, "wrong");
    }
  } else {
    console.error('no una letra');
  }
});
