class Hangman {
  constructor(words) {
    this.words = words;
    //Iteration 1: The game logic
    //Hangman Class
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }
  //The Hangman methods
  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode < 65 && keyCode > 90 ? false : true;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) == -1;
  }

  addCorrectLetter(letter) {
    if (!this.guessedLetters.includes(letter)) this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) this.errorsLeft--;
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

startGameButton.addEventListener("click", (event) => {
  hangman = new Hangman([
    "node",
    "javascript",
    "react",
    "miami",
    "paris",
    "amsterdam",
    "lisboa"
  ]);
  hangman.secretWord = hangman.pickWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
});

document.addEventListener("keydown", (event) => {
  const keyCode = event.keyCode;
  const keyLetter = event.key;

  if (
    hangman.checkIfLetter(keyCode) &&
    hangman.checkClickedLetters(keyLetter)
  ) {
    if (hangman.secretWord.includes(keyLetter)) {
      hangman.addCorrectLetter(keyLetter);
      [...hangman.secretWord].forEach((letter, index) => {
        if (letter === keyLetter) hangmanCanvas.writeCorrectLetter(index);
      });
    } else {
      hangman.addWrongLetter(keyLetter);
      hangmanCanvas.writeWrongLetter(keyLetter, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
    if (hangman.checkGameOver()) {
      hangmanCanvas.gameOver();
    } else if (hangman.checkWinner()) hangmanCanvas.winner();
  }
});
