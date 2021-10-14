class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

    // ... your code goes here
  }

  // Math.floor rounds down number
  // 10 * 0.56 = 5.6 ===>> 5
  pickWord() {
    let pickedWord = this.words[Math.floor(Math.random() * this.words.length)];
    return pickedWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    }
    return false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)

  }



  addCorrectLetter(letter) {
    this.guessedLetters += letter
    this.checkWinner()

  }

  addWrongLetter(letter) {

    if (!this.letters.includes(letter)) {
      this.letters.push(letter)
    }
    this.errorsLeft--
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    }
    return true
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();

    console.log(hangman.secretWord)
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  const letter = event.key;
  if (!hangman.checkIfLetter(event.keyCode)) {
    return
  }

  if (hangman.secretWord.includes(letter)) {
    hangman.addCorrectLetter(letter)
    for (let i = 0; i < hangman.secretWord.length; i++) {
      if (hangman.secretWord[i] === letter) {
        hangmanCanvas.writeCorrectLetter(i)
      }
    }
  }
  else {
    if (!hangman.letters.includes(letter)) {
      hangman.addWrongLetter(letter)
      hangmanCanvas.writeWrongLetter(letter, 10 - hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
    }
  }

  if(hangman.checkGameOver()) {

    alert('Game Over!!')

   
  }

});
