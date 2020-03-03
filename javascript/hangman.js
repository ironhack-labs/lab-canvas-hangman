class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode > 64 && keyCode < 91) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
    if (this.guessedLetters === this.secretWord) {
      console.log("you won");
    }
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if (this.checkClickedLetters(letter)) {
      this.errorsLeft -= 1;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    // if (this.guessedLetters.length === this.secretWord.length) {
    //   return true;
    // } else {
    //   return false;
    // }
    if (
      this.guessedLetters
      .split("")
      .sort()
      .join("") ===
      this.secretWord
      .split("")
      .sort()
      .join("")
    ) {
      return true;
    } else {
      return false;
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
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener("keydown", event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.checkIfLetter(event.which) && hangman.checkClickedLetters(event.key)) {
    if (hangman.secretWord.includes(event.key)) {
      // add it to correct letter
      let idx = hangman.secretWord.indexOf(event.key);
      console.log("outPut: idx", idx)
      // let idx1 = hangman.secretWord.lastIndexOf(event.key);
      // console.log("outPut: idx1", idx1)
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(idx);
      hangmanCanvas.winner();
    } else {
      hangmanCanvas.gameOver();
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }
});