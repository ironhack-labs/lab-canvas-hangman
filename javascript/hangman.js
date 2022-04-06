class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    const randomWord = this.words[Math.floor(Math.random() * this.words.length)];
    return randomWord;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90) return true;
    return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if(this.checkClickedLetters(letter)){
      this.errorsLeft -= 1;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    // ... your code goes here
    return this.secretWord.split('').every(letter => this.guessedLetters.includes(letter));
  }
}

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if(hangman.checkIfLetter(event.keyCode)){
    if(hangman.secretWord.includes(event.key)){
      const index = hangman.secretWord.indexOf(event.key);
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(index);
      if(hangman.checkWinner()){
        hangmanCanvas.winner();
      }
    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      if(hangman.checkGameOver()){
        hangmanCanvas.gameOver();
      }
    }
  }
});