class Hangman {
  constructor(words) {
    this.words = [...words];
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord(words) {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)];
    let randomWordIndex = randomWord;
    return `${randomWordIndex}`;
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if(keyCode < 91 && keyCode > 64) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }

  checkClickedLetters(letter) {
   let uniqueArray = [...this.letters];

    for(let i= 0; i < uniqueArray.length; i++) {
      let index = uniqueArray.indexOf(uniqueArray[i]);
      if(index < 0) {
        uniqueArray.push(uniqueArray[i])
      }
    }
    if(uniqueArray.includes(letter)) {
      return false;
    } else{
      return true;
    }
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner();
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }

  checkWinner() {
    if(this.guessedLetters === this.secretWord) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
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
  });
}

document.addEventListener('keydown', event => {
checkIfLetter(event.keyCode);
  // React to user pressing a key
  // ... your code goes here
});
