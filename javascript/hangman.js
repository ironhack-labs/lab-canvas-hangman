class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90) return true
    return false
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return false === this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
    if (false === this.letters.includes(letter)) this.letters.push(letter)
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft === 0) return true;
    return false
  }

  checkWinner() {
    // ... your code goes here
    if (this.secretWord.length === this.guessedLetters.length) return true;
    return false
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    console.log(hangman.secretWord)

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key keycode.info
  if (hangman.checkIfLetter(event.which)) {
    if(hangman.checkClickedLetters(event.key)) {
      if (hangmanCanvas.writeCorrectLetter(event.key)) {
        hangman.addCorrectLetter(event.key)
      } else {
        hangman.addWrongLetter(event.key)
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
      }
    }
  }

  console.log(hangman.guessedLetters)
  if (hangman.checkGameOver()) hangmanCanvas.gameOver();
  if (hangman.checkWinner()) hangmanCanvas.winner();


});
