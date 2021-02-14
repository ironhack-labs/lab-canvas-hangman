class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    return (keyCode > 64 && keyCode < 91) ? true : false;
  }

  checkClickedLetters(letter) {
    return (this.letters.indexOf(letter) >= 0 || this.guessedLetters.indexOf(letter) >= 0) ? false : true;
  }

  isCorrect(letter) {
    return this.secretWord.indexOf(letter) >= 0 ? true : false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    // this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
    // this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft < 1 ? true : false
  }

  checkWinner() {
    let allLettersGuessed = false;

    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) >= 0) {
        allLettersGuessed = true;
      } else {
        allLettersGuessed = false;
        break;
      }
    }
    // console.log(allLettersGuessed)
    return allLettersGuessed;
  }


}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    let canvas = document.querySelector('canvas');
    canvas.setAttribute('width', '1200')
    canvas.setAttribute('height', '800')
    canvas.scrollIntoView({
      behavior: "smooth"
    });

    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if (hangman) {
    let key = event.key.toLowerCase();
    let isPermitted = hangman.checkIfLetter(event.keyCode);
    let isNew = hangman.checkClickedLetters(key);
    
    
    if (isPermitted && isNew) {
      let isCorrect = hangman.isCorrect(key);

      if (isCorrect && !hangman.checkWinner() && !hangman.checkGameOver()) {
        hangman.addCorrectLetter(key);
        hangmanCanvas.writeCorrectLetter(key);
      } else if (!isCorrect && !hangman.checkWinner() && !hangman.checkGameOver()){
        hangman.addWrongLetter(key);
        hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft);
      } else {
        window.alert('This game is finished. If you wish to continue, click on the "start game" button or press enter to start a new one.')
      }
    }
  }
});
