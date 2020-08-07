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
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90) return true;
    return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    // let clickedLetter = 0;
    // this.letters.forEach(element => {
    //   if (letter === element) clickedLetter += 1;
    // });
    // if (clickedLetter >= 1) return false;
    // return true;
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)) this.letters.push(letter);
  }

  checkGameOver() {
    // ... your code goes here
    return !(this.errorsLeft > 0);
  }

  checkWinner() {
    // ... your code goes here
    let correctLetterCount = 0;
    for (let index = 0; index < this.secretWord.length; index++) {
      let letterToCheck = this.secretWord[index];
      if (this.guessedLetters.includes(letterToCheck)) correctLetterCount++;
    }
    return (this.secretWord.length === correctLetterCount);
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

    // ... your code goes here
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  let pressedKeyCode = event.keyCode;
  let pressedLetter = event.key;
  // console.log(pressedKeyCode);
  if (hangman.checkIfLetter(pressedKeyCode)) {
    if (hangman.checkClickedLetters(pressedLetter)) {
      hangman.addCorrectLetter(pressedLetter);
      for (let index = 0; index < hangman.secretWord.length; index++) {
        if (hangman.secretWord[index] === pressedLetter) {
          hangmanCanvas.writeCorrectLetter(index);
        }
      }
    }
  }
});
