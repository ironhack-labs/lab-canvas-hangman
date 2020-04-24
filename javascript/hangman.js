class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  } 
  
  addWrongLetter(letter) {
    this.errorsLeft--;

    if (!this.letters.includes(letter)){
      this.letters.push(letter);

    }

  }

  checkGameOver() {
    if( this.errorsLeft > 0) {
      return false;
    }
    else {
      return true;
    }
    
  }
  
  checkWinner() {
    let counter = 0;
    for (let i=0;i < this.secretWord.length;i++) {
      if (this.guessedLetters.includes(this.secretWord[i])) {
        counter++;
      }
    }

    return counter === this.secretWord.length;
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
  let key = event.key;
  let keyCode = event.keyCode;

  if (hangman.checkIfLetter(keyCode)) {
    if (arrSecretWord.includes(key)) {
      arrSecretWord.forEach((letter) => {
        if (letter === key) {
          hangman.addCorrectLetter(key);
          hangmanCanvas.writeCorrectLetter();
        }
      })
    }
    else {
      hangman.addWrongLetter(key);
      hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }

  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  }
  if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }




});