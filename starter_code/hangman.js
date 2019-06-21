class Hangman {
  constructor() {
    this.words = ['BELGA', 'ALBATROZ', 'BAZUCA', 'BOOLEAN', 'LAGOSTA']
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    return this.secretWord
  }

  checkIfLetter(letter) {
    return letter > 64 && letter < 91
  }
  checkClickedLetters(letter) {
    if (this.letters.includes(letter) === false) {
      return true;
    }
    return false
  }
  addCorrectLetter(letter) {
    if (this.secretWord.indexOf(letter) !== -1) {
      this.guessedLetter = letter.toUpperCase()
      return true
    }
  }
  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter)
    this.checkGameOver()
  }
  checkGameOver() {
    return this.errorsLeft === 0
  }
  checkWinner() {
    return this.guessedLetter.split('').sort().join('') === this.secretWord.split('').sort().join('')
  }
}

let hangman;
let gameInstance;
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  gameInstance = new HangmanCanvas(hangman.getWord())
  gameInstance.createBoard();
  gameInstance.drawLines();
};


document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e.keyCode) === false) return alert("This is not a fucking letter, dumbass!")
  if (hangman.checkClickedLetters(e.key) === false) return alert('Pressed Already')

  if (hangman.addCorrectLetter(e.key.toUpperCase())) {
    gameInstance.writeCorrectLetter(e);
  } else {
    hangman.addWrongLetter(e.key);
    gameInstance.writeWrongLetter(hangman.letters, hangman.errorsLeft)
  }
};
