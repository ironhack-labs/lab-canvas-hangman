class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.letters = [];
    this.errorsLeft = 10;
    this.guessedLetters = "";
  }

  pickWord() {
    let randomPos = Math.floor(Math.random() * this.words.length);
    // console.log(randomPos)
    // console.log(this.words[randomPos])
    return this.words[randomPos];
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
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
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters = this.guessedLetters + letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft = this.errorsLeft - 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true
    }
  }

  checkWinner() {
    if (this.secretWord.length == this.guessedLetters.length) {
      return true;
    } else {
      return false
    }
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", event => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa"
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener("keydown", event => {
  // if (checkIfLetter(event.keyCode) == true) {
  // }
  // React to user pressing a key
  // ... your code goes here
});
