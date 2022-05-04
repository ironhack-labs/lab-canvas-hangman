
class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let i = Math.floor(this.words.length * Math.random());
    this.secretWord = this.words[i]
    return `${this.secretWord}`
  }

  checkIfLetter(keyCode) {
    if (64<keyCode && keyCode<91){
      return true;
      //this.letters.push(String.fromCharCode(keyCode)
    } else {return false}
  }

  checkClickedLetters(letter) {
   /* for (let j=0 j< this.letters.length, j++){
    if (letter = letters[j]){return false}
    else {true} */
    if(!this.letters.includes(letter)) return true;
      return false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters+=letter
  }

  addWrongLetter(letter) {
    this.errorsLeft = this.errorsLeft-1;
    this.letters.push(letter)
  }

  checkGameOver() {
    if (this.errorsLeft>0){return false}
    else {return true}
  }

  checkWinner() {
    if(this.secretWord = this.guessedLetters){return true} else {return false}
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
