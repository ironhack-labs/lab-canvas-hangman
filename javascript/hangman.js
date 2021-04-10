class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    this.gameWon = false;
    this.gameOver = false;
  }

  pickWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }

  checkIfLetter(keyCode) {
    if((keyCode >= 65 && keyCode <= 90) || ((keyCode >= 97 && keyCode <= 122)))
      return true;
    else
      return false;
  }

  checkClickedLetters(letter) {
    if(this.letters.indexOf(letter) === -1)
      return true;
    else
      return false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if(this.letters.indexOf(letter) === -1) {
      this.errorsLeft--;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }   
  }

  checkWinner() {
    let win = true;
    [...this.secretWord].forEach((letter) => {
      if(this.guessedLetters.indexOf(letter) === -1)
        win = false;
    });
    
    return win;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if(startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord().toUpperCase();
    
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if(hangman.gameWon || hangman.gameOver) {
    return;
  }
  
  let pressedKey = event.key;

  if(pressedKey.length > 1 || !hangman.checkIfLetter(pressedKey.charCodeAt(0))) {
    return;
  }

  pressedKey = pressedKey.toUpperCase();
  
  if(!hangman.checkClickedLetters(pressedKey)) {
    return;
  }

  if(hangman.secretWord.indexOf(pressedKey) === -1) {
    hangman.addWrongLetter(pressedKey);
    hangmanCanvas.writeWrongLetter(pressedKey, hangman.errorsLeft);
    hangmanCanvas.drawHangman(hangman.errorsLeft);
  } else {
    if(hangman.guessedLetters.indexOf(pressedKey) === -1)
      hangman.addCorrectLetter(pressedKey);
    [...hangman.secretWord].forEach((letter, index) => {
      if(hangman.guessedLetters.indexOf(letter) !== -1)
        hangmanCanvas.writeCorrectLetter(index, true)
    });
  }

  if(hangman.checkGameOver()) {
    hangman.gameOver = true;
    [...hangman.secretWord].forEach((letter) => {
      if(hangman.guessedLetters.indexOf(letter) === -1) {
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(letter, false));
      }
        
    });
    hangmanCanvas.gameOver();
  }
  if(hangman.checkWinner()) {
    hangman.gameWon = true;
    hangmanCanvas.winner();
  }
});
