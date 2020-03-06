class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    console.log('pickword');
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    console.log('checkifletter');
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    console.log('checkclickedletters');
    if (this.letters.includes(letter)) {
      return false;
    } else {
      this.letters.push(letter);
      return true;
    }
  }

  addCorrectLetter(letter) {
    console.log('addcorrectletter');
    // ... your code goes here
    this.guessedLetters += letter;
    this.letters.pop();
    if (this.checkWinner()) {
      hangmanCanvas.winner();
    }
  }

  addWrongLetter(letter) {
    // ... your code goes here
    console.log('addwrongletter');
    this.errorsLeft -= 1;
    if (this.checkGameOver()) {
      hangmanCanvas.gameOver();
    }
  }

  checkGameOver() {
    console.log('checkgameover');
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    console.log('pickword')
    // ... your code goes here
    let sum = 0;
    this.secretWord.split('').forEach(letter => {
      if (this.guessedLetters.split('').includes(letter)) {
        sum += 1;
      }
    });
    if (sum === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
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

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key);
        hangman.secretWord.split('').forEach((item, idx) => {
          if (item === event.key) {
            hangmanCanvas.writeCorrectLetter(idx);
          }
        })
      } else {
        hangman.addWrongLetter(event.key);
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
    }
  }
});

