class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLettersArr = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90 ? true : false);
  }

  checkClickedLetters(letter) {
    return (this.letters.includes(letter) ? false : true);
  }

  addCorrectLetter(letter) {
    this.guessedLetters+=letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
  }

  checkGameOver() {
    return (this.errorsLeft===0 ? true : false);
  }

  checkWinner() {
    return (this.guessedLetters.length === this.secretWord.length ? true : false);
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();

    for (i = 0; i<hangman.secretWord.length; i++) {
      hangman.guessedLettersArr.push(' ');
    }

    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    setTimeout(() => {
      hangmanCanvas.createBoard();
    },1000);
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  let positions = [];
  let letter;

  if (hangman.checkIfLetter(event.keyCode)) {
    letter = event.key;
    if (hangman.secretWord.includes(letter)) {
      positions = hangmanCanvas.getCharPositions(letter, hangmanCanvas.secretWord);
      if (positions.length > 1) {
        positions.forEach(pos => {
          hangman.guessedLettersArr[pos] = letter;
          console.log(hangman.guessedLettersArr);
        } );
      } else {
        hangman.guessedLettersArr[positions[0]] = letter;
      }
      hangman.guessedLetters = hangman.guessedLettersArr.join('');
      if (hangman.checkClickedLetters(letter)) { //will return false if the key has not been pushed
        hangman.letters.push(letter);
        if (positions.length > 1) {
          positions.forEach(pos => {
            hangmanCanvas.writeCorrectLetter(pos, letter.toUpperCase());
          });
        } else {
          hangmanCanvas.writeCorrectLetter(positions[0], letter.toUpperCase());
        }
        console.log(hangman.guessedLetters);
        if (hangman.guessedLetters === hangman.secretWord) {
          setTimeout( () => {
            hangmanCanvas.winner();
          },1000);
          
        }
      } 
    } else {
      if (hangman.checkClickedLetters(letter)) {
        hangman.letters.push(letter);
        hangman.errorsLeft--;
        hangmanCanvas.writeWrongLetter(letter.toUpperCase());
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        if (hangman.errorsLeft === 0) {
          hangmanCanvas.gameOver();
        }
      } 
    }
  }
});
