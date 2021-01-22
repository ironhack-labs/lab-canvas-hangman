class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomNum = Math.floor(Math.random() * this.words.length);
    return this.words[randomNum];
  }

  checkIfLetter(keyCode) {
    return keyCode > 64 && keyCode < 91 ? true : false;
  }

  checkClickedLetters(letter) {
    const notInclude = !this.letters.includes(letter);
    if (notInclude) {
      this.letters.push(letter);
    }

    return notInclude ? true : false;


  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);

  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    const reArrange = this.secretWord.split('').sort().join('');
    const reArrange1 = this.guessedLetters.split('').sort().join('');
    return reArrange1 === reArrange;
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
    hangmanCanvas.drawLines();
    console.log(hangman.secretWord);
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key);

        let index = hangman.secretWord.split("").reduce((r, n, i) => {
          n === event.key && r.push(i);
          return r;
        }, []);

       index.forEach(idx=> hangmanCanvas.writeCorrectLetter(idx));




      } else {
        console.log("no")
        hangman.addWrongLetter(event.key);
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
    }
  }
});