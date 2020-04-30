class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomNum = Math.floor(Math.random() * (this.words.length));
    return this.secretWord = this.words[randomNum];
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) < 0) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (this.letters.indexOf(letter) < 0) {
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (!this.guessedLetters.includes(this.secretWord[i])) {
        return false;
      }
      return true;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {//if para garantir que existe elemento startGamesButton
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // ... your code goes here
    hangmanCanvas.createBoard();

  });
}

document.addEventListener('keydown', event => { //keydown - pulsa el teclado
  // React to user pressing a key
  if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)) {
    if (hangman.secretWord.indexOf(event.key) >= 0) {
      hangman.addCorrectLetter(event.key);
      [...hangman.secretWord].forEach((letter, idx) => {
        if (letter === event.key) {
          hangmanCanvas.writeCorrectLetter(idx);
        }
      });
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
    }
  }

});
