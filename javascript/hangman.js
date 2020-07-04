class Hangman {
  constructor(words) {
    this.words = words;
    if (typeof this.words === "undefined") {
      this.words = [];
      // this.words = ['hello', 'world', 'foo', 'bar'];
    } else if (this.words.length === 0) {
      this.words = [...words];
    } else {
      this.words = words.slice();
    }
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    //  console.log("code of key pressed inside checkIfLetter: " + keyCode + "KEY:  " + keyCode.length);
    // if (keyCode.length === 1) {
    let key = keyCode < 65 ? false : keyCode > 90 ? false : true;
    return key;
    // }
    // return false;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) == -1;
  }

  addClickedLetter(letter) {
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  addCorrectLetter(letter) {
    // this.addClickedLetter(letter);
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if (this.errorsLeft > 0) {
      this.errorsLeft--;
      this.addClickedLetter(letter);
    }
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
    //
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener("keydown", (event) => {
  console.log(`key=${event.key},code=${event.code}`);
  // console.log("inside key event listerenr" + hangman.secretWord);
  if (event.key.length === 1) {
    if (hangman.checkIfLetter(event.key)) {
      hangmanCanvas = new HangmanCanvas(hangman.secretWord);
      // hangmanCanvas.createBoard();
      // check if letter is in the secret word or not
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key);
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key));
        if (hangman.checkWinner()) {
          console.log(" WINNER  ");
          hangmanCanvas.winner();
        }
      } else {
        if (hangman.checkGameOver()) {
          console.log("  game over: ");
          hangmanCanvas.gameOver();
        } else {
          hangman.addWrongLetter(event.key);
          hangmanCanvas.drawHangman(hangman.errorsLeft);
          console.log(hangman.letters);
          hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
        }
      }
    }
  }
});
