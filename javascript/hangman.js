class Hangman {
  constructor(words, secretWord, letters, guessedLetters, errorsLeft) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
   return this.words[Math.floor(Math.random()* this.words.length)]; // ... your code goes here
  }

  checkIfLetter(keyCode) {
     if (keyCode>= 65 && keyCode <= 90){
      return true;
    }
    return false;
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
    
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter;// ... your code goes here
  }

  addWrongLetter(letter) {
    return this.errorsLeft -= !this.guessedLetters;// ... your code goes here
  } 

  checkGameOver() {
    if(this.errorsLeft > 0){
      return false;
    }else 
      return true;
    // ... your code goes here
  }

  checkWinner() {
    if(this.guessedLetters.length == this.secretWord.length){
      return true;
    } 
    return false;
    // ... your code goes here
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

console.log(pickWord());


