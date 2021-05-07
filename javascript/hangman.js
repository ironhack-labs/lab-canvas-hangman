class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random()* this.words.length)];
    return randomWord
  }

  checkIfLetter(keyCode) {
   if(keyCode >= 65 && keycode <= 90){
     return true
   } else {
     return false
   }
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)){
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    if(this.errorsLeft > 0){
      return false
    } else {
      return true
    }
  }

  checkWinner(){
    for (let i = 0; i < this.secretWord.length; i++){
      if(this.guessedLetters.indexOf(this.secretWord[i]) === -1){
        return false;
      } else {
        return true
      }
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
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
