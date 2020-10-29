class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    const letter = keyCode;
    return (letter > 64 && letter < 91) ? true : false;
  }

  checkClickedLetters(letter) {
    const isIn = this.letters.includes(letter);
    return (isIn) ? true : false;  
  }

  addCorrectLetter(letter) {
    const isIn = this.guessedLetters.includes(letter);
      if (!isIn) this.guessedLetters += letter;
  } 

  addWrongLetter(letter) {
    const isIn = this.letters.includes(letter);
    if(!isIn) this.letters.push(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    return (this.errorsLeft > 0) ? false : true;
  }

  checkWinner() {
    return (this.guessedLetters.length === this.secretWord.length) ? true : false;
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
    const letter = event.key;
    const isLetter = hangman.checkIfLetter(event.keyCode);
    const isRepeated = (hangman.checkClickedLetters(letter) || hangman.guessedLetters.includes(letter))
    console.log(isRepeated)
    const newLetter = (isLetter && !isRepeated) ? true : false;
    const isInWord = hangmanCanvas.secretWord.includes(letter);
    console.log(hangman.secretWord)
    if (newLetter && isInWord) {
      hangman.addCorrectLetter(letter);
      hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(letter))
    } else {
      hangman.addWrongLetter(letter)
      hangman.checkGameOver();
      hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
    }
});
