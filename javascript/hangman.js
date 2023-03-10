class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = []; // all unique letters tried
    this.guessedLetters = ""; // the already found letters
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    const codes = [
      65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
      83, 84, 85, 86, 87, 88, 89, 90,
    ];
    return codes.includes(keyCode);
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    }
    this.letters.push(letter);
    return true;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
  }

  checkGameOver() {
    return !(this.errorsLeft > 0);
  }

  checkWinner() {
    return this.guessedLetters.length === [...new Set(this.secretWord)].length;
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById("start-game-button");

startGameButton &&
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
    console.log("secretWord", hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });

document.addEventListener("keydown", (event) => {
  if (hangman.checkIfLetter(event.keyCode)) {
    // WOOT: this is a [a-z] letter
    const letter = event.key;

    if (hangman.checkClickedLetters(letter)) {
      // New letter
      console.log("brand new letter guess");

      if (hangman.secretWord.includes(letter)) {
        // BINGO: letter is IN !
        hangman.addCorrectLetter(letter);

        // draw the correct letter
        hangmanCanvas.writeCorrectLetter(letter);

        if (hangman.checkWinner()) {
          hangmanCanvas.winner();
        }
      } else {
        // NOPE: wrong guess
        hangman.addWrongLetter(letter);
        hangmanCanvas.drawHangman(hangman.errorsLeft);

        // draw the wrong letter
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);

        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        }
      }
    } else {
      // Already tried letter
      console.log("you already tried this letter");
    }
  } else {
    console.log("not a letter");
  }
});
