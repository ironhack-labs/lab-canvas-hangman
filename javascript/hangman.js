class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10
  }

  pickWord() {
    let picked= this.words[Math.floor(Math.random() * this.words.length)];
    return picked
  }

  checkIfLetter(keyCode) {
    if ((keyCode > 64 && keyCode < 91)) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    let coincidencia = this.letters.indexOf(letter);
    if(coincidencia === -1){
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft-=1
    this.letters.push(letter) 
  }

  checkGameOver() {
    if(this.errorsLeft>0){
      return false
    }else{
      return true
    }
  }

  checkWinner() {
    let orderedGuess= this.guessedLetters.split("").sort().join("");
    let orderedSecretWord= this.secretWord.split("").sort().join("");
    if(orderedGuess === orderedSecretWord){
      return true
    }else{
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
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
