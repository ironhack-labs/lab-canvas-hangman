class Hangman {
  constructor(words) {
    this.words = words; // asignamos la paralabra de la matriz
    // ... your code goes here
    this.secretWord = this.pickWord(); // asignamos un valor a la palabra
    this.letters = []; // asinar un array vacio
    this.guessedLetters = ""; // asignar un string vacio
    this.errorsLeft = 10; // asiganmos el numero de intentos que debería tener
  }   // definimos todas nuestras de variables

  pickWord() {  // redondea enteros pero para el valor menor math.florr
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) { // funcion en la que valida las letras
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90) return true;
    else return false;  
  }

  checkClickedLetters(letter) { // verificamos si ya se preciono la letra nos regresa un verdadero o falso
    // ... your code goes here
    if (this.letters.includes(letter)) return false;
    else return true; 
  }

  addCorrectLetter(letter) {  // verificamos si la palabra 
    // ... your code goes here
        this.guessedLetters += letter;
    
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() { 
    // ... your code goes here
    if(this.errorsLeft > 0) return false;
    else return true;
  }

  checkWinner() { // se asignaron nuevas funciones en las que tuvimos que verificar por emedio de .spli .sort y .join ordenos las letreas contenidas y despues comparamos esas dos funciones para que nos pudiera dar un booleano
    // ... your code goes here
    let orderSecret = this.secretWord.split("").sort().join("");
    let orderGuessed = this.guessedLetters.split("").sort().join("");
    if (orderSecret === orderGuessed) return true;
    else return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

   //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord); // variable hangmanCanvas estoy almacenando una nueva clase y le paso el argumento de secretword
    hangmanCanvas.createBoard() // invocar la funcion de createBoard ejecuta todo lo que tiene dentro de ella
     


    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
