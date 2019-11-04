let hangman;

class Hangman {
  constructor() {
    // arreglo del que se toma al azar una palabra
    this.words = ["HOLA", "ADIOS", "JASMINE"];
    // la palabra secreta
    this.secretWord = "";
    // arreglo con los intentos
    this.letters = [];
    // string con las letras correctas
    this.guessedLetter = "";
    // numero de errores inicial (seria mejor tomar el tamano de los intentos)
    this.errorsLeft = 10;
    // bander para saber que el juego esta activo
    this.enable = true;

    this.hc = new HangmanCanvas(this.getWord());
    this.hc.createBoard();
  }

  getWord() {
    // toma al azar una palabra
    const word = this.words[Math.floor(Math.random() * this.words.length)];
    console.log("secret ====>", word);
    this.secretWord = word;
    return word;
  }

  checkIfLetter(keyCode) {
    // revisa que se haya presionado una letra
    return keyCode >= 65 && keyCode <= 90;
  }

  checkClickedLetters(key) {
    // debugger;
    // Checa que el nuevo caracter ingresado, no se haya intentando antes
    // se puede leer como "Puedo intentarlo con el nuevo caracter?"
    const pressedKey = String.fromCharCode(key);
    return !this.letters.includes(pressedKey);
  }

  addCorrectLetter(i) {
    // cuando es un caracter de la palabra secreta, agregarlo a una cadena
    const letter = String.fromCharCode(i);
    this.guessedLetter += letter;
    this.hc.decodeSecret(this.guessedLetter);
    if (this.checkWinner()) {
      this.hc.winner();
    }
  }

  addWrongLetter(letter) {
    // cuando no es correcto, agregar a un array de errores
    this.letters.push(letter);
    this.errorsLeft--;
    this.hc.updateErrors(this.letters, this.errorsLeft);
    if (this.checkGameOver()) {
      this.hc.gameOver();
      this.enable = false;
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return (
      this.secretWord
      .split("")
      .sort()
      .join("") ===
      this.guessedLetter
      .split("")
      .sort()
      .join("")
    );
  }
}

/* document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};
 */

const something = () => {
  hangman = new Hangman();
};

const handleClick = e => {
  if (!hangman.enable) return;
  if (!hangman.checkIfLetter(e.keyCode)) return;
  if (hangman.checkClickedLetters(e.keyCode)) {
    if (hangman.secretWord.includes(String.fromCharCode(e.keyCode))) {
      hangman.addCorrectLetter(e.keyCode);
    } else {
      hangman.addWrongLetter(String.fromCharCode(e.keyCode));
    }
  }
};

document.getElementById("start-game-button").onclick = something;

document.onkeydown = handleClick;