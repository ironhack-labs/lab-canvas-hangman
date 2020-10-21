class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = ''
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10

    // ... your code goes here
  }

  pickWord() {
    let max = this.words.length
  let min = 0
    let randomNum = Math.random() * (max - min) + min
    //let randomNum = Math.random() * max
    console.log("randomNum:"+Math.floor(randomNum))
    this.secretWord = `${this.word[randomNum]}`
    return `${this.secretWord}`
    return 'sad'
  }

  checkIfLetter(keyCode) {
    if(keyCode >=65 && keyCode <=90){
      return true
    } else{
      return false
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
    return this.guessedLetters+= letter
  }

  addWrongLetter(letter) {
    return this.errorsLeft--
  }

  checkGameOver() {
    if(this.errorsLeft == 0){
      return true
    }else{
      return false
    }
  }

  checkWinner() {
    if(this.guessedLetters == this.secretWord){
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

    hangmanCanvas.createBoard()
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
