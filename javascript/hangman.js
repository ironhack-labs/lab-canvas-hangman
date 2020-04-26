class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    //We use Math.floor so that the number is never less than 0 or greater than the length of the array
    let randomNumber = Math.floor(Math.random() * this.words.length)
    return this.words[randomNumber]
  }

  checkIfLetter(keyCode) {
    //Only works if keycode its between 65 (a) and 90 (z)
    return keyCode > 64 && keyCode < 91 ? true : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.letters.push(letter);
  }
  addWrongLetter(letter) {
    if (this.checkClickedLetters(letter)) {
      --this.errorsLeft;
    }
    this.letters.push(letter);
  }


  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    let control = 0;
    //Using forEach, we check that each letter of letterByLetter is included in guessedLetters
    //If its true, we increased control by 1
    /* console.log(this.guessedLetters);
    console.log(this.secretWord); */
    this.letterByLetter.forEach(e => {
      if (this.guessedLetters.includes([e])) {
        control += 1
      }
    })
    //If control its the same as secretWord.length, the player has won.
    return control === this.secretWord.length ? true : false;
  }
}


let hangman;

const startGameButton = document.getElementById('start-game-button');


if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.letterByLetter = [...hangman.secretWord]
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  console.log(hangman.letterByLetter);
  let key;

  if (hangman.checkIfLetter(event.keyCode)) {
    key = event.key.toLowerCase()
  }


  if (hangman.letterByLetter.includes(key) && hangman.checkClickedLetters(key)) {
    hangmanCanvas.writeCorrectLetter(key);
    hangman.addCorrectLetter(key);
    if (hangman.checkWinner()) {
      hangmanCanvas.winner()
    }
  } else {
    if (hangman.checkClickedLetters(key)) {
      hangman.addWrongLetter(key);
      hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }
});
