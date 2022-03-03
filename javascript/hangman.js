class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    const randomWord = this.words[Math.floor(Math.random() * this.words.length)];
    return randomWord;
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) return true;
    return false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if(this.checkClickedLetters(letter)){
      this.errorsLeft -= 1;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    return this.secretWord.split('').every(letter => this.guessedLetters.includes(letter));
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
