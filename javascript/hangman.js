class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;

  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    }
    return false
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) === -1) {
      return true;
    }
    return false;
  }

  addCorrectLetter(letter) {
    this.secretWord.includes(this.letters) ? this.guessedLetters += letter : this.guessedLetters
  }

  addWrongLetter(letter) {
    if (this.letters.indexOf(letter) === -1) {
      this.errorsLeft--
      this.letters.push(letter)

    }
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1) {
        return false;
      }
      return true;
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
    console.log('startbutton works')
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.key) || hangman.checkClickedLetters(event.key)) {
    if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key))
    } else {
      hangman.addWrongLetter(event.key)
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
      if (hangman.checkGameOver()) {
        alert("You hang!")
      }
    }
  }
});