class Hangman {
  constructor() {
    this.words = ['ALBATROZ', 'CABIDE', 'PARIS', 'VACA']
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
    return !this.letters.includes(letter)
  }
  addCorrectLetter(letter) {
    if (this.secretWord.indexOf(letter.key)) {
      this.guessedLetter += letter.key.toUpperCase()
      this.letters.push(letter)
    }
  }
  addWrongLetter(letter) {
    if (this.secretWord.indexOf(letter)) {
      this.errorsLeft -= 1;
      this.letters.push(letter)
    }
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
  if (hangman.checkClickedLetters(e.key) === false) {
    return alert('test')
  } else {
    hangman.addCorrectLetter(e)
    hangman.addWrongLetter(e)
  }
    
};
