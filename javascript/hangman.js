class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length )];
  }

  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90) ? true : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    if(!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    if(this.checkClickedLetters) {
      this.letters.push(letter);
    }
    this.errorsLeft--;
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    // ... your code goes here
    return true;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard();

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(hangman.secretWord);
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)) {
    let indexes = [];
    if(hangman.secretWord.includes(event.key)) {
      let firstIndex = hangman.secretWord.indexOf(event.key);
      indexes.push(firstIndex);
      if(hangman.secretWord.includes(event.key, firstIndex + 1)) {
        indexes.push(hangman.secretWord.indexOf(event.key, firstIndex + 1));
      }

      console.log(indexes);
      hangmanCanvas.writeCorrectLetter(event.key, indexes);
      hangman.addCorrectLetter(event.key);
    } else {
      hangmanCanvas.writeWrongLetter(event.key, this.errorsLeft);
      hangman.addWrongLetter(event.key);
    }
  }
});
