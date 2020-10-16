class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(key) {
    return /[a-z]/i.test(key);
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.letters.push(letter);
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    return this.errorsLeft < 1;
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length;
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
    console.log(hangman.secretWord);
  });
}

document.addEventListener('keydown', event => {
  const key = event.key;
  if (!hangman.checkIfLetter(key)) {
    return;
  }
  
  if (!hangman.checkClickedLetters(key)) {
    return;
  }

  let indexArray = [];
  let index = hangman.secretWord.indexOf(key);

  if (index === -1) {
    hangman.addWrongLetter(key);
    hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft);
    hangmanCanvas.drawHangman(hangman.errorsLeft); 
  } else {
    while (index !== -1) {
      indexArray.push(index);
      index = hangman.secretWord.indexOf(key, index + 1);
    }
    indexArray.forEach((index) => {
      hangman.addCorrectLetter(key);
      hangmanCanvas.writeCorrectLetter(index);
    });
  }

  if (hangman.checkGameOver()) {
    setTimeout( () => hangmanCanvas.gameOver(), 100); 
  } 
  if (hangman.checkWinner()) {
    setTimeout(() => hangmanCanvas.winner(), 100) ;
  }
});
