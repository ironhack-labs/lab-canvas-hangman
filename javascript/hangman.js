class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
      // if !this.letters.includes(letter) return true
      // in this case true = not picked yet
    }
  }



  addCorrectLetter(letter) {
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)) {
      return this.letters.push(letter);
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
    if (this.secretWord.split('').sort().join('') === this.guessedLetters.split('').sort().join('')) {
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
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key

  if (hangman.checkIfLetter(event.keyCode)) {

    console.log(event.key)
    console.log(hangman.secretWord.includes(event.key))

    // if (hangman.checkClickedLetters(event.key) && !!~hangman.secretWord.indexOf(event.key)) {
    if (hangman.secretWord.includes(event.key)) {
      console.log("here")
      hangman.addCorrectLetter(event.key);
      let posInStr = hangman.secretWord.indexOf(event.key);
      hangmanCanvas.writeCorrectLetter(posInStr);

      // second position in string
      // call the function again, if a letter appear in the string more than once 
      posInStr = hangman.secretWord.indexOf(event.key, hangman.secretWord.indexOf(event.key) + 1);
      console.log(posInStr)
      hangmanCanvas.writeCorrectLetter(posInStr);


    } else {
      if (hangman.checkClickedLetters(event.key)) {
        hangman.addWrongLetter(event.key);
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
    }

  } else {
    window.alert('Invalid character! Remember that valid characters include a-z');
  }
});


