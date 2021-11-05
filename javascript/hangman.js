class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord(); //palabra secreta que el usuario debe adivinar
    this.letters = [];//letras seleccionadas por el usuario
    this.guessedLetters = (this.letters).toString();
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random()* this.words.length)] 
   
  }
   
 
  checkIfLetter(keyCode) {
     if(keyCode.keyCode > 64 && keyCode.keyCode < 91){
       return true;
     }else{
       return false;
     }
  }

  checkClickedLetters(letter) {
     if(this.letters.includes(letter)){
      return false
     }else{
      return true
     }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
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
  checkIfLetter(event);
});
