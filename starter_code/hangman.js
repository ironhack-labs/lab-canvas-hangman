

class Hangman {
  constructor(words) {
    this.words = ['TEST', 'TESTWORD', 'BLA']
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 0
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(number) {

    if (number >= 65 && number <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {

    return !this.letters.includes(letter)

    // for (let i=0; i <= this.secretWord.length; i++)
    // if (letter === indexOf[i]) {
    //   return true
    // }
    // let clickedLetters = ''
  }
  addCorrectLetter(positionInWord) {
    this.guessedLetter += this.secretWord[positionInWord].toUpperCase()
  }

  addWrongLetter(string) {
    this.errorsLeft -= 1
  }

  checkGameOver() {

  }


  checkWinner() {

  }
}

let hangman;

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()
  let mycanvas = new HangmanCanvas(hangman.secretWord)
  mycanvas.createBoard()
  mycanvas.drawLines()
};


document.onkeydown = function (e) {
  let key = String.fromCharCode(e.keyCode)
  // key.toLowerCase()
  if (hangman.secretWord.includes(key)) {
    alert('yay')
  }
};