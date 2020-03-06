class Hangman {
  constructor(words) {
  
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
    
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
   
    if(keyCode >= 65 && keyCode <= 90){
      return true;

    }else{
      return false;
    }
    }
  

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);

    // ... your code goes here
  }

  addCorrectLetter(letter) {
    // ... your code goes here

  return this.guessedLetters += letter;
  
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if(this.letters.length += 1){
      this.errorsLeft -= 1;
    }
    
  }

  checkGameOver() {

    if(this.errorsLeft > 0){
    return false;
    }else{
      return true;
    }
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
    if(this.guessedLetters.length == this.secretWord.length){

     
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord, hangman.errorsLeft);

     // ... your code goes here
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
