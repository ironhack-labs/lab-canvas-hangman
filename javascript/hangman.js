class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return (65 <= keyCode && keyCode <= 90);
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  checkIfLetterInSecretWord(letter) {
    if (this.secretWord.includes(letter)) {
      return this.addCorrectLetter(letter);
    } else {
      return this.addWrongLetter(letter);
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    return this.errorsLeft <= 0
  }

  checkWinner() {
    const secretArray = Array.from(this.secretWord);
    const guessedArray = Array.from(this.guessedLetters);
    let matches = 0;

    secretArray.forEach(function(letter) {
      if (guessedArray.includes(letter)) {
        matches++;
      }
    });

    return matches === secretArray.length;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', clickEvent => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.drawLines();

  });
}

document.addEventListener('keydown', event => {
  const keyCode = event.keyCode;
  const key = event.key;
  
  if (hangman.checkIfLetter(keyCode) && hangman.checkClickedLetters(key) && !hangman.guessedLetters.includes(key)) {

    if (hangman.secretWord.includes(key)) {

      hangman.addCorrectLetter(key);
      for (let i = 0; i < hangman.secretWord.length; i++) {
        (hangman.secretWord[i] === key) ? hangmanCanvas.writeCorrectLetter(i) : null;
      }

      if (hangman.checkWinner()) {
        hangmanCanvas.winner();
      } 

    } else {
      
      hangman.addWrongLetter(key);
      hangmanCanvas.writeWrongLetters(hangman.letters.join(' '), hangman.errorsLeft);

      if (hangman.checkGameOver()) {
        hangmanCanvas.gameOver();
      }

    }
  }
});
