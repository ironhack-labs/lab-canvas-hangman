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
    let loop = this.secretWord.length;
    if (this.secretWord.indexOf(letter.key) !== -1) {
      for (let i = 0; i < loop; i += 1) {
        if (this.secretWord[i] === letter.key.toUpperCase()) {
          this.guessedLetter += letter.key.toUpperCase()
        }
      }
      this.letters.push(letter)
      return true
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter)
    this.checkGameOver()

    switch(this.errorsLeft){
      case 9:
        return 'head'
      break;
      case 7:
        return 'body'
      break;
      case 5:
        return 'legLeft'
      break;
      case 4:
        return 'legRigth'
      break;
      case 2:
        return 'leftArm'
      break;
      case 1:
        return 'rigthArm'
        break;
      default:
    }
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

  if (hangman.addCorrectLetter(e)) {
    gameInstance.writeCorrectLetter(e);
    gameInstance.writeWrongLetter(hangman.letters, hangman.errorsLeft)
    gameInstance.winner(hangman.checkWinner());
  } else {
    gameInstance.drawHangman(hangman.addWrongLetter(e.key));
    gameInstance.writeWrongLetter(hangman.letters, hangman.errorsLeft)
    gameInstance.gameOver(hangman.checkGameOver());
  }
};