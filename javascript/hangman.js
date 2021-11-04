class Hangman {
  constructor(words) {
    this.words = words;
    // palabra que se obtiene del método pickWord.
    this.secretWord = this.pickWord();
    // un array vacío que guardará las letras que el usuario ha intentado.
    this.letters = [];
    // un string vacío que guardará las letras que ha adivinado correctamente el usuario.
    this.guessedLetters = "";
    // valor inicial de 10 intentos.
    this.errorsLeft = 10;
  }

  // regresa una palabra random del array de words.
  pickWord() {
    return this.words[Math.floor(Math.random()* this.words.length)];
  }

  // regresa falso o verdadero dependiendo la tecla apretada por el usuario, si corresponde a las letras a-z (de 65 a 90)
  checkIfLetter(keyCode) {
    if (keyCode <= 65 && keyCode >= 90) {
      return true;
    } else {
      return false;
    }
  }
  
  // verifica si una letra apretada por el usuario está dentro del argumento
  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)){
      return true;
    } else {
      return false;
    }
  }

  // agrega la letra correcta a guessedLetters
  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  // resta uno de la variable errorsLeft
  addWrongLetter(letter) {
    if (!this.guessedLetters) {
      this.errorsLeft -= 1;
    }
  }

  // verifica si el usuario ya no tiene vidas. si el número es > 0 regresa falso (el juego continúa), si es 0 regresa true.
  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true;
    } else {
      return false
    }
  }

  // verifica si el usuario gana regresando un valor booleano.
  checkWinner() {
    let okWord = this.secretWord.split();
    if (this.guessedLetters.includes(okWord) && okWord) {
      return true;
    } else {
      return false
    }
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
