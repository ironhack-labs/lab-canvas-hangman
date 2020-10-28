class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[0];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
  return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)].toLowerCase();
}

  checkIfLetter(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false : true;
  }

  addCorrectLetter(letter) {
    if (this.secretWord.includes(letter)) {
    this.letters.push(letter);
    this.guessedLetters = this.guessedLetters.concat(letter);
    this.checkWinner();
    } 
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.letters.push(letter);
      this.errorsLeft--;
      this.checkGameOver();
  }
}

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }
  // return this.errorsLeft > 0 ? false : true ;

  checkWinner() {
  return this.guessedLetters.length === this.secretWord.length ? true : false;
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
  let keyCode = event.keyCode;
  let letter;
  if (hangman.checkIfLetter(keyCode)) {
    function linkLetter(keyCode) {
      switch (keyCode) {
        case 65:
          letter = 'a';
          break;
        case 66:
          letter = 'b';
          break;
        case 67:
          letter = 'c';
          break;
        case 68:
          letter = 'd';
          break;
        case 69:
          letter = 'e';
          break;
        case 70:
          letter = 'f';
          break;
        case 71:
          letter = 'g';
          break;
        case 72:
          letter = 'h';
          break;
        case 73:
          letter = 'i';
          break;
        case 74:
          letter = 'j';
          break;
        case 75:
          letter = 'k';
          break;
        case 76:
          letter = 'l';
          break;
        case 77:
          letter = 'm';
          break;
        case 78:
          letter = 'n';
          break;
        case 79:
          letter = 'o';
          break;
        case 80:
          letter = 'p';
          break;
        case 81:
          letter = 'q';
          break;
        case 82:
          letter = 'r';
          break;
        case 83:
          letter = 's';
          break;
        case 84:
          letter = 't';
          break;
        case 85:
          letter = 'u';
          break;
        case 86:
          letter = 'v';
          break;
        case 87:
          letter = 'w';
          break;
        case 88:
          letter = 'x';
          break;
        case 89:
          letter = 'y';
          break;
        case 90:
          letter = 'z';
      }
    }
    linkLetter(keyCode);
    if (hangman.checkClickedLetters(letter)) {
      hangman.addWrongLetter(letter);
      hangman.addCorrectLetter(letter);

      if (hangman.secretWord.includes(letter)) {
        hangmanCanvas.writeCorrectLetter(letter, hangman.secretWord.indexOf(letter));
        if (hangman.checkWinner() === true) {
          hangmanCanvas.winner();
        }
      } else {
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
    }
  }
});
