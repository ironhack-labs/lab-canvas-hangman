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
    if ((keyCode >= 65 && keyCode <= 90) || keyCode === 186)  return true;
    return false;
  }

  checkClickedLetters(letter) {
  return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
      if (this.checkClickedLetters(letter) === true) {
          this.guessedLetters += letter
          this.letters.push(letter)
      }
  }

  addWrongLetter(letter) {
      this.secretWord
      console.log(this.errorsLeft)
      for (let i = 0; i < this.secretWord.length; i++) {
          if (this.secretWord[i] !== letter) {
              this.errorsLeft--
                  return this.errorsLeft
          } else { return false }
      }
  }

  checkGameOver() {
      if (this.errorsLeft > 0) {
          return false
      } else {
          return true
      }
  }

  checkWinner() {
      let secretWordArray = this.secretWord.split("")
      let ganador = true
      secretWordArray.forEach((letter) => {
          if (!this.guessedLetters.includes(letter)) ganador = false
      })
      return ganador
  }
}
let hangman;
const startGameButton = document.getElementById('start-game-button');
if (startGameButton) {
  startGameButton.addEventListener('click', event => {
      hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
      hangman.secretWord = hangman.pickWord();
      hangmanCanvas = new HangmanCanvas(hangman.secretWord);
      hangmanCanvas.createBoard()
      hangmanCanvas.drawLines()
  });
}
document.addEventListener('keydown', event => {
  hangman.checkIfLetter(event)
  console.log(hangman.checkIfLetter(event))
  hangman.checkClickedLetters(String.fromCharCode(event.keyCode))
  hangman.addCorrectLetter(String.fromCharCode(event.keyCode))
  hangman.addWrongLetter(String.fromCharCode(event.keyCode))
});
