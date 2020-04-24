class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
    //retorno valor aleatorio del array Words
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    //comprobamos si la tecla presionada por el usuario es un caracter alfabetico
    if (keyCode < 65 || keyCode > 90) {
      return false
    } else return true

  }

  checkClickedLetters(letter) {
    // comprobamos si es la primera vez que el usuario presiona una tecla 
    if (this.letters.indexOf(letter) == -1) {
      return true
    } else return false
  }

  addCorrectLetter(letter) {
    //Si la letra presionada es correcta la añadimos al string
    this.guessedLetters = this.guessedLetters + letter
  }

  addWrongLetter(letter) {
    // quitamos un fallo del contador
    this.errorsLeft--
    //añadimos la letra al array
    this.letters.push(letter)
  }
  checkGameOver() {
    // Si el numero de errores restantes > 0 el juego continua
    if (this.errorsLeft > 0) {
      return false
      //y si no se para
    } else return true
  }

  checkWinner() {
    //Itera la secretWord y la compara con las letras acertadas
    let won = true
    for (let i = 0; i < this.secretWord.length; i++) {
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

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard()
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key

  keyCode = event.keyCode
  keyLetter = event.key
  if (hangman.checkIfLetter(keyCode) && hangman.checkClickedLetters(keyLetter)) {
    hangman.letters.push(keyLetter);
    if (hangman.secretWord.includes(keyLetter)) {
      [...hangman.secretWord].forEach((l, i) => {
        if (l === keyLetter) {
          hangmanCanvas.writeCorrectLetter(i)
        }
      })
      hangman.addCorrectLetter(keyLetter)
      if (hangman.checkWinner()) hangmanCanvas.winner()
    } else {
      hangman.addWrongLetter()
      hangmanCanvas.writeWrongLetter(keyLetter, hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
    }
  }
})