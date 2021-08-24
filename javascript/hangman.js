class Hangman {
  constructor(words) {
    this.words = words;
  }

  secretWord = "whack";
  letters = ["a", "b", "c"];
  guessedLetters = "";
  errorsLeft = 10;

  lettersLeft = "whack";

  pickWord() {
    const idx = Math.floor(Math.random() * (this.words.length - 0) + 0);
    this.secretWord = this.words[idx];
    this.lettersLeft = this.secretWord;
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    if (typeof keyCode === "number") {
      if (keyCode > 64 && keyCode < 91) {
        this.checkClickedLetters(keyCode);
        // return true;
      }
      console.log("this is not a valid letter");
      // return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      // return false;
    } else {
      this.letters.push(letter);
      // return true;
    }
  }

  addCorrectLetter(letter) {
    for (let i = 0; i < this.lettersLeft.length; i++) {
      const currentLetter = this.lettersLeft[i];

      if (currentLetter === letter) {
        console.log(currentLetter);
        this.guessedLetters += letter;
        this.lettersLeft = this.lettersLeft.replace(currentLetter, "");
        i--;
      }
    }
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft = this.errorsLeft - 1;
    console.log("tries remaining:", this.errorsLeft);
    if (this.checkGameOver()) {
      console.log("loser!");
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetters.length ? true : false;
  }
}

let hangman;

hangman = new Hangman([
  "node",
  "javascript",
  "react",
  "miami",
  "paris",
  "amsterdam",
  "lisboa",
]);

// hangman.pickWord();
// console.log(hangman.secretWord);
// hangman.addCorrectLetter("e");

//hippopotamus

hangman.addCorrectLetter("h");
hangman.addCorrectLetter("i");
hangman.addCorrectLetter("p");
hangman.addCorrectLetter("o");
hangman.addCorrectLetter("t");
hangman.addCorrectLetter("a");
hangman.addCorrectLetter("m");
hangman.addCorrectLetter("u");
hangman.addCorrectLetter("s");

// const startGameButton = document.getElementById("start-game-button");

// if (startGameButton) {
//   startGameButton.addEventListener("click", (event) => {
//     hangman = new Hangman([
//       "node",
//       "javascript",
//       "react",
//       "miami",
//       "paris",
//       "amsterdam",
//       "lisboa",
//     ]);

// HINT (uncomment when start working on the canvas portion of the lab)
// hangman.secretWord = hangman.pickWord();
// hangmanCanvas = new HangmanCanvas(hangman.secretWord);

// ... your code goes here
// });
// }

// document.addEventListener("keydown", (event) => {
// React to user pressing a key
// ... your code goes here
// });
