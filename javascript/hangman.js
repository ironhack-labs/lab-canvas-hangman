class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    const random = Math.floor(Math.random() * this.words.length);
    return this.words[random];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false
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
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft === 0) {
      return true;
    }
    return false;
  }

  checkWinner() {
    // ... your code goes here
    for (let i = 0; i < this.guessedLetters.length; i++) {
      if (!this.secretWord.includes(this.guessedLetters[i])) {
        return false;
      }
    }
    return true;
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

    // ... your code goes here
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your cofde goes here
  // hangmanCanvas.writeCorrectLetter(event.keyCode);
  const key = event.keyCode;
  console.log(key);
  const letter = String.fromCharCode(key).toLowerCase()
  console.log(letter);
  if (hangman.checkIfLetter(key)) {
    if (hangman.checkClickedLetters(letter)) {
      if (hangman.secretWord.includes(letter)) {
        hangman.addCorrectLetter();
        for (let i = 0; i < hangman.secretWord.length; i++) {
          // if (this.guessedLetters.includes(hangman.secretWord[i])){
          //   hangmanCanvas.writeCorrectLetter(i);
          if (hangman.secretWord[i] === letter) {
            console.log(hangman.secretWord[i]);
            hangmanCanvas.writeCorrectLetter(i);
          }
        }
      } else {
        if (!hangman.secretWord.includes(letter)) {
          hangman.addWrongLetter(letter);
          hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
        }
      }
    };
  }
});