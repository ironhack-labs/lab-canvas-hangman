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
    return keyCode >= 65 && keyCode <= 90;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) === -1;
  }

  addCorrectLetter(letter) {
    this.letters.push(letter);
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    let status = false;
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1) {
        status = false;
        break;
      } else {
        status = true;
      }
    }
    return status;
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  if (!hangman.checkGameOver() && !hangman.checkWinner()) {
    if (hangman.checkIfLetter(event.keyCode)) {
      if (hangman.checkClickedLetters(event.key)) {
        if (hangman.secretWord.indexOf(event.key) === -1) {
          hangman.addWrongLetter(event.key);
          console.log(hangman.errorsLeft);
          hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
          if (hangman.checkGameOver()) {
            hangmanCanvas.gameOver();
          }
        } else {
          hangman.addCorrectLetter(event.key);
          for (let i = 0; i < hangman.secretWord.length; i++) {
            if (hangman.secretWord[i].toLowerCase() === event.key) {
              hangmanCanvas.writeCorrectLetter(i);
            }
          }
          if (hangman.checkWinner()) {
            hangmanCanvas.winner();
          }
        }
      } else {
        alert(`Letter ${event.key} has already been chosen, pick another one!`);
      }
    }
  }
});
