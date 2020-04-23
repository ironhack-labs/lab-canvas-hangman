class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return(keyCode >= 65 && keyCode <= 90) || keyCode === 192 ? true : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter) ? true : false
  }

  addCorrectLetter(letter) {
    if (!this.guessedLetters.includes(letter)){
      this.guessedLetters += letter;
    }
    if (this.checkWinner()) {
      console.log("YOU WON !!!");
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft --
    if (this.checkClickedLetters(letter)) {
      this.letters.push(letter)
    }
    if (this.checkGameOver()) {
        console.log("YOU LOST")
      }
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false
  }

  checkWinner() {
    let won = true
    for (let i=0;i<this.secretWord.length;i++){
      if (!this.guessedLetters.includes(this.secretWord[i])) {
        won = false
      }
    }
    return won
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    console.log("start button works fine")
    hangmanCanvas.createBoard()
    
  });
}

document.addEventListener('keydown', event => {
  const keyName = event.keyCode;
  const key = event.key;
  let letterIndex = []
  if (hangman.checkIfLetter(keyName)) {
    if (hangman.secretWord.includes(key) ||
        hangman.secretWord.includes(key.toLowerCase())) {
      hangman.addCorrectLetter(key)
      for (let i = 0;i<hangman.secretWord.length;i++) {
        if (hangman.secretWord[i] === key || 
            hangman.secretWord[i] === key.toLowerCase()) {
          letterIndex.push(i)
        }
      hangmanCanvas.writeCorrectLetter(letterIndex)
      }
    } else {
      if (hangman.checkClickedLetters(key)) {
        hangman.addWrongLetter(key);
        hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
      }
    }
  } else {
    console.log("press a correct letter")
  }
});