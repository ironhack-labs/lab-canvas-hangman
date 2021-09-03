class Hangman {
  constructor(words) {
    this.words = words;//almacenar todas las palabras que se le pueden dar al jugador para que las adivine
   this.secretWord=this.pickWord(words)//guardar la palabra que se generó random 
    this.letters=[]//alamacenar las letras que el usuario ya ha elegido al intentar adivinar
    this.guessedLetters="" // para almacenar las letras que el usuario eligio y adivino
   this.errorsLeft=10 //debe disminuir cada vez que un usuario  elige una letra que no aparece en la palabra que necesita adivinar
    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    let randomWord = Math.trunc(Math.random()*(this.words.length));//trunca (corta) el punto y los dígitos a la derecha de él, sin importar si el argumento es un número positivo o negativo.
    let result = this.words[randomWord]
    return result 
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode>=65&& keyCode<=90){ 
      return true
    }else{
      return false
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.letters.includes(letter)){//si la letra pasada fue seleccionada(clicked)
      return false 
    }else {
      return true
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
   this.guessedLetters+=letter // añadirle a guessedLetters la letra 
    return this.checkWinner()
  }

  addWrongLetter(letter) {
    // ... your code goes here
   this.errorsLeft -=1
   if(this.letters.includes(letter)){
   }else{
     this.letters.push(letter)
   }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft===0){
      return true
   }else{
      return false
    }
  }

  checkWinner() {
    // ... your code goes here
  let orderSecret = this.secretWord.split("").sort().join(""); //split hace array a la palabra que esta en secretWord , sort ordena los elementos del arreglo alfabeticamente, join hace el array de nuevo cadena
  let orderGuessed = this.guessedLetters.split("").sort().join("");///split hace array a la palabra que esta en secretWord , sort ordena los elementos del arreglo alfabeticamente, join hace el array de nuevo cadena
  if (orderSecret === orderGuessed) return true;
  else return false;
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
  
});