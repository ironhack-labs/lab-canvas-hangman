let hangman;
let canvas;

class Hangman {
  constructor() {
    this.words = ['NUTRIOLOGA', 'PERIODISTA', 'JAVASCRIPT', 'GATOPULPO', 'CERVEZA'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  getWord() {
    const random = Math.floor(Math.random() * this.words.length);

    this.secretWord = this.words[random];
    return this.secretWord;
  }
  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      return true;
    } else {
      return false;
    }
  }
  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }
  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    return this.checkWinner();
  }
  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
    return this.checkGameOver();
  }
  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }
  checkWinner() {
    const secretWordValue = this.secretWord;
    const guessedLetterValue = arrayWithGuessesLetters(
      this.secretWord,
      this.guessedLetter
    ).join('');

    if (secretWordValue === guessedLetterValue) {
      return true;
    } else {
      return false;
    }
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.getWord());
  canvas.createBoard();
  canvas.drawLines();
};

document.onkeydown = e => {
  if (hangman && !hangman.checkWinner() && !hangman.checkGameOver()) {
    const hangmanPieces = [
      'line1',
      'line2',
      'line3',
      'head',
      'body',
      'left-arm',
      'right-arm',
      'left-leg',
      'right-leg',
      'face'
    ];

    const { key, keyCode } = e;
    const letter = key.toUpperCase();

    if (hangman.checkIfLetter(keyCode)) {
      if (hangman.checkClickedLetters(letter)) {
        const indexOfLetter = hangman.secretWord.indexOf(letter);

        if (indexOfLetter !== -1) {
          const winner = hangman.addCorrectLetter(indexOfLetter);
          canvas.writeCorrectLetter(hangman.guessedLetter);
          if (winner) {
            canvas.winner();
          }
        } else {
          const loser = hangman.addWrongLetter(letter);
          canvas.writeWrongLetter(hangman.letters);
          canvas.drawHangman(hangmanPieces[9 - hangman.errorsLeft]);
          if (loser) {
            canvas.gameOver();
          }
        }
      }
    }
  }
};