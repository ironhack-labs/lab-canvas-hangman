class Hangman {
  constructor(words) {
    this.words = words
    this.secretWord = this.pickWord(words)
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
    }

  pickWord() {
    let random = Math.trunc(Math.random()*this.words.length)
    let randomWord = this.words[random]
      return randomWord
  }

  checkIfLetter(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true
  } else {
    return false
  }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false;
    }else{
      return true;
    }}

  addCorrectLetter(letter) {
    let newLetters = this.guessedLetters += letter
    return newLetters
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if(this.letters.includes(letter)) {
    this.letters.push(letter) 
    }}

  checkGameOver() {
  return !this.errorsLeft > 0
  }

  checkWinner () {
 let newOrder = this.secretWord.split("").sort().join("")
 let guessOrder = this.guessedLetters.split("").sort().join("")
 if (newOrder === guessOrder) return true
 else return false
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

  hangmanCanvas.createBoard()  
});
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
