class Hangman {
  constructor(words) {
    this.words = words; // array of words
    this.secretWord = this.pickWord(); // method that picks a random word from the words array that's passed in
    this.letters = []; // an array of letters that have been guessed. Empty at start.
    this.guessedLetters = ""; // empty string for letters that users have guessed correctly
    this.errorsLeft = 10; // number of lines the user has left before hangman is built
  }

  // Select random word from the array

  pickWord() {
    let randomSecretWord =
      this.words[Math.floor(Math.random() * this.words.length)];
    return randomSecretWord;
  }

  // Force the user to choose between a-z

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  // Check that the letter that's being evaluated has already been used by checking the letters array. If it's in there, return false.

  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  // add a correctly guessed letter to the letter string. We can use += to add it

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  // when a letter is guessed incorrectly, we reduce the number of lives/errors by one.

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
  }

  // end the game if there are no lives/errors left

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  // check if the user won or not.

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) == -1) {
        return false
      } else {
        continue
      }
    }
    return true
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

    console.log(hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener("keydown", (event) => {
  const letter = event.key;

  // Check if the leter is already in our letters array. If not, then return.

  if (!hangman.checkIfLetter(event.keyCode)) {
    console.log("not a letter, pick again please.");
    return;
  }

  // check if letter has already been used

  if (hangman.letters.includes(letter)) {
    console.log("letter already tried");
    return;
  }

  // Check if secret words contains letter. If secret word does include (returns true), then we need to write the correct letter in the correct place.

  if (hangman.secretWord.includes(letter)) {
    hangman.addCorrectLetter(letter);
    for (let i = 0; i < hangman.secretWord.length; i++) {
      if (hangman.secretWord[i] === letter) {
        hangmanCanvas.writeCorrectLetter(i);
      }
    }
    hangman.letters.push(letter);
  } else {
    if (!hangman.letters.includes(letter)) {
      hangman.addWrongLetter(letter);
      hangmanCanvas.writeWrongLetter(letter, 10 - hangman.errorsLeft);
      hangman.letters.push(letter);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }

  if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }

  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  }
});
