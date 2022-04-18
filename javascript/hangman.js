class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    
  }


  pickWord() {
    // ... your code goes here
    // Obtiene una posición o índice aleatorio en el arreglo
    const randomWord = Math.floor(Math.random() *this.words.length)
    
    // Obtiene una palabra aleatorio usando el índice aleatorio de arriba y se guarda en variable
    const secretWord = this.words[randomWord]

    // Se regresa la palabra aleatorio
    return secretWord
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90) {
      return true
    } 
       
    return false   
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    // SI LA LETRA YA SE PRESIONÓ, ENTONCES, DEVUELVE UN FALSE
    if(this.letters.includes(letter)){
    	return false
  }
    // SI NO SE HA PRESIONADO, ENTONCES, DEVUELVE UN TRUE
  return true
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
    // Si la letra no esta incluida en el arreglo letters, se agrega.
    if(!this.letters.includes(letter)){
    	this.letters.push(letter)
  }
    return
  }

  checkGameOver() {
    // ... your code goes here
    // Revisa si errorsLeft es mayor a 0, si es así, el juego aún no acaba y regresa false
    if (this.errorsLeft > 0){
      return false
    }
    // De lo contrario el juego terminó y regresa true
    return true
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
    // HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // ... your code goes here
  });
}
document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  //console.log(event.key)
  let letter = event.key
  hangmanCanvas.writeCorrectLetter(letter)
});