class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord;
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = Math.floor(Math.random() * this.words.length);
    return this.words[randomWord];
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
      this.letters.push(letter);
      return true;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (!this.guessedLetters.includes(this.secretWord[i])) {
        return false;
      }
    }
    return true;
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
    hangman.secretWord = hangman.pickWord();
    console.log(hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    document.addEventListener("keydown", playGame);
  });
}

const playGame = (event) => {
  if (!hangman) return;

  const { key: letter, keyCode } = event;

  if (!hangman.checkIfLetter(keyCode)) {
    console.log("not a letter, try again");
    return;
  }

  if (!hangman.checkClickedLetters(letter)) {
    console.log("You already tried that letter.");
    return;
  }

  if (!hangman.secretWord.includes(letter)) {
    console.log("Not part of the word!");
    hangman.addWrongLetter(letter);
    hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);

    if (hangman.checkGameOver()) {
      console.log("Game Over");
      document.removeEventListener("keydown", playGame);
      return;
    }
  }

  hangmanCanvas.writeCorrectLetter(letter);

  if (hangman.addCorrectLetter(letter)) {
    console.log("You Win!");
    document.removeEventListener("keydown", playGame);
  }
};