class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickword(words)
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
    let random= Math.trunc(Math.random()*this.words.length)
    let pickedWord =this.words[random]
    return pickedWord;

  }
  

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true
  }else if(keyCode >=48 && keyCode <=57){
    return false
  }

  }
  checkClickedLetters(letter) {
    if(!this.letters.includes(letter) || !this.guessedLetters.includes(letters)){
      return true
      }else {
        return false  
      }
  }

  addCorrectLetter(letter) {
    if(this.secretWord.includes(letter) && this.checkClickedLetters(letter)){
      this.letter += guessedLetters
    }
  }
  

  addWrongLetter(letter) {
    if(!this.guessedLetters.includes(letter) && this.checkClickedLetters(letter)){
      this.letters.push(letter)
      this.errorsLeft -= 1
    }
  }
  

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true
    }else if(this.errorsLeft === 5){
      return false
    }
  }

  checkWinner() {
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
  // ... your code goes here
});
