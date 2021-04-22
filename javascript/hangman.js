class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return 65 <= keyCode && keyCode <= 90
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
    if(this.checkClickedLetters(letter)){
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0){
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    let winner = true
    this.secretWord.split("").forEach(letter => {
      if(this.guessedLetters.split("").includes(letter) === false){
        winner = false
      }
    })
    return winner
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
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  const keyCode = event.keyCode
  const key = event.key
  if(hangman.checkIfLetter(keyCode) && 
    hangman.checkClickedLetters(key) &&
    !hangman.guessedLetters.includes(key)){
      if(hangman.secretWord.includes(key)){
      hangman.addCorrectLetter(key)
      hangmanCanvas.writeCorrectLetter(key)
      } else {
      hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft)
      hangman.addWrongLetter(key)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
      }
    }
  //console.log(hangman.errorsLeft)
  if(hangman.checkGameOver()){
    hangmanCanvas.gameOver()
  }
  if(hangman.checkWinner()){
    hangmanCanvas.winner()
  }
});
