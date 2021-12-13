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
    // ... your code goes here
    return this.words[Math.floor(this.words.length * Math.random())];
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
      return false;
    }
    return true;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    }
    return true;
  }

  checkWinner() {
    // ... your code goes here
    const secretWordInArray = this.secretWord.split("");

    for (let i = 0; i < secretWordInArray.length; i += 1){
      if (this.guessedLetters.includes(secretWordInArray[i])) {
        return true;
      } else {
        return false;
      };
    };
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
  // ... your code goes here
  if (hangman.checkIfLetter(event.keyCode)) {
    console.log('é uma letra');
    if (hangman.secretWord.includes(event.key)) {
      const index = hangman.secretWord.indexOf(event.key);
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(index);
      if (hangman.checkWinner()) {
        hangmanCanvas.winner();
      }
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      if (hangman.checkGameOver()) {
        console.log('game over');
        hangmanCanvas.gameOver();
      }
    }
  }
});
