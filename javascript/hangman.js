class Hangman {
  constructor(words) {
    // ... your code goes here
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
  }

  pickWord() {
    // ... your code goes here
    const word = this.words[Math.floor(Math.random()*this.words.length)];
    return word;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here

    if(keyCode >= 65 && keyCode <= 90){
      return true;
    } return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return this.letters.indexOf(letter) == -1;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    console.log("letters missing: " + this.errorsLeft);
    this.addClickedLetter(letter);
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft === 0;
  }

  checkWinner() {
    // ... your code goes here
    let returnValue = true;
    [...this.secretWord].forEach(
      (letter) =>
        (returnValue = returnValue && this.guessedLetters.indexOf(letter) != -1)
    );
    return returnValue;
    
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // ... your code goes here
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)) {
    if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(event.key);
      if (hangman.checkWinner()) hangmanCanvas.winner();
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      if (hangman.checkGameOver()) hangmanCanvas.gameOver();
    }
  }
});
