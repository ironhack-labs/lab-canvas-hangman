class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = []; // all unique letters tried
    this.guessedLetters = ''; // the already found letters
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    const rand = Math.floor(Math.random()*this.words.length);
    return this.words[rand];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    const codes = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
    
    if (codes.includes(keyCode)) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      // already present
      return false;
    } else {
      // not already present
      this.letters.push(letter);
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
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
    if (this.guessedLetters.length === [...new Set(this.secretWord)].length) {
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

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log("je fonctionne");
    console.log(hangmanCanvas);
    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event.key)

  if (hangman.checkIfLetter(event.keyCode)) {
    // WOOT: this is a [a-z] letter
    const letter = event.key;

    if (hangman.checkClickedLetters(letter)) {
      // New letter
      console.log('brand new letter guess')

      if (hangman.secretWord.includes(letter)) {
        // BINGO: letter is IN !
        hangman.addCorrectLetter(letter)

        // draw the correct letter
        hangmanCanvas.writeCorrectLetter(letter);

        if (hangman.checkWinner()) {
          hangmanCanvas.winner()
        }
      } else {
        // NOPE: wrong guess
        hangman.addWrongLetter(letter)
        hangmanCanvas.drawHangman(hangman.errorsLeft)

        // draw the wrong letter
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft)

        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver()
        }
      }

    } else {
      // Already tried letter
      console.log('you already tried this letter')
    }

  } else {
    console.log('not a letter')
  }
});
