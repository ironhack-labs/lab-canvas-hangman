class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[0];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10
  }

  pickWord() {
    // ... your code goes here
    let randomIdex = Math.floor(Math.random() * (this.words.length))
    return this.secretWord = this.words[randomIdex];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return (keyCode < 91 && keyCode > 64 ? true : false)
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return (this.letters.includes(letter) ? false : true)
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
    this.checkWinner()
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    if (this.letters.includes(letter)) {
      return true;
    } else {
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    // ... your code goes here
    return (this.errorsLeft > 0 ? false : true)
  }

  checkWinner() {
    // ... your code goes here
    let sword = [...this.secretWord].sort()
    let gword = [...this.guessedLetters].sort()

    if (sword.length !== gword.length) {
      return false
    } else {
      for (let i=0; i<sword.length; i++) {
        if (sword[i] === gword[i]) {
          return true
        } else {
          return false
        }
      }
    }
  } 
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.secretWord.includes(event.key)) {
    let index = hangman.secretWord.indexOf(event.key);
    hangmanCanvas.writeCorrectLetter(index);
  } else {
    hangman.addWrongLetter();
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
    hangmanCanvas.drawHangman(hangman.errorsLeft)
  }
});

