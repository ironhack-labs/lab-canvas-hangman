var hangman;

class Hangman {
  constructor() {
    this.words = ['IRONHACK', 'HACKER', 'CODE'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  getWord() {
    const array = this.words,
    random = Math.floor(Math.random() * array.length);
    this.secretWord = array[random];
    return this.secretWord;
  }
  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }
  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false;
    } else {
      return true;
    }
  }
  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
  }
  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }
  addCorrectLetter(i) {
    return this.guessedLetter += String.fromCharCode(i);
  }
  addWrongLetter(letter) {
    if (this.errorsLeft > 0)
    return this.errorsLeft--;
  }
}

let lastKey;

document.getElementById('start-game-button').onclick = function () {
  const logo = document.getElementById('logo'),
  button = document.getElementById('btn-div');
  logo.style.display = 'none';
  button.style.display = 'none';
  
  hangman = new Hangman();
  hangman.getWord();
  
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();
  canvas.drawHangman();
};

document.onkeydown = function (e) {
  const key = e.keyCode,
  secret = hangman.secretWord,
  array = hangman.letters;
  
  if (hangman.checkWinner() === true) {
    return canvas.winner();
  } else if (hangman.checkGameOver() === true) {
    return canvas.gameOver();
  }

  if (hangman.checkIfLetter(key) === true && hangman.checkClickedLetters(key) === true) {
    array.push(key);
  }
  
  if (hangman.checkIfLetter(key) === true && secret.indexOf(String.fromCharCode(key)) > -1 && hangman.guessedLetter.indexOf(String.fromCharCode(key)) === -1) {
    hangman.addCorrectLetter(key);
    canvas.writeCorrectLetter(secret.indexOf(String.fromCharCode(key)));
    console.log(secret.indexOf(String.fromCharCode(key)));
  }
  
  if (hangman.checkIfLetter(key) === true && secret.indexOf(String.fromCharCode(key)) === -1 && key !== lastKey) {
    hangman.addWrongLetter();
    canvas.writeWrongLetter(key, hangman.errorsLeft);
  }
  
  if (hangman.checkWinner() === true) {
    return canvas.winner();
  } else if (hangman.checkGameOver() === true) {
    return canvas.gameOver();
  }

  lastKey = key;
};