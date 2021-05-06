class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[Math.floor(Math.random() * words.length)];
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];

  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return (keyCode>=65 && keyCode<=90)
  }

  checkClickedLetters(letter) {
    return (!this.letters.includes(letter))
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  
    if(!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft--;

    if(!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return (this.errorsLeft<=0);
  }

  checkWinner() {
    return (this.guessedLetters.length === removeDuplicateCharacters(this.secretWord).length);
  }
}

function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.errorsLeft = 10;
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
}

document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key) && !hangman.checkGameOver() && !hangman.checkWinner()) {
    if(hangman.secretWord.split('').includes(event.key)) {
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(event.key)

      if(hangman.checkWinner()) {
        hangmanCanvas.winner();
      }
    }
    else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key);
      hangmanCanvas.drawHangman(hangman.errorsLeft);

      if(hangman.checkGameOver()) {
        hangmanCanvas.gameOver();
      }
    }
  }

});
