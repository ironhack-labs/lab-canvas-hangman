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
    let key = keyCode < 65 ? false : keyCode > 90 ? false : true;
    return key;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) == -1;
  }

  addClickedLetter(letter) {
    this.letters.push(letter);
  }

  addCorrectLetter(letter) {
    this.addClickedLetter(letter);
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.addClickedLetter(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let returnValue = true;
    [...this.secretWord].forEach(
      (letter) =>
        (returnValue = returnValue && this.guessedLetters.indexOf(letter) != -1)
    );
    return returnValue;
  }
}

let hangman;
let hangmanCanvas;
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
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}
document.addEventListener("keydown", (event) => {
  if (
    hangman.checkIfLetter(event.keyCode) &&
    hangman.checkClickedLetters(event.key)
  ) {
    if (hangman.secretWord.indexOf(event.key) != -1) {
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
    if (hangman.checkGameOver()) {
      hangmanCanvas.gameOver();
    } else if (hangman.checkWinner()) {
      hangmanCanvas.winner();
    }
  }
}
);
