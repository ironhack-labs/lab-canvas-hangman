class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord() 
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = this.words[(Math.floor(Math.random()*this.words.length))]
    return randomWord
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter) || this.guessedLetters.includes(letter)) {
      return false;
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    this.letters.push(letter)
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true;
    } else {
      return false
    }
    }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
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

  let userLetter = event.key
  let userLetterKeyCode = event.keyCode //no sé porque lo tacha pero funciona

  if (hangman.checkIfLetter(userLetterKeyCode) === true && hangman.checkClickedLetters(userLetter)) {
    if (hangman.secretWord.includes(userLetter)){
      console.log("VAS BIEN")
      hangman.addCorrectLetter(userLetter)
      
      //Sólo pinta la letra una vez. Si está más de una vez no pinta la siguientes.
      let index = hangman.secretWord.indexOf(userLetter) 
      hangmanCanvas.writeCorrectLetter(userLetter, index)

      if (hangman.checkWinner()) {
        console.log("YOU WIN")
        hangmanCanvas.winner()
      }
    } else {
      console.log('NO ESTA LA LETRA')
      hangman.addWrongLetter(userLetter)
      console.log(hangman.letters) 
      console.log(hangman.errorsLeft)
      hangmanCanvas.writeWrongLetter(userLetter) 
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      if (hangman.checkGameOver()) {
        console.log('GAME OVER') 
        hangmanCanvas.gameOver()
      }
    }
  } else {
    if (!hangman.checkIfLetter(userLetterKeyCode)) {alert('Pulsa una tecla de la A-Z')}
    if (!hangman.checkClickedLetters(userLetter)) {alert('Pulsa una letra nueva')}
  }

});


