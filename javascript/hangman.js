class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.copySecretWord = this.secretWord;
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return 65 <= keyCode && keyCode <= 90;
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)){
      this.letters.push(letter);
      return true;
    }
    return false;
  }

  addCorrectLetter(letter) {
    if(this.secretWord.includes(letter)){
      this.guessedLetters += letter;
      this.copySecretWord = this.copySecretWord.split('').filter(element => element !== letter).join('');
      this.checkWinner();
    }
  }

  addWrongLetter(letter) {
    if(!this.secretWord.includes(letter)){
      this.errorsLeft--;
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    if(this.copySecretWord.length === 0){
     return true;
    }
    return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

// const testWords = ['hello', 'world', 'foo', 'bar'];

// hangman = new Hangman(testWords);

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    // hangman = new Hangman(['arara']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // hangmanCanvas = new HangmanCanvas('arara');
    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  if(hangman.checkIfLetter(event.keyCode)){
    if(hangman.checkClickedLetters(event.key)){
      if(hangman.secretWord.includes(event.key)){
        hangman.addCorrectLetter(event.key);

        hangman.secretWord.split('').forEach((letter, idx) => {
          if(letter === event.key){
            hangmanCanvas.writeCorrectLetter(idx);
          }
        });

        if(hangman.checkWinner()){
          hangmanCanvas.winner();
        }

      } else {
        hangman.addWrongLetter(event.key);
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);

        if(hangman.checkGameOver()){
          hangmanCanvas.gameOver();
        }
      }
    }
  }
});
