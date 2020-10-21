class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) return true;
    return false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;// agrega 1 vez.
    this.letters.push(letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    if (this.errorsLeft > 0) return false;
    return true;
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) return true;
    return false;
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
    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  if (hangman.checkIfLetter(event.keyCode)) { // Si es una letra
    if (hangman.checkClickedLetters(event.key)) { // Si ya fue presionada
      if (hangman.secretWord.includes(event.key)) { // Hace parte de la palabra secreta
        const cantidadPalabrasEnSecreto = hangman.secretWord.split(event.key).length - 1;

        for (let i = 0; i < cantidadPalabrasEnSecreto; i++) {
          hangman.addCorrectLetter(event.key);

        }
        // pintar si está bien

      } else {
        hangman.addWrongLetter(event.key);
        //pintar si está mal
      }
    }
  }
  console.log('letters:', hangman.letters);
  console.log('guess ', hangman.guessedLetters);
  console.log('secret ', hangman.secretWord);
  console.log('error ', hangman.errorsLeft);
});
