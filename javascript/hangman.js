class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = words[Math.floor(Math.random() * words.length)];
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode > 61 && keyCode < 91) {
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
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
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
    let newSecretWord = this.secretWord.split("").sort().join(",");
    let newGuessedLetters = this.guessedLetters.split("").sort().join(",");

    if (newSecretWord === newGuessedLetters) {
      return true;
    } else {
      return false;
    }
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

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here
  let letter = event.key;
  let keyCode = event.keyCode;
  console.log(letter);
  let index = hangman.secretWord.indexOf(letter);
  let errorsLeft = hangman.errorsLeft;

  //1st check if letter is valid
  if (hangman.checkIfLetter(keyCode) && hangman.secretWord.includes(letter)) {
    hangman.addCorrectLetter(letter);
    hangmanCanvas.writeCorrectLetter(index);
    if (hangman.checkWinner()) {
      hangmanCanvas.winner();
    }
  } else if (
    hangman.checkIfLetter(keyCode) &&
    !hangman.secretWord.includes(letter)
  ) {
    hangman.addWrongLetter(letter);
    hangmanCanvas.writeWrongLetter(letter, errorsLeft);
    if (hangman.checkGameOver()) {
      hangmanCanvas.gameOver();
    }
  } else if (
    hangman.checkIfLetter(keyCode) &&
    !hangman.secretWord.includes(letter) &&
    hangman.letters.includes(letter)
  ) {
    alert("You've already tried that letter, try another!");
  } else if (!hangman.checkIfLetter) {
    alert("Please choose a valid character!");
  }
});

//then check if correct

//then if correct => addCorrectLetter - writeCorrectLetter - checkWinner

//if notCorrect => addWrongLetter - writeWrongletter - checkGameOver
