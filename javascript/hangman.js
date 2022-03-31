class Hangman {
  constructor(words) {
    this.words = words    
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
   // OBTENER NÚMERO ALEATORIO PARA SABER LA POSICIÓN
  const randomNumber = Math.random() * this.words.length
  
  // QUITAR DECIMALES
  const positionArr = Math.floor(randomNumber)
  
  // RETORNAR PALABRA ALEATORIA
  return this.words[positionArr]
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) {
      return true
    } 
       
    return false   

  }

  checkClickedLetters(letter) {
    // SI LA LETRA YA SE PRESIONÓ, ENTONCES, DEVUELVE UN FALSE
    if(this.letters.includes(letter)){
      return false
    }

    // SI NO SE HA PRESIONADO, ENTONCES, DEVUELVE UN TRUE
    return true
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {

    // DISMINUYE CUÁNTOS ERRORES TODAVÍA PUEDES COMETER
    this.errorsLeft -= 1
    
    // SI LA LETRA NO SE ENCUENTRA EN EL ARREGLO "LETTERS", ENTONCES, AGREGARLO.
    if(!this.letters.includes(letter)) {
      this.letters.push(letter)
    }

    return
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    }
    return true;
  }

  checkWinner() {
    
    // 1. LA PALABRA SECRETA ORDENADA
    const sortedSecretWord = this.secretWord.split("").sort().join("")

    // 2. LAS LETRAS ADIVINADAS POR EL USUARIO, ORENADAMENTE
    const orderedGuessedWord = this.guessedLetters.split("").sort().join("")


    // 3. EVALÚO SI LA PALABRA SECRETA ES LA MISMA QUE LA ADIVINADA
    if(sortedSecretWord === orderedGuessedWord) return true
    
    // 4. EN CASO DE QUE NO SEAN IGUALES, RETORNA FALSO
    return false
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});




















