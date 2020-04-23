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

  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});