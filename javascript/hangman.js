class Hangman {
  
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    if(keyCode < 65 || keyCode > 90) {
      return false
    } else {
      return true
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    return this.errorsLeft -= 1
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    for(let i = 0; i < this.secretWord.length; i++) {
      if(this.guessedLetters.indexOf(this.secretWord[i]) === -1) {
        return false
      } else {
        return true
      }
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
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  const letter = event.key;
  if(hangman.letters.includes(letter)) {
    console.log('Ya se usó esa letra')
  };
  if(hangman.secretWord.includes(letter)) {
    hangman.addCorrectLetter(letter);
    for(let i = 0; i < hangman.secretWord.length; i++) {
      if (hangman.secretWord[i] === letter) {
        hangmanCanvas.writeCorrectLetter(i);
        console.log(hangman.secretWord[i]);
      }
    }
    hangman.letters.push(letter);
    console.log(hangman.letters);
  } else {
    if(!hangman.secretWord.includes(letter)) {
      hangman.addWrongLetter(letter)
      console.log(letter);
      hangman.letters.push(letter);
      console.log(hangman.letters);
      hangmanCanvas.writeWrongLetter
    }
  }
});
